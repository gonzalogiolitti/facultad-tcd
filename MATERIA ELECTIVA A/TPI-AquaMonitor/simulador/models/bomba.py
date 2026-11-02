"""Modelo de la bomba de ingreso (EQ01) de la planta AquaMonitor."""
from __future__ import annotations

from typing import Any

from .. import config
from .base import EquipoBase


class BombaIngreso(EquipoBase):
    """Simula la bomba de elevación de agua cruda a la entrada de la planta.

    Variables simuladas:
        * ``CAUDAL``    — caudal de impulsión (m³/h)
        * ``PRESION``   — presión de descarga (bar)
        * ``CORRIENTE`` — corriente de fase del motor (A)
        * ``VIBRACION`` — velocidad eficaz de vibración (mm/s)
        * ``ESTADO``    — marcha/parada (1/0)

    El comportamiento nominal combina el valor de consigna con una oscilación
    sinusoidal lenta (variación de demanda) y ruido gaussiano de sensor. Las
    magnitudes están acopladas de forma simplificada: a mayor caudal, mayor
    corriente y algo menos de presión (curva de la bomba).
    """

    equipo_id = "EQ01"

    def __init__(self, seed: int | None = None) -> None:
        super().__init__(seed)
        cfg = config.EQUIPOS[self.equipo_id]["variables"]
        self._caudal_nom = cfg["CAUDAL"]["normal"]
        self._presion_nom = cfg["PRESION"]["normal"]
        self._corriente_nom = cfg["CORRIENTE"]["normal"]
        self._vibracion_nom = cfg["VIBRACION"]["normal"]
        # Nivel de vibración de base, que puede crecer si se inyecta desgaste.
        self._vib_base = self._vibracion_nom
        self._en_marcha = True

    # ------------------------------------------------------------------
    def leer(self) -> dict[str, dict[str, Any]]:
        """Genera las lecturas del ciclo actual para las 5 variables."""
        # --- Estado de marcha -------------------------------------------------
        if self._anomalia_activa("CAUDAL_DROP") and self._rng.random() < 0.10:
            # Ocasionalmente la protección para la bomba durante la falla.
            self._en_marcha = False
        elif not self._anomalia_activa("CAUDAL_DROP"):
            self._en_marcha = True
        estado_val = 1.0 if self._en_marcha else 0.0

        if not self._en_marcha:
            # Bomba parada: todas las magnitudes colapsan a ~0.
            return {
                "CAUDAL": {"value": round(abs(self._ruido(0.4)), 3),
                           "quality": config.QUALITY_GOOD},
                "PRESION": {"value": round(abs(self._ruido(0.05)), 3),
                            "quality": config.QUALITY_GOOD},
                "CORRIENTE": {"value": round(abs(self._ruido(0.3)), 3),
                              "quality": config.QUALITY_GOOD},
                "VIBRACION": {"value": round(abs(self._ruido(0.05)), 3),
                              "quality": config.QUALITY_GOOD},
                "ESTADO": {"value": estado_val, "quality": config.QUALITY_GOOD},
            }

        # --- Caudal ---------------------------------------------------------
        caudal = (
            self._caudal_nom
            + self._sinusoide(amplitud=6.0, periodo_ciclos=180.0)
            + self._ruido(1.8)
        )
        if self._anomalia_activa("CAUDAL_DROP"):
            # Caída del 35-55 % del caudal nominal.
            caudal *= self._rng.uniform(0.45, 0.65)

        # --- Presión (inversamente ligada al caudal) ----------------------
        desv_caudal = (caudal - self._caudal_nom) / self._caudal_nom
        presion = (
            self._presion_nom
            - 1.2 * desv_caudal * self._presion_nom * 0.15
            + self._sinusoide(amplitud=0.08, periodo_ciclos=90.0, desfase=1.0)
            + self._ruido(0.06)
        )
        if self._anomalia_activa("CAUDAL_DROP"):
            presion *= self._rng.uniform(0.70, 0.85)

        # --- Corriente (proporcional al caudal) --------------------------
        corriente = (
            self._corriente_nom * (0.55 + 0.45 * caudal / self._caudal_nom)
            + self._ruido(0.7)
        )
        if self._anomalia_activa("CAUDAL_DROP"):
            # Cavitación: corriente inestable y algo más baja.
            corriente *= self._rng.uniform(0.80, 0.92)
            corriente += self._ruido(2.5)

        # --- Vibración -----------------------------------------------------
        vibracion = (
            self._vib_base
            + self._sinusoide(amplitud=0.25, periodo_ciclos=60.0, desfase=0.5)
            + abs(self._ruido(0.30))
        )
        if self._anomalia_activa("VIB_HIGH"):
            # Progresión de la falla: crece cuanto más tiempo lleva activa.
            ciclos_rest = self._anomalias["VIB_HIGH"]
            avance = 1.0 - ciclos_rest / max(
                config.ANOMALIAS["VIB_HIGH"]["ciclos_default"], 1
            )
            vibracion += 4.5 + 4.0 * avance + abs(self._ruido(0.6))

        return {
            "CAUDAL": {
                "value": round(max(caudal, 0.0), 3),
                "quality": self._quality("CAUDAL", caudal),
            },
            "PRESION": {
                "value": round(max(presion, 0.0), 3),
                "quality": self._quality("PRESION", presion),
            },
            "CORRIENTE": {
                "value": round(max(corriente, 0.0), 3),
                "quality": self._quality("CORRIENTE", corriente),
            },
            "VIBRACION": {
                "value": round(max(vibracion, 0.0), 3),
                "quality": self._quality("VIBRACION", vibracion),
            },
            "ESTADO": {"value": estado_val, "quality": config.QUALITY_GOOD},
        }
