"""Modelos de equipos del simulador de la planta AquaMonitor.

Cada modelo expone la misma interfaz mínima:

* ``leer() -> dict[str, dict]``  — lecturas actuales de todas sus variables.
* ``inyectar_anomalia(tipo, ciclos)`` — activa un modo de falla.
* ``paso()`` — avanza el estado interno un ciclo de simulación.
"""
from .bomba import BombaIngreso
from .filtro import FiltroArena
from .reactor import ReactorBiologico

__all__ = ["BombaIngreso", "FiltroArena", "ReactorBiologico"]
