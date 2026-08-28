# Arquitectura LexMonitor v0.1

## Capas
- `app/`: interfaz.
- `lib/`: lógica y servicios.
- `lib/monitoring/`: adaptadores de fuentes judiciales.
- `prisma/`: base de datos.
- `docs/`: decisiones y roadmap.

## Monitor judicial
Contrato previsto: cada fuente devuelve `SUCCESS`, `PARTIAL`, `SOURCE_UNAVAILABLE` o `ERROR`, junto con actuaciones normalizadas. Esto permite cambiar CPNU/TYBA/publicaciones sin acoplar la aplicación a una sola fuente.

## Seguridad
Secretos por variables de entorno. Datos reales de clientes fuera del repositorio. Autenticación/autorización antes de producción.
