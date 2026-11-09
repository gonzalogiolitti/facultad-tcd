# Carpeta grafana

| Archivo | Qué es |
|---|---|
| **`aquamonitor_dashboard.json`** | **El dashboard vigente.** Consultas SQL sobre InfluxDB Cloud. Se importa en Grafana Cloud (ver README, sección 11). Se genera con `scripts/construir_dashboard.py`; no se edita a mano |
| `dashboards/*.json` | *Respaldo* del primer diseño: 3 dashboards para QuestDB (fuente PostgreSQL). No sirven con InfluxDB |
