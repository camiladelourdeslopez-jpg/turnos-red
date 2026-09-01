# Proyecto turnos-red
API 1 - Integraciones web

## Descripción
Aplicación backend en **Node.js + TypeScript + Express + Socket.IO** para la gestión de turnos médicos.  
Incluye persistencia en archivo JSON, emisión de eventos en tiempo real y pruebas unitarias con Jest.

---

## Requisitos previos
- Node.js v20 o superior  
- npm (incluido con Node.js)  
- Visual Studio Code (opcional, recomendado)  
- Git (para clonar el repositorio)

---

## Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/turnos-red.git
   cd turnos-red
    ```
## Instalar dependencias 
npm install

## Inicializar proyecto 
npm init -y

## Crear carpeta data y archivo turnos.json
 ```json
[
  {
    "id": 1,
    "paciente": "Juan Pérez",
    "documento": "12345678",
    "especialidad": "Clínica",
    "fecha": "2026-09-01",
    "hora": "09:00",
    "confirmado": true,
    "motivo": "Consulta general"
  },
  {
    "id": 2,
    "paciente": "María Gómez",
    "documento": "87654321",
    "especialidad": "Pediatría",
    "fecha": "2026-09-02",
    "hora": "10:30",
    "confirmado": false,
    "motivo": "Control rutinario"
  },
  {
    "id": 99,
    "fecha": "2026-09-01",
    "paciente": "Paciente Test",
    "motivo": "Consulta de prueba",
    "documento": "12345678",
    "especialidad": "Clínica",
    "hora": "10:00",
    "confirmado": false
  },
  {
    "id": 99,
    "fecha": "2026-09-01",
    "paciente": "Paciente Test",
    "motivo": "Consulta de prueba",
    "documento": "12345678",
    "especialidad": "Clínica",
    "hora": "10:00",
    "confirmado": false
  },
  {
    "id": 99,
    "fecha": "2026-09-01",
    "paciente": "Paciente Test",
    "motivo": "Consulta de prueba",
    "documento": "12345678",
    "especialidad": "Clínica",
    "hora": "10:00",
    "confirmado": false
  },
  {
    "id": 99,
    "fecha": "2026-09-01",
    "paciente": "Paciente Test",
    "motivo": "Consulta de prueba",
    "documento": "12345678",
    "especialidad": "Clínica",
    "hora": "10:00",
    "confirmado": false
  },
  {
    "id": 200,
    "fecha": "2026-09-05",
    "paciente": "Paciente Update",
    "motivo": "Chequeo actualizado",
    "documento": "55555555",
    "especialidad": "Cardiología",
    "hora": "10:30",
    "confirmado": true
  }
]
 ``` 
## Variables de entorno
| Variable | Descripción | Valor por defecto |
| --- | --- | --- |
| ``PORT`` | Puerto en el que corre el servidor | ``3000`` |
| ``DATA_PATH`` | Ruta al archivo de persistencia de turnos | ``./data/turnos.json`` |

## Scripts disponibles
| Script | Descripción |
| --- | --- |
| ``npm ``start`` | Inicia el servidor Express en modo producción |
| ``npm ``run ``dev`` | Inicia el servidor en modo desarrollo con **ts-node-dev** |
| ``npm ``test`` | Ejecuta las pruebas unitarias con Jest |
| ``npm ``run ``build`` | Compila el proyecto TypeScript a JavaScript en la carpeta ``dist/`` |
| ``npm ``run ``lint`` | Ejecuta ESLint para verificar estilo y errores de código |
| ``npm ``run ``format`` | Aplica Prettier para formatear el código |

## Estructura de carpetas 
 ```
turnos-red/
├── src/
│   ├── controllers/       # Controladores de endpoints REST
│   │   └── turnos.controller.ts
│   ├── models/            # Definición de interfaces y tipos
│   │   └── turno.model.ts
│   ├── routes/            # Definición de rutas Express
│   │   └── turnos.routes.ts
│   ├── services/          # Lógica de negocio y persistencia
│   │   └── turnos.service.ts
│   └── index.ts           # Punto de entrada del servidor
│
├── tests/                 # Pruebas unitarias con Jest
│   └── turnos.services.test.ts
│
├── data/                  # Persistencia en JSON
│   └── turnos.json
│
├── package.json           # Configuración de npm
├── tsconfig.json          # Configuración de TypeScript
└── README.md              # Documentación del proyecto
 ```

