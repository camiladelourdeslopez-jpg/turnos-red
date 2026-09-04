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
# Proyecto turnos-red
API 2 - Integraciones web

## Requisitos previos
- Node.js >= 18
- npm >= 9
- VS Code (opcional, recomendado)
- Postman (para pruebas de API)

## Guía de instalación y ejecución
```bash 
Clonar repositorio
git clone https://github.com/usuario/turnos-medicos.git
cd turnos-medicos
```
### Instalar dependencias
npm install

### Ejecutar en desarrollo
npm run dev

### Compilar y ejecutar en producción
npm run build
npm start

### Estructura de directorios
```
turnos-medicos/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── data/
│   └── index.ts
├── tests/
├── .env
├── .env.example
├── package.json
└── README.md
```
### Variables de entorno

| Variable | Descripción | Ejemplo |
| --- | --- | --- |
| PORT | Puerto de ejecución del servidor | 3000 |
| DATA_PATH | Ruta al archivo de datos JSON | ./data/turnos.json |
| baseUrl | URL base para la API | http://localhost:3000 |
| turnoId | ID de turno fijo para pruebas | 1 |
| turnoIdCreado | ID dinámico de turno creado | (se setea en Tests) |
| turnoIdInexistente | ID inexistente para pruebas negativas | 9999 |
| medicoId | ID de médico fijo para pruebas | 1 |
| medicoIdInexistente | ID inexistente de médico | 9999 |
| authToken | Token de autenticación (si aplica) | (ejemplo JWT) |

### Documentacion de endpoints
```
GET /turnos → Listar todos los turnos
GET /turnos/:id → Obtener turno por ID
POST /turnos → Crear nuevo turno
PUT /turnos/:id → Actualizar turno existente
DELETE /turnos/:id → Eliminar turno
{
  "paciente": "Carlos López",
  "documento": "11223344",
  "especialidad": "Cardiología",
  "fecha": "2026-09-10",
  "hora": "14:00",
  "confirmado": false,
  "motivo": "Consulta de rutina"
}
```
```
GET /medicos → Listar todos los médicos
GET /medicos/:id → Obtener médico por ID
POST /medicos → Crear nuevo médico
PUT /medicos/:id → Actualizar médico existente
DELETE /medicos/:id → Eliminar médico
{
  "nombre": "Ana Gómez",
  "especialidad": "Pediatría",
  "disponible": true
}

```
### Ejemplo de query params
```
GET /turnos?especialidad=Cardiología&confirmado=true  
→ Filtra turnos por especialidad y estado de confirmación.
```
### Uso de inteligencia artificial

| Tarea | Herramienta | Prompt utilizado | Respuesta generada | Ajuste manual aplicado |
| --- | --- | --- | --- | --- |
| Schema Zod | ChatGPT / Copilot | "Genera un esquema Zod para validar un turno médico" | Código Zod con campos básicos | Corrección de tipos y formato PascalCase |
| Endpoints CRUD | Copilot | "Dame ejemplos de endpoints REST para Turnos y Médicos" | Listado de rutas GET/POST/PUT/DELETE | Ajuste de nombres y alineación con estructura del repo |
| Tests en Postman | Copilot | "Genera scripts de validación para cada request en Postman" | Código JS para pestaña Tests | Ajuste de mensajes y variables dinámicas |
| README inicial | Copilot | "Redacta un README.md con requisitos e instalación" | Bloque Markdown con requisitos y pasos | Inclusión de tabla de variables y estructura de carpetas |
| Documentación endpoints | Copilot | "Documenta los endpoints con ejemplos de body y query params" | Sección detallada en Markdown | Ajuste de ejemplos y formato JSON |
