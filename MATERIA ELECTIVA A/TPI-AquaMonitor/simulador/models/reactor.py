"""Modelo del reactor biológico (EQ03) de la planta AquaMonitor."""
from __future__ import annotations

from typing import Any

from .. import config
from .base import EquipoBase


class ReactorBiologico(EquipoBase):
    """Simula el reactor biológico de tratamiento secundario (lodos activados).

    Variables simuladas:
        * ``PH``      — pH del licor mezcla
        * ``OD``      — oxígeno disuelto (mg/L)
        * ``TEMP``    — temperatura (°C)
        * ``CONDUCT`` — conductividad (µS/cm)
        * ``NIVEL``   — nivel de líquido (%)

    El pH oscila suavemente alrededor de 7,2 con desvíos ocasionales
    (perturbaciones de carga). La temperatura sigue un ciclo diario simulado y
    el oxígeno disuelto está inversamente correlacionado con la temperatura y la
    actividad biológica.
    """

    equipo_id = "EQ03"

    def __init__(self, seed: int | None = None) -> None:
        super().__init__(seed)
        cfg = config.EQUIPOS[self.equipo_id]["variables"]
        self._ph_nom = cfg["PH"]["normal"]
        self._od_nom = cfg["OD"]["normal"]
        self._temp_nom = cfg["TEMP"]["normal"]
        self._cond_nom = cfg["CONDUCT"]["normal"]
        self._nivel_nom = cfg["NIVEL"]["normal"]
        # Desvío de pH que persiste algunos ciclos (perturbación de carga).
        self._ph_desvio = 0.0
        self._ph_desvio_ciclos = 0

    # ------------------------------------------------------------------
    def paso(self) -> None:
        """Avanza el estado y gestiona los desvíos transitorios de pH."""
        super().paso()
        if self._ph_desvio_ciclos > 0:
            self._ph_desvio_ciclos -= 1
            if self._ph_desvio_ciclos == 0:
                self._ph_desvio = 0.0
        # Aparición aleatoria de una perturbación de carga (~3 % por ciclo).
        elif self._rng.random() < 0.03:
            self._ph_desvio = self._rng.uniform(-0.35, 0.35)
            self._ph_desvio_ciclos = self._rng.randint(3, 8)

    # ------------------------------------------------------------------
    def leer(self) -> dict[str, dict[str, Any]]:
        """Genera las lecturas del ciclo actual para las 5 variables."""
        # --- Temperatura (ciclo diario lento) --------------------------
        temp = (
            self._temp_nom
            + self._sinusoide(amplitud=3.0, periodo_ciclos=720.0)
            + self._ruido(0.25)
        )

        # --- pH -------------------------------------------------------
        ph = (
            self._ph_nom
            + self._sinusoide(amplitud=0.08, periodo_ciclos=110.0)
            + self._ph_desvio
            + self._ruido(0.04)
        )
        if self._anomalia_activa("PH_SPIKE"):
            # Excursión sostenida fuera de rango (ácida o alcalina).
            signo = 1.0 if (self._ciclo % 2 == 0) else -1.0
            ph += signo * (1.4 + abs(self._ruido(0.2)))

        # --- Oxígeno disuelto (inverso a temperatura y actividad) -----
        od = (
            self._od_nom
            - 0.06 * (temp - self._temp_nom)
            + self._sinusoide(amplitud=0.35, periodo_ciclos=95.0, desfase=1.3)
            + self._ruido(0.12)
        )

        # --- Conductividad ------------------------------------------
        conduct = (
            self._cond_nom
            + self._sinusoide(amplitud=120.0, periodo_ciclos=260.0)
            + self._deriva(0.05)  # leve acumulación salina
            + self._ruido(25.0)
        )

        # --- Nivel --------------------------------------------------
        nivel = (
            self._nivel_nom
            + self._sinusoide(amplitud=5.0, periodo_ciclos=130.0, desfase=0.4)
            + self._ruido(0.8)
        )
        nivel = self._clip(nivel, 0.0, 100.0)

        return {
            "PH": {
                "value": round(ph, 3),
                "quality": self._quality("PH", ph),
            },
            "OD": {
                "value": round(max(od, 0.0), 3),
                "quality": self._quality("OD", od),
            },
            "TEMP": {
                "value": round(temp, 3),
                "quality": self._quality("TEMP", temp),
            },
            "CONDUCT": {
                "value": round(max(conduct, 0.0), 3),
                "quality": self._quality("CONDUCT", conduct),
            },
            "NIVEL": {
                "value": round(nivel, 3),
                "quality": self._quality("NIVEL", nivel),
            },
        }
