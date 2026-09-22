# Título
ADR-001: Uso de OpenAPI/Swagger como estándar de documentación de la API

# Fecha
2026-09-22

# Estado
Aceptado

# Contexto
La API de Turnos Red expone contratos HTTP para recursos como turnos y médicos. Requiere documentación clara, navegable y verificable para desarrolladores, integradores y pruebas automatizadas. Además, el proyecto ya incorpora el uso de Swagger UI y swagger-jsdoc, por lo que es necesario mantener una documentación compartida y consistente con el comportamiento real del backend.

El equipo necesita una referencia única del contrato de la API para:
- validar los endpoints disponibles,
- entender request/response esperados,
- facilitar pruebas manuales con инструimientos como Postman u OpenAPI UI,
- reducir errores de integración entre frontend y backend.

# Decisión
Se adopta Swagger/OpenAPI 3.0 como estándar oficial de documentación interactiva del contrato de la API del proyecto.

Esto implica:
- definir una especificación OpenAPI centralizada,
- exponer la documentación en una ruta pública de la aplicación,
- documentar endpoints, parámetros, requestBody y respuestas esperadas,
- mantener el contrato alineado con los modelos de dominio y con la validación por Zod.

# Consecuencias
Positivas:
- mejora la usabilidad y trazabilidad del API,
- permite explorar la API sin leer código fuente,
- facilita validación automática y pruebas de integración,
- ayuda a mantener un contrato consistente entre backend y clientes.

Negativas:
- requiere mantenimiento continuo cuando cambian endpoints o modelos,
- puede producir documentación desactualizada si no se sincroniza con el código.

# Alternativas consideradas
1. Documentación manual en Markdown.
   - Ventaja: simple y barato de comenzar.
   - Desventaja: no es interactiva ni estandarizada.

2. Documentación sólo en Postman.
   - Ventaja: útil para testing manual.
   - Desventaja: no reemplaza la especificación formal de la API y no es un contrato técnico reusable.

3. No documentar la API.
   - Ventaja: menor esfuerzo inicial.
   - Desventaja: alta fricción para integración y mantenimiento.

# Limitaciones
- La documentación está acoplada a la evolución del código y de los modelos.
- La especificación no reemplaza validaciones de negocio ni pruebas de integración exhaustivas.
- La documentación interactiva no garantiza automáticamente la calidad del backend si los endpoints no están bien implementados.

# Impacto sobre el proyecto
Este ADR impacta directamente en la experiencia de desarrollo y en la mantenibilidad del proyecto. La adopción de OpenAPI mejora la claridad del contrato de la API, acelera la integración con clientes externos y refuerza la disciplina de versionado y documentación del servicio.
