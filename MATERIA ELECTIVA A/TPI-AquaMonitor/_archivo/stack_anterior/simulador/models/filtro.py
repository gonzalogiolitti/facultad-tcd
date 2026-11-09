"""Modelo del filtro de arena (EQ02) de la planta AquaMonitor."""
from __future__ import annotations

from typing import Any

from .. import config
from .base import EquipoBase


class FiltroArena(EquipoBase):
    """Simula el filtro de arena de pulido de turbidez.

    Variables simuladas:
        * ``TURB_IN``     — turbidez de entrada (NTU)
        * ``TURB_OUT``    — turbidez de salida / agua filtrada (NTU)
        * ``PRES_DIF``    — presión diferencial del lecho (mbar)
        * ``CAUDAL_FILT`` — caudal filtrado (m³/h)
        * ``EFICIENCIA``  — eficiencia de remoción de turbidez (%)

    A lo largo de la operación el lecho se colmata: la presión diferencial
    aumenta de forma monótona y la turbidez de salida se degrada lentamente
    (pérdida de eficiencia). Un retrolavado periódico automático "resetea" el
    estado cada ``ciclos_retrolavado`` ciclos.
    """

    equipo_id = "EQ02"

    def __init__(self, seed: int | None = None,
                 ciclos_retrolavado: int = 240) -> None:
        super().__init__(seed)
        cfg = config.EQUIPOS[self.equipo_id]["variables"]
        self._turb_in_nom = cfg["TURB_IN"]["normal"]
        self._turb_out_nom = cfg["TURB_OUT"]["normal"]
        self._pres_dif_nom = cfg["PRES_DIF"]["normal"]
        self._caudal_nom = cfg["CAUDAL_FILT"]["normal"]
        self._ciclos_retrolavado = ciclos_retrolavado
        # Estado de colmatación normalizado [0, 1+]; 0 = lecho limpio.
        self._colmatacion = 0.0

    # ------------------------------------------------------------------
    def paso(self) -> None:
        """Avanza el estado: incrementa la colmatación y aplica retrolavado."""
        super().paso()
        # Velocidad de colmatación: base + extra si hay anomalía FILTER_SAT.
        velocidad = 1.0 / self._ciclos_retrolavado
        if self._anomalia_activa("FILTER_SAT"):
            velocidad *= 6.0
        self._colmatacion += velocidad
        # Retrolavado automático al alcanzar el ciclo programado.
        if self._ciclo % self._ciclos_retrolavado == 0:
            self._colmatacion = 0.0

    # ------------------------------------------------------------------
    def leer(self) -> dict[str, dict[str, Any]]:
        """Genera las lecturas del ciclo actual para las 5 variables."""
        col = self._colmatacion

        # --- Turbidez de entrada -----------------------------------------
        turb_in = (
            self._turb_in_nom
            + self._sinusoide(amplitud=2.5, periodo_ciclos=200.0)
            + abs(self._ruido(1.2))
        )

        # --- Turbidez de salida (se degrada con la colmatación) ---------
        # A lecho limpio remueve ~90 %; muy colmatado, se ensucia la salida.
        turb_out = (
            self._turb_out_nom
            + 0.9 * col * self._turb_out_nom
            + 0.02 * (turb_in - self._turb_in_nom)
            + abs(self._ruido(0.05))
        )
        if self._anomalia_activa("FILTER_SAT"):
            turb_out += 0.6 + abs(self._ruido(0.15))

        # --- Presión diferencial (crece con la colmatación) -------------
        pres_dif = (
            self._pres_dif_nom
            + 520.0 * col
            + self._sinusoide(amplitud=12.0, periodo_ciclos=70.0)
            + self._ruido(8.0)
        )
        if self._anomalia_activa("FILTER_SAT"):
            pres_dif += 180.0

        # --- Caudal filtrado (cae levemente al colmatarse) --------------
        caudal_filt = (
            self._caudal_nom * (1.0 - 0.18 * min(col, 1.2))
            + self._sinusoide(amplitud=4.0, periodo_ciclos=150.0, desfase=0.7)
            + self._ruido(1.5)
        )

        # --- Eficiencia de remoción ------------------------------------
        turb_out_efectiva = max(turb_out, 1e-6)
        eficiencia = (turb_in - turb_out_efectiva) / max(turb_in, 1e-6) * 100.0
        eficiencia = self._clip(eficiencia + self._ruido(0.6), 0.0, 100.0)

        return {
            "TURB_IN": {
                "value": round(max(turb_in, 0.0), 3),
                "quality": self._quality("TURB_IN", turb_in),
            },
            "TURB_OUT": {
                "value": round(max(turb_out, 0.0), 3),
                "quality": self._quality("TURB_OUT", turb_out),
            },
            "PRES_DIF": {
                "value": round(max(pres_dif, 0.0), 3),
                "quality": self._quality("PRES_DIF", pres_dif),
            },
            "CAUDAL_FILT": {
                "value": round(max(caudal_filt, 0.0), 3),
                "quality": self._quality("CAUDAL_FILT", caudal_filt),
            },
            "EFICIENCIA": {
                "value": round(eficiencia, 3),
                "quality": self._quality("EFICIENCIA", eficiencia),
            },
        }
