"""Clase base compartida por los modelos de equipo del simulador.

Provee utilidades comunes para generar señales realistas:

* ruido gaussiano (variabilidad de sensor),
* variación sinusoidal lenta (deriva térmica, ciclos de proceso),
* gestión de anomalías temporales (activas durante N ciclos),
* estimación de la calidad del dato (``quality`` 0/1/2).
"""
from __future__ import annotations

import math
import random
from typing import Any

from .. import config


class EquipoBase:
    """Base para ``BombaIngreso``, ``FiltroArena`` y ``ReactorBiologico``."""

    #: Identificador ISA-95 del equipo (lo define cada subclase).
    equipo_id: str = ""

    def __init__(self, seed: int | None = None) -> None:
        """Inicializa el generador de números aleatorios y el estado interno.

        Args:
            seed: Semilla para reproducibilidad. ``None`` => aleatorio real.
        """
        self._rng = random.Random(seed)
        self._ciclo: int = 0
        # {tipo_anomalia: ciclos_restantes}
        self._anomalias: dict[str, int] = {}
        # Fase inicial aleatoria por instancia para las sinusoides lentas.
        self._fase = self._rng.uniform(0.0, 2.0 * math.pi)

    # ------------------------------------------------------------------
    #  Generadores de señal
    # ------------------------------------------------------------------
    def _ruido(self, sigma: float) -> float:
        """Ruido gaussiano de media 0 y desvío ``sigma`` (ruido de sensor)."""
        return self._rng.gauss(0.0, sigma)

    def _sinusoide(self, amplitud: float, periodo_ciclos: float,
                   desfase: float = 0.0) -> float:
        """Variación sinusoidal lenta.

        Args:
            amplitud: Amplitud pico de la oscilación.
            periodo_ciclos: Período de la onda expresado en ciclos de simulación.
            desfase: Desfase adicional en radianes.

        Returns:
            Contribución sinusoidal para el ciclo actual.
        """
        if periodo_ciclos <= 0:
            return 0.0
        w = 2.0 * math.pi / periodo_ciclos
        return amplitud * math.sin(w * self._ciclo + self._fase + desfase)

    def _deriva(self, pendiente_por_ciclo: float) -> float:
        """Deriva lineal acumulada (envejecimiento / colmatación)."""
        return pendiente_por_ciclo * self._ciclo

    # ------------------------------------------------------------------
    #  Anomalías
    # ------------------------------------------------------------------
    def inyectar_anomalia(self, tipo: str, ciclos: int | None = None) -> None:
        """Activa una anomalía nombrada durante ``ciclos`` iteraciones.

        Args:
            tipo: Clave del catálogo ``config.ANOMALIAS`` (p. ej. ``"VIB_HIGH"``).
            ciclos: Duración en ciclos. ``None`` => valor por defecto del catálogo.

        Raises:
            KeyError: Si ``tipo`` no está en el catálogo o no aplica a este equipo.
        """
        meta = config.ANOMALIAS[tipo]
        if meta["equipo"] != self.equipo_id:
            raise KeyError(
                f"La anomalía {tipo!r} corresponde al equipo {meta['equipo']}, "
                f"no a {self.equipo_id}"
            )
        self._anomalias[tipo] = ciclos if ciclos is not None else meta["ciclos_default"]

    def limpiar_anomalias(self) -> None:
        """Cancela todas las anomalías activas."""
        self._anomalias.clear()

    def _anomalia_activa(self, tipo: str) -> bool:
        """Indica si la anomalía ``tipo`` está activa en este ciclo."""
        return self._anomalias.get(tipo, 0) > 0

    def anomalias_activas(self) -> list[str]:
        """Lista de anomalías actualmente activas."""
        return [t for t, c in self._anomalias.items() if c > 0]

    # ------------------------------------------------------------------
    #  Ciclo de simulación
    # ------------------------------------------------------------------
    def paso(self) -> None:
        """Avanza el estado interno un ciclo y decrementa las anomalías activas."""
        self._ciclo += 1
        for tipo in list(self._anomalias):
            self._anomalias[tipo] -= 1
            if self._anomalias[tipo] <= 0:
                del self._anomalias[tipo]

    def leer(self) -> dict[str, dict[str, Any]]:
        """Devuelve ``{VARIABLE: {"value": float, "quality": int}}``.

        Debe ser implementada por cada subclase.
        """
        raise NotImplementedError

    # ------------------------------------------------------------------
    #  Calidad del dato
    # ------------------------------------------------------------------
    def _quality(self, variable: str, value: float) -> int:
        """Estima la calidad del dato comparando con límites físicos plausibles.

        * ``GOOD``      si el valor está dentro de un margen del rango de operación.
        * ``UNCERTAIN`` si se excede levemente (hasta 50 % fuera del rango).
        * ``BAD``       si el valor es físicamente inverosímil.
        """
        cfg = config.EQUIPOS[self.equipo_id]["variables"][variable]
        lo, hi = cfg["min_op"], cfg["max_op"]
        span = hi - lo if hi > lo else 1.0
        if lo - 0.5 * span <= value <= hi + 0.5 * span:
            # Dentro de tolerancia amplia -> dato bueno (aunque dispare alarma).
            if lo - 0.05 * span <= value <= hi + 0.05 * span:
                return config.QUALITY_GOOD
            return config.QUALITY_GOOD
        if lo - 1.5 * span <= value <= hi + 1.5 * span:
            return config.QUALITY_UNCERTAIN
        return config.QUALITY_BAD

    # ------------------------------------------------------------------
    #  Utilidades
    # ------------------------------------------------------------------
    @staticmethod
    def _clip(value: float, lo: float, hi: float) -> float:
        """Recorta ``value`` al intervalo ``[lo, hi]``."""
        return max(lo, min(hi, value))
