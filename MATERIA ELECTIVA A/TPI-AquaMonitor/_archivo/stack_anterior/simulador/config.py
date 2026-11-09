"""Configuración central del simulador IIoT de la planta AquaMonitor.

Define la jerarquía ISA-95, los tres equipos monitorizados, sus variables de
proceso, unidades de ingeniería, rangos normales de operación y umbrales de
alerta (``warning`` / ``critical``).

Toda la información de identificación (empresa, planta, área, equipo, tag) sigue
la codificación jerárquica de la norma ISA-95:

    EMPRESA . PLANTA . AREA . EQUIPO . VARIABLE
      AQM   .  PTEF  . CAPT .  EQ01  .  CAUDAL

El tag "plano" que viaja en el payload MQTT usa guiones en lugar de puntos para
ser seguro como parte de un identificador y de un topic:

    AQM-PTEF-CAPT-EQ01-CAUDAL
"""
from __future__ import annotations

from typing import Any, Final

# ---------------------------------------------------------------------------
#  Jerarquía ISA-95 — niveles superiores (comunes a toda la planta)
# ---------------------------------------------------------------------------
EMPRESA: Final[str] = "AQM"          # AquaMonitor S.A. (Enterprise)
PLANTA: Final[str] = "PTEF"          # Planta de Tratamiento de Efluentes (Site)
PLANTA_DESCRIPCION: Final[str] = "Planta de Tratamiento de Aguas Industriales"

# Base de topics MQTT: EMPRESA/PLANTA  ->  el simulador completa /EQ/VAR
MQTT_TOPIC_BASE_DEFAULT: Final[str] = f"{EMPRESA}/{PLANTA}"

# Separador del tag plano y del tag jerárquico
SEP_TAG_PLANO: Final[str] = "-"
SEP_TAG_JERARQUICO: Final[str] = "."

# ---------------------------------------------------------------------------
#  Niveles de la pirámide de automatización (ISA-95 / ISA-88)
# ---------------------------------------------------------------------------
# Se asocia cada variable a un nivel para la documentación y el enriquecimiento
# en Node-RED.  Nivel 0 = campo (sensores/actuadores), Nivel 1 = control (PLC).
NIVEL_CAMPO: Final[str] = "Nivel 0 - Campo (instrumentación)"
NIVEL_CONTROL: Final[str] = "Nivel 1 - Control (PLC/DCS)"

# ---------------------------------------------------------------------------
#  Calidad del dato (estilo OPC-UA simplificado)
# ---------------------------------------------------------------------------
QUALITY_BAD: Final[int] = 0        # dato no confiable / sensor en falla
QUALITY_UNCERTAIN: Final[int] = 1  # dato sospechoso (fuera de rango físico leve)
QUALITY_GOOD: Final[int] = 2       # dato válido

# ---------------------------------------------------------------------------
#  Definición de equipos y variables
# ---------------------------------------------------------------------------
# Estructura de cada variable:
#   {
#       "unit":     unidad de ingeniería,
#       "nivel":    nivel de la pirámide de automatización,
#       "normal":   valor nominal de operación,
#       "min_op":   límite inferior del rango normal de operación,
#       "max_op":   límite superior del rango normal de operación,
#       "warning":  (lo, hi) umbral de advertencia (None si no aplica ese lado),
#       "critical": (lo, hi) umbral crítico (None si no aplica ese lado),
#       "descripcion": texto legible,
#   }
#
# Convención para variables "de un solo lado" (p. ej. vibración: sólo importa el
# valor alto): el umbral se expresa como (None, hi).

