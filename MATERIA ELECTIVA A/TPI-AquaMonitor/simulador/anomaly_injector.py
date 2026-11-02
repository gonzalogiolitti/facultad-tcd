"""Inyector de anomalías del simulador de la planta AquaMonitor.

Coordina la activación de anomalías nombradas sobre los modelos de equipo. Se
puede usar de dos formas:

* **Manual**: llamando a :meth:`AnomalyInjector.inyectar` con el nombre de la
  anomalía (útil para demos y para la presentación del TPI).
* **Programada**: registrando disparos en ciertos ciclos con
  :meth:`AnomalyInjector.programar`, o dejando el modo aleatorio activo para que
  aparezcan anomalías esporádicas.
"""
from __future__ import annotations

import logging
import random
from typing import Any

from . import config
from .models.base import EquipoBase

logger = logging.getLogger(__name__)


class AnomalyInjector:
    """Aplica anomalías del catálogo ``config.ANOMALIAS`` a los modelos."""

    def __init__(
        self,
        equipos: dict[str, EquipoBase],
        modo_aleatorio: bool = False,
        prob_por_ciclo: float = 0.01,
        seed: int | None = None,
    ) -> None:
        """Inicializa el inyector.

        Args:
            equipos: Mapa ``{equipo_id: modelo}`` con los equipos simulados.
            modo_aleatorio: Si es ``True``, cada ciclo puede disparar una
                anomalía al azar con probabilidad ``prob_por_ciclo``.
            prob_por_ciclo: Probabilidad de disparo aleatorio por ciclo.
            seed: Semilla del generador aleatorio interno.
        """
        self._equipos = equipos
        self._modo_aleatorio = modo_aleatorio
        self._prob_por_ciclo = prob_por_ciclo
        self._rng = random.Random(seed)
        # {ciclo: [(tipo, ciclos_duracion), ...]}
        self._agenda: dict[int, list[tuple[str, int | None]]] = {}
        self._ciclo_actual = 0
        self._historial: list[dict[str, Any]] = []

    # ------------------------------------------------------------------
    #  API pública
    # ------------------------------------------------------------------
    def inyectar(self, tipo: str, ciclos: int | None = None) -> None:
        """Inyecta la anomalía ``tipo`` de inmediato.

        Args:
            tipo: Clave de ``config.ANOMALIAS`` (``VIB_HIGH``, ``CAUDAL_DROP``,
                ``PH_SPIKE``, ``FILTER_SAT``).
            ciclos: Duración en ciclos; ``None`` usa el valor por defecto.

        Raises:
            KeyError: Si ``tipo`` no existe en el catálogo.
        """
        if tipo not in config.ANOMALIAS:
            raise KeyError(f"Anomalía desconocida: {tipo!r}")
        meta = config.ANOMALIAS[tipo]
        equipo = self._equipos[meta["equipo"]]
        dur = ciclos if ciclos is not None else meta["ciclos_default"]
        equipo.inyectar_anomalia(tipo, dur)
        registro = {
            "ciclo": self._ciclo_actual,
            "tipo": tipo,
            "equipo": meta["equipo"],
            "variables": list(meta["variables"]),
            "duracion_ciclos": dur,
            "severidad": meta["severidad"],
            "descripcion": meta["descripcion"],
        }
        self._historial.append(registro)
        logger.warning(
            "ANOMALÍA INYECTADA | ciclo=%s tipo=%s equipo=%s duración=%s ciclos | %s",
            self._ciclo_actual, tipo, meta["equipo"], dur, meta["descripcion"],
        )

    def programar(self, ciclo: int, tipo: str, ciclos: int | None = None) -> None:
        """Agenda una anomalía para que se dispare al llegar a ``ciclo``."""
        if tipo not in config.ANOMALIAS:
            raise KeyError(f"Anomalía desconocida: {tipo!r}")
        self._agenda.setdefault(ciclo, []).append((tipo, ciclos))

    def tick(self, ciclo: int) -> None:
        """Procesa el ciclo ``ciclo``: dispara anomalías agendadas y aleatorias.

        Debe llamarse una vez por ciclo, antes de leer los equipos.
        """
        self._ciclo_actual = ciclo

        # 1) Anomalías agendadas explícitamente.
        for tipo, ciclos in self._agenda.pop(ciclo, []):
            self.inyectar(tipo, ciclos)

        # 2) Modo aleatorio.
        if self._modo_aleatorio and self._rng.random() < self._prob_por_ciclo:
            tipo = self._rng.choice(list(config.ANOMALIAS))
            # Evitar solapar la misma anomalía si ya está activa.
            meta = config.ANOMALIAS[tipo]
            if tipo not in self._equipos[meta["equipo"]].anomalias_activas():
                self.inyectar(tipo)

    # ------------------------------------------------------------------
    #  Consultas
    # ------------------------------------------------------------------
    def anomalias_activas(self) -> dict[str, list[str]]:
        """Devuelve ``{equipo_id: [anomalías activas]}`` para el ciclo actual."""
        return {
            eid: eq.anomalias_activas()
            for eid, eq in self._equipos.items()
            if eq.anomalias_activas()
        }

    @property
    def historial(self) -> list[dict[str, Any]]:
        """Historial completo de anomalías inyectadas."""
        return list(self._historial)
