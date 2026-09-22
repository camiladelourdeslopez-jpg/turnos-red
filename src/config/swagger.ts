const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Turnos Red API",
    version: "1.0.0",
    description:
      "API para gestionar turnos médicos, incluyendo altas, consultas, actualización y eliminación.",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Servidor local de desarrollo",
    },
  ],
  tags: [
    {
      name: "Turnos",
      description: "Operaciones relacionadas con la gestión de turnos",
    },
    {
      name: "Medicos",
      description: "Operaciones relacionadas con la gestión de médicos",
    },
  ],
  paths: {
    "/turnos": {
      get: {
        tags: ["Turnos"],
        summary: "Listar todos los turnos",
        description:
          "Obtiene la colección de turnos. Se admiten filtros opcionales por especialidad, fecha y médico.",
        parameters: [
          {
            name: "especialidad",
            in: "query",
            required: false,
            description: "Filtra turnos por especialidad",
            schema: {
              type: "string",
            },
          },
          {
            name: "fecha",
            in: "query",
            required: false,
            description: "Filtra turnos por fecha",
            schema: {
              type: "string",
              format: "date",
            },
          },
          {
            name: "medicoId",
            in: "query",
            required: false,
            description: "Filtra turnos por ID del médico",
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          200: {
            description: "Listado de turnos obtenido correctamente",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Turno",
                  },
                },
              },
            },
          },
          400: {
            description: "Parámetros de consulta inválidos",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["Turnos"],
        summary: "Registrar un nuevo turno",
        description: "Crea un turno nuevo a partir del body enviado.",
        requestBody: {
          required: true,
          description: "Datos del turno a registrar",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TurnoInput",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Turno creado correctamente",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Turno",
                },
              },
            },
          },
          400: {
            description: "Datos inválidos",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
        },
      },
    },
    "/turnos/{id}": {
      get: {
        tags: ["Turnos"],
        summary: "Obtener un turno por ID",
        description: "Devuelve un turno específico según su identificador.",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID del turno",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Turno encontrado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Turno",
                },
              },
            },
          },
          404: {
            description: "Turno no encontrado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["Turnos"],
        summary: "Actualizar un turno",
        description: "Actualiza los datos de un turno existente por ID.",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID del turno",
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          description: "Campos que se desean actualizar del turno",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TurnoInput",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Turno actualizado correctamente",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Turno",
                },
              },
            },
          },
          400: {
            description: "Datos inválidos",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
          404: {
            description: "Turno no encontrado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ["Turnos"],
        summary: "Eliminar un turno",
        description: "Elimina un turno por su identificador.",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID del turno",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Turno eliminado correctamente",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Turno eliminado",
                    },
                  },
                },
              },
            },
          },
          204: {
            description: "Operación exitosa sin contenido de respuesta",
          },
          404: {
            description: "Turno no encontrado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
        },
      },
    },
    "/medicos": {
      get: {
        tags: ["Medicos"],
        summary: "Listar todos los médicos",
        description:
          "Obtiene la colección de médicos. Se admiten filtros opcionales por especialidad, fecha y médico.",
        parameters: [
          {
            name: "especialidad",
            in: "query",
            required: false,
            description: "Filtra médicos por especialidad",
            schema: {
              type: "string",
            },
          },
          {
            name: "fecha",
            in: "query",
            required: false,
            description: "Filtra médicos por fecha relevante a la agenda",
            schema: {
              type: "string",
              format: "date",
            },
          },
          {
            name: "medicoId",
            in: "query",
            required: false,
            description: "Filtra médicos por ID del médico",
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          200: {
            description: "Listado de médicos obtenido correctamente",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Medico",
                  },
                },
              },
            },
          },
          400: {
            description: "Parámetros de consulta inválidos",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["Medicos"],
        summary: "Registrar un nuevo médico",
        description: "Crea un médico nuevo a partir del body enviado.",
        requestBody: {
          required: true,
          description: "Datos del médico a registrar",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/MedicoInput",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Médico creado correctamente",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Medico",
                },
              },
            },
          },
          400: {
            description: "Datos inválidos",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
        },
      },
    },
    "/medicos/{id}": {
      get: {
        tags: ["Medicos"],
        summary: "Obtener un médico por ID",
        description: "Devuelve un médico específico según su identificador.",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID del médico",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Médico encontrado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Medico",
                },
              },
            },
          },
          404: {
            description: "Médico no encontrado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["Medicos"],
        summary: "Actualizar un médico",
        description: "Actualiza los datos de un médico existente por ID.",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID del médico",
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          description: "Campos que se desean actualizar del médico",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/MedicoInput",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Médico actualizado correctamente",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Medico",
                },
              },
            },
          },
          400: {
            description: "Datos inválidos",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
          404: {
            description: "Médico no encontrado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ["Medicos"],
        summary: "Eliminar un médico",
        description: "Elimina un médico por su identificador.",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID del médico",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Médico eliminado correctamente",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Médico eliminado",
                    },
                  },
                },
              },
            },
          },
          204: {
            description: "Operación exitosa sin contenido de respuesta",
          },
          404: {
            description: "Médico no encontrado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error",
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Turno: {
        type: "object",
        required: [
          "id",
          "paciente",
          "documento",
          "especialidad",
          "fecha",
          "hora",
          "confirmado",
          "motivo",
        ],
        properties: {
          id: {
            type: "string",
            example: "1",
          },
          paciente: {
            type: "string",
            example: "Ana Gómez",
          },
          documento: {
            type: "string",
            example: "12345678",
          },
          especialidad: {
            type: "string",
            enum: ["Clínica médica", "Pediatría", "Odontología", "Nutrición"],
            example: "Clínica médica",
          },
          fecha: {
            type: "string",
            format: "date",
            example: "2026-09-22",
          },
          hora: {
            type: "string",
            example: "10:00",
          },
          confirmado: {
            type: "boolean",
            example: true,
          },
          motivo: {
            type: "string",
            example: "Consulta de control",
          },
          observaciones: {
            type: "string",
            example: "Paciente con seguimiento previo",
            nullable: true,
          },
        },
      },
      TurnoInput: {
        type: "object",
        required: ["paciente", "documento", "especialidad", "fecha", "hora"],
        properties: {
          paciente: {
            type: "string",
            example: "Ana Gómez",
          },
          documento: {
            type: "string",
            example: "12345678",
          },
          especialidad: {
            type: "string",
            enum: ["Clínica médica", "Pediatría", "Odontología", "Nutrición"],
            example: "Clínica médica",
          },
          fecha: {
            type: "string",
            format: "date",
            example: "2026-09-22",
          },
          hora: {
            type: "string",
            example: "10:00",
          },
          confirmado: {
            type: "boolean",
            example: true,
          },
          motivo: {
            type: "string",
            example: "Consulta de control",
          },
          observaciones: {
            type: "string",
            example: "Paciente con seguimiento previo",
            nullable: true,
          },
        },
      },
      Medico: {
        type: "object",
        required: ["id", "nombre", "especialidad", "disponible"],
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          nombre: {
            type: "string",
            example: "Dr. Laura Pérez",
          },
          especialidad: {
            type: "string",
            enum: ["Clínica médica", "Pediatría", "Odontología", "Nutrición"],
            example: "Clínica médica",
          },
          disponible: {
            type: "boolean",
            example: true,
          },
        },
      },
      MedicoInput: {
        type: "object",
        required: ["nombre", "especialidad", "disponible"],
        properties: {
          nombre: {
            type: "string",
            example: "Dr. Laura Pérez",
          },
          especialidad: {
            type: "string",
            enum: ["Clínica médica", "Pediatría", "Odontología", "Nutrición"],
            example: "Clínica médica",
          },
          disponible: {
            type: "boolean",
            example: true,
          },
        },
      },
      ErrorResponse: {
        type: "object",
        required: ["message"],
        properties: {
          message: {
            type: "string",
            example: "Error al procesar la solicitud",
          },
        },
      },
    },
  },
};

export default swaggerDefinition;
