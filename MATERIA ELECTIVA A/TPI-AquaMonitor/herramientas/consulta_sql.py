"""Ejecuta una consulta SQL contra InfluxDB Cloud (Flight SQL) y la imprime como tabla.

Uso (desde la raiz del proyecto):
    .venv/bin/python herramientas/consulta_sql.py "SELECT * FROM raw_variables LIMIT 5"
    .venv/bin/python herramientas/consulta_sql.py -f consulta.sql
    .venv/bin/python herramientas/consulta_sql.py --horas 3 "SELECT ... WHERE $__timeFilter(time)"

Opciones:
    --horas N   reemplaza los macros de Grafana por el rango "ultimas N horas" (por defecto 6):
                $__timeFilter(time) -> time >= now() - INTERVAL 'N hours'
                $__timeFrom / $__timeTo -> (now() - INTERVAL 'N hours') / now()
                Sirve para probar con datos reales las MISMAS consultas que van al dashboard.

Lee INFLUX_URL, INFLUX_BUCKET e INFLUX_TOKEN de .env (o del entorno). El token NUNCA se
imprime ni se guarda en ningun archivo. Hace falta un token con permiso de LECTURA.
Tambien se puede importar:  from consulta_sql import ejecutar  ->  tabla de pyarrow.
"""
import os
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent


def cargar_env(ruta: Path = RAIZ / ".env") -> None:
    if not ruta.exists():
        return
    for linea in ruta.read_text(encoding="utf-8").splitlines():
        linea = linea.strip()
        if not linea or linea.startswith("#") or "=" not in linea:
            continue
        k, v = linea.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


def sustituir_macros(sql: str, horas="6") -> str:
    return (sql.replace("$__timeFilter(time)", f"time >= now() - INTERVAL '{horas} hours'")
               .replace("$__timeFrom", f"(now() - INTERVAL '{horas} hours')")
               .replace("$__timeTo", "now()"))


def ejecutar(sql: str, horas="6"):
    """Ejecuta la consulta y devuelve una tabla de pyarrow (con los timestamps en microsegundos)."""
    cargar_env()
    faltan = [k for k in ("INFLUX_URL", "INFLUX_BUCKET", "INFLUX_TOKEN") if not os.environ.get(k)]
    if faltan:
        raise RuntimeError("Faltan variables: " + ", ".join(faltan))
    token = os.environ["INFLUX_TOKEN"]
    import pyarrow as pa
    from influxdb_client_3 import InfluxDBClient3  # import tardio: solo hace falta aca
    try:
        cliente = InfluxDBClient3(host=os.environ["INFLUX_URL"].rstrip("/"), token=token, database=os.environ["INFLUX_BUCKET"])
        tabla = cliente.query(query=sustituir_macros(sql, horas), language="sql")
    except Exception as exc:  # noqa: BLE001
        raise RuntimeError(str(exc).replace(token, "<oculto>")[:700]) from None
    # Los timestamps vienen en nanosegundos: se pasan a microsegundos para poder imprimirlos.
    for i, campo in enumerate(tabla.schema):
        if pa.types.is_timestamp(campo.type) and campo.type.unit == "ns":
            tabla = tabla.set_column(i, campo.name, tabla.column(i).cast(pa.timestamp("us", campo.type.tz), safe=False))
    return tabla


def imprimir(tabla, maximo=200) -> None:
    cols = tabla.column_names
    filas = tabla.to_pylist()
    texto = [[("" if f[c] is None else str(f[c])) for c in cols] for f in filas]
    ancho = [max([len(c)] + [len(r[i]) for r in texto]) for i, c in enumerate(cols)]
    print(" | ".join(c.ljust(ancho[i]) for i, c in enumerate(cols)))
    print("-+-".join("-" * a for a in ancho))
    for r in texto[:maximo]:
        print(" | ".join(v.ljust(ancho[i]) for i, v in enumerate(r)))
    print(f"({len(filas)} filas)")


def main() -> int:
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        return 2
    horas = "6"
    if "--horas" in args:
        i = args.index("--horas")
        horas = args[i + 1]
        args = args[:i] + args[i + 2:]
    sql = Path(args[1]).read_text(encoding="utf-8") if args[0] == "-f" else " ".join(args)
    try:
        imprimir(ejecutar(sql, horas))
    except RuntimeError as exc:
        print("ERROR:", exc)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