EQUIPOS: Final[dict[str, dict[str, Any]]] = {
    # =====================================================================
    #  EQ01 — Bomba de ingreso (elevación de agua cruda)
    # =====================================================================
    "EQ01": {
        "nombre": "Bomba de Ingreso",
        "clase": "BombaIngreso",
        "area": "CAPT",
        "area_descripcion": "Captación y Bombeo",
        "variables": {
            "CAUDAL": {
                "unit": "m3/h",
                "nivel": NIVEL_CAMPO,
                "normal": 120.0,
                "min_op": 95.0,
                "max_op": 150.0,
                "warning": (90.0, 155.0),
                "critical": (70.0, 175.0),
                "descripcion": "Caudal de impulsión de la bomba de ingreso",
            },
            "PRESION": {
                "unit": "bar",
                "nivel": NIVEL_CAMPO,
                "normal": 4.5,
                "min_op": 3.8,
                "max_op": 5.2,
                "warning": (3.5, 5.5),
                "critical": (2.5, 6.5),
                "descripcion": "Presión en la brida de descarga",
            },
            "CORRIENTE": {
                "unit": "A",
                "nivel": NIVEL_CAMPO,
                "normal": 45.0,
                "min_op": 38.0,
                "max_op": 52.0,
                "warning": (None, 55.0),
                "critical": (None, 65.0),
                "descripcion": "Corriente de fase del motor de la bomba",
            },
            "VIBRACION": {
                "unit": "mm/s",
                "nivel": NIVEL_CAMPO,
                "normal": 2.8,
                "min_op": 0.5,
                "max_op": 4.5,
                # Umbrales alineados a ISO 10816-3 (máquinas medianas, base rígida)
                "warning": (None, 4.5),
                "critical": (None, 7.1),
                "descripcion": "Velocidad eficaz de vibración (RMS) en el rodamiento lado acople",
            },
            "ESTADO": {
                "unit": "bool",
                "nivel": NIVEL_CONTROL,
                "normal": 1.0,
                "min_op": 0.0,
                "max_op": 1.0,
                # 0 = bomba parada de forma inesperada -> crítico
                "warning": None,
                "critical": (0.5, None),  # value < 0.5 dispara crítico
                "descripcion": "Estado de marcha de la bomba (1 = en marcha, 0 = parada)",
            },
        },
    },
    # =====================================================================
    #  EQ02 — Filtro de arena (pulido de turbidez)
    # =====================================================================
    "EQ02": {
        "nombre": "Filtro de Arena",
        "clase": "FiltroArena",
        "area": "FILT",
        "area_descripcion": "Filtración",
        "variables": {
            "TURB_IN": {
                "unit": "NTU",
                "nivel": NIVEL_CAMPO,
                "normal": 8.0,
                "min_op": 3.0,
                "max_op": 15.0,
                "warning": (None, 15.0),
                "critical": (None, 25.0),
                "descripcion": "Turbidez del agua a la entrada del filtro",
            },
            "TURB_OUT": {
                "unit": "NTU",
                "nivel": NIVEL_CAMPO,
                "normal": 0.8,
                "min_op": 0.2,
                "max_op": 1.5,
                "warning": (None, 1.5),
                "critical": (None, 2.0),
                "descripcion": "Turbidez del agua filtrada (calidad de salida)",
            },
            "PRES_DIF": {
                "unit": "mbar",
                "nivel": NIVEL_CAMPO,
                "normal": 350.0,
                "min_op": 150.0,
                "max_op": 600.0,
                "warning": (None, 600.0),
                "critical": (None, 800.0),
                "descripcion": "Presión diferencial a través del lecho filtrante (colmatación)",
            },
            "CAUDAL_FILT": {
                "unit": "m3/h",
                "nivel": NIVEL_CAMPO,
                "normal": 115.0,
                "min_op": 90.0,
                "max_op": 140.0,
                "warning": (90.0, None),
                "critical": (70.0, None),
                "descripcion": "Caudal de agua efectivamente filtrada",
            },
            "EFICIENCIA": {
                "unit": "%",
                "nivel": NIVEL_CONTROL,
                "normal": 90.0,
                "min_op": 80.0,
                "max_op": 99.0,
                "warning": (80.0, None),
                "critical": (70.0, None),
                "descripcion": "Eficiencia de remoción de turbidez ((TURB_IN-TURB_OUT)/TURB_IN)",
            },
        },
    },
    # =====================================================================
    #  EQ03 — Reactor biológico (tratamiento secundario)
    # =====================================================================
    "EQ03": {
        "nombre": "Reactor Biológico",
        "clase": "ReactorBiologico",
        "area": "REAC",
        "area_descripcion": "Tratamiento Biológico",
        "variables": {
            "PH": {
                "unit": "pH",
                "nivel": NIVEL_CAMPO,
                "normal": 7.2,
                "min_op": 6.8,
                "max_op": 7.6,
                "warning": (6.5, 8.0),
                "critical": (6.0, 8.5),
                "descripcion": "pH del licor mezcla en el reactor",
            },
            "OD": {
                "unit": "mg/L",
                "nivel": NIVEL_CAMPO,
                "normal": 2.5,
                "min_op": 1.8,
                "max_op": 3.5,
                "warning": (1.5, 4.0),
                "critical": (1.0, 5.0),
                "descripcion": "Oxígeno disuelto en el licor mezcla",
            },
            "TEMP": {
                "unit": "C",
                "nivel": NIVEL_CAMPO,
                "normal": 22.0,
                "min_op": 16.0,
                "max_op": 28.0,
                "warning": (15.0, 30.0),
                "critical": (10.0, 35.0),
                "descripcion": "Temperatura del licor mezcla",
            },
            "CONDUCT": {
                "unit": "uS/cm",
                "nivel": NIVEL_CAMPO,
                "normal": 1200.0,
                "min_op": 800.0,
                "max_op": 1800.0,
                "warning": (None, 1800.0),
                "critical": (None, 2200.0),
                "descripcion": "Conductividad eléctrica (carga salina / iónica)",
            },
            "NIVEL": {
                "unit": "%",
                "nivel": NIVEL_CAMPO,
                "normal": 75.0,
                "min_op": 45.0,
                "max_op": 88.0,
                "warning": (40.0, 90.0),
                "critical": (20.0, 95.0),
                "descripcion": "Nivel de líquido en el reactor",
            },
        },
    },
}

