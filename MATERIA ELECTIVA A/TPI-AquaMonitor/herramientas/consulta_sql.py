"""Ejecuta una consulta SQL contra InfluxDB Cloud (Flight SQL) y la imprime como tabla.

Uso (desde la raiz del proyecto):
    .venv/bin/python herramientas/consulta_sql.py "SELECT * FROM raw_variables LIMIT 5"
    .venv/bin/python herramientas/consulta_sql.py -f consulta.sql

Lee INFLUX_URL, INFLUX_BUCKET e INFLUX_TOKEN de .env (o del entorno). El token NUNCA se
imprime ni se guarda en ningun archivo. Hace falta un token con permiso de LECTURA.
"""
import os
import sys
from pathlib import Path


def cargar_env(ruta: Path) -> None:
    if not ruta.exists():
        return
    for linea in ruta.read_text(encoding="utf-8").splitlines():
        linea = linea.strip()
        if not linea or linea.startswith("#") or "=" not in linea:
            continue
        k, v = linea.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


def main() -> int:
    raiz = Path(__file__).resolve().parent.parent
    cargar_env(raiz / ".env")
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        return 2
    sql = Path(args[1]).read_text(encoding="utf-8") if args[0] == "-f" else " ".join(args)

    faltan = [k for k in ("INFLUX_URL", "INFLUX_BUCKET", "INFLUX_TOKEN") if not os.environ.get(k)]
    if faltan:
        print("Faltan variables:", ", ".join(faltan))
        return 1
    token = os.environ["INFLUX_TOKEN"]

    from influxdb_client_3 import InfluxDBClient3  # import tardio: solo hace falta aca
    host = os.environ["INFLUX_URL"].rstrip("/")
    try:
        cliente = InfluxDBClient3(host=host, token=token, database=os.environ["INFLUX_BUCKET"])
        tabla = cliente.query(query=sql, language="sql")
    except Exception as exc:  # noqa: BLE001
        print("ERROR:", str(exc).replace(token, "<oculto>")[:600])
        return 1

    import pyarrow as pa
    # Los timestamps vienen en nanosegundos: se pasan a microsegundos para poder imprimirlos.
    for i, campo in enumerate(tabla.schema):
        if pa.types.is_timestamp(campo.type) and campo.type.unit == "ns":
            tabla = tabla.set_column(i, campo.name, tabla.column(i).cast(pa.timestamp("us", campo.type.tz), safe=False))
    cols = tabla.column_names
    filas = tabla.to_pylist()
    texto = [[("" if f[c] is None else str(f[c])) for c in cols] for f in filas]
    ancho = [max([len(c)] + [len(r[i]) for r in texto]) for i, c in enumerate(cols)]
    print(" | ".join(c.ljust(ancho[i]) for i, c in enumerate(cols)))
    print("-+-".join("-" * a for a in ancho))
    for r in texto[:200]:
        print(" | ".join(v.ljust(ancho[i]) for i, v in enumerate(r)))
    print(f"({len(filas)} filas)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
