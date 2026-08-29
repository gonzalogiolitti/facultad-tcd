# Modelo de negocio — "AquaMonitor" (Business Model Canvas)

Producto: **AquaMonitor** — plataforma SaaS de monitoreo IIoT y analítica para
plantas de tratamiento de aguas industriales, basada en la norma ISA-95.

---

## 1. Propuesta de valor

- **Visibilidad en tiempo real** del estado de bombas, filtros y reactores desde
  cualquier dispositivo, sin inversión en servidores.
- **Mantenimiento predictivo**: detección temprana de desgaste (vibración) y
  colmatación (presión diferencial) mediante Z-score, Bollinger y regresión de
  tendencia → menos paradas no programadas.
- **Cumplimiento y trazabilidad**: histórico inmutable de calidad de vertido
  (turbidez, pH) con firma de integridad por lectura, listo para auditorías
  ambientales.
- **KPIs operativos automáticos** (eficiencia energética, eficiencia de
  filtración, tiempo fuera de rango de pH) por hora / turno / día / semana.
- **Despliegue en días, no meses**: arquitectura estándar (MQTT + Node-RED +
  QuestDB + Grafana) sobre free/low tiers, escalable a producción.

## 2. Segmentos de clientes

- **Primario**: PyMEs industriales con planta de tratamiento propia (alimenticia,
  textil, química, curtiembres, láctea, cervecera) — 3 a 30 equipos críticos.
- **Secundario**: operadores tercerizados de plantas de efluentes que gestionan
  múltiples sitios y necesitan un tablero unificado.
- **Terciario**: municipios pequeños con plantas de potabilización / cloacales.

## 3. Canales

- Venta directa consultiva (equipo comercial técnico) para el primario.
- Alianzas con integradores de automatización y estudios de ingeniería
  ambiental (canal indirecto).
- Prueba guiada de 30 días con datos del simulador + onboarding asistido.
- Contenido técnico (blog, webinars ISA-95, casos de éxito) para inbound.

## 4. Relación con el cliente

- Onboarding asistido (mapeo de tags ISA-95 y umbrales).
- Soporte por tickets + SLA según plan; canal de alertas críticas 24/7 en plan
  Enterprise.
- Autoservicio: documentación, plantillas de dashboards y flows importables.
- Revisión trimestral de KPIs y tuning de umbrales con un ingeniero de la cuenta.

## 5. Fuentes de ingresos

**Modelo SaaS por equipo monitorizado (suscripción mensual):**

| Plan | Precio (USD/equipo/mes) | Incluye |
|---|---|---|
| Starter | 25 | Hasta 5 equipos, retención 3 meses, alertas por email, 1 dashboard |
| Pro | 45 | Hasta 20 equipos, retención 12 meses, analítica (Z-score/Bollinger/tendencia), 3 dashboards, alertas email + webhook |
| Enterprise | 70 + fee anual | Equipos ilimitados, retención 36 meses, on-premise opcional, SSO, SLA 99.9 %, soporte 24/7 |

**Ingresos complementarios:**
- Setup / integración inicial: USD 1.500 – 6.000 (única vez, según nº de equipos).
- Módulo de reportes regulatorios personalizados: +USD 150/mes.
- Capacitación ISA-95 / analítica de datos: USD 800 por jornada.

## 6. Recursos clave

- Plataforma cloud multi-tenant (broker MQTT gestionado, QuestDB, Grafana).
- Biblioteca de modelos analíticos y de umbrales por tipo de equipo.
- Equipo de ingeniería de datos + especialistas en tratamiento de aguas.
- Marca, documentación y catálogo de conectores/flows.

## 7. Actividades clave

- Desarrollo y operación de la plataforma (SRE, seguridad, escalado).
- I+D de algoritmos de detección y mantenimiento predictivo.
- Onboarding e integración con PLC/SCADA existentes (OPC-UA, Modbus→MQTT).
- Soporte, éxito del cliente y mejora continua de dashboards.

## 8. Socios clave

- **Integradores de automatización** (canal + implementación en sitio).
- **Proveedores cloud** (crédito y co-marketing).
- **Fabricantes de sensores / gateways IIoT** (bundles hardware + AquaMonitor).
- **Consultoras ambientales** (validación regulatoria, prescripción).
- **Cámaras industriales y programas de eficiencia energética** (llegada a PyMEs).

## 9. Estructura de costos

| Rubro | Naturaleza | Comentario |
|---|---|---|
| Infraestructura cloud (broker, DB, Grafana, backups) | Variable | Escala con nº de equipos y retención |
| Personal I+D e ingeniería | Fijo | Principal costo en etapa temprana |
| Soporte y éxito del cliente | Semi-variable | Crece con la base instalada |
| Comercial y marketing | Semi-variable | CAC objetivo < 6 meses de suscripción |
| Licencias / herramientas | Fijo | Observabilidad, CRM, firma de código |
| Cumplimiento y seguridad (auditorías, pentest) | Fijo | Necesario para el plan Enterprise |

**Lógica económica:** margen bruto objetivo > 75 % (SaaS), payback de CAC < 6
meses, expansión de ingresos vía nº de equipos por cliente (land & expand).