# ---------------------------------------------------------------------------
#  Catálogo de anomalías inyectables
# ---------------------------------------------------------------------------
# Cada anomalía referencia un equipo, una o más variables afectadas y una
# duración por defecto en ciclos de simulación.
ANOMALIAS: Final[dict[str, dict[str, Any]]] = {
    "VIB_HIGH": {
        "equipo": "EQ01",
        "variables": ["VIBRACION"],
        "descripcion": "Vibración crítica en la bomba de ingreso (desbalanceo / rodamiento)",
        "ciclos_default": 15,
        "severidad": "critical",
    },
    "CAUDAL_DROP": {
        "equipo": "EQ01",
        "variables": ["CAUDAL", "PRESION", "CORRIENTE"],
        "descripcion": "Caída brusca de caudal (cavitación / obstrucción en aspiración)",
        "ciclos_default": 10,
        "severidad": "warning",
    },
    "PH_SPIKE": {
        "equipo": "EQ03",
        "variables": ["PH"],
        "descripcion": "Excursión de pH fuera de rango en el reactor biológico",
        "ciclos_default": 8,
        "severidad": "critical",
    },
    "FILTER_SAT": {
        "equipo": "EQ02",
        "variables": ["PRES_DIF", "TURB_OUT", "EFICIENCIA"],
        "descripcion": "Saturación acelerada del lecho filtrante (colmatación)",
        "ciclos_default": 20,
        "severidad": "warning",
    },
}

# ---------------------------------------------------------------------------
#  Helpers de tags
# ---------------------------------------------------------------------------

def tag_plano(equipo_id: str, variable: str) -> str:
    """Devuelve el tag ISA-95 plano: ``AQM-PTEF-<AREA>-<EQ>-<VAR>``."""
    area = EQUIPOS[equipo_id]["area"]
    partes = [EMPRESA, PLANTA, area, equipo_id, variable]
    return SEP_TAG_PLANO.join(partes)


def tag_jerarquico(equipo_id: str, variable: str) -> str:
    """Devuelve el tag ISA-95 jerárquico: ``AQM.PTEF.<AREA>.<EQ>.<VAR>``."""
    area = EQUIPOS[equipo_id]["area"]
    partes = [EMPRESA, PLANTA, area, equipo_id, variable]
    return SEP_TAG_JERARQUICO.join(partes)


def topic_mqtt(topic_base: str, equipo_id: str, variable: str) -> str:
    """Construye el topic MQTT ``<base>/<EQ>/<VAR>`` (p. ej. ``AQM/PTEF/EQ01/CAUDAL``)."""
    return f"{topic_base.strip('/')}/{equipo_id}/{variable}"


def iter_variables():
    """Itera ``(equipo_id, variable, cfg_variable)`` sobre todos los equipos."""
    for equipo_id, cfg in EQUIPOS.items():
        for variable, cfg_var in cfg["variables"].items():
            yield equipo_id, variable, cfg_var


# Total de variables de proceso definidas (debe ser 15).
TOTAL_VARIABLES: Final[int] = sum(len(e["variables"]) for e in EQUIPOS.values())
