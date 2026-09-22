import express from "express";
import http from "http";
import { Server } from "socket.io";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerDefinition from "./config/swagger";
import turnosRoutes from "./routes/turnos.routes";
import medicosRoutes from "./routes/medicos.routes";

const app = express();
const server = http.createServer(app); // servidor HTTP

const swaggerSpec = swaggerJsdoc({
  definition: swaggerDefinition,
  apis: ["./src/routes/*.ts"],
});

// Exportamos la instancia de Socket.IO para que los services puedan usarla
export const io = new Server(server, {
  cors: {
    origin: "*", // habilita conexiones desde cualquier origen (ajustar según necesidad)
  },
});

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/turnos", turnosRoutes);
app.use("/medicos", medicosRoutes);

// Conexión de clientes Socket.IO
io.on("connection", (socket) => {
  console.log("🟢 Cliente conectado:", socket.id);

  socket.on("disconnect", () => {
    console.log("🔴 Cliente desconectado:", socket.id);
  });
});

// Arranque del servidor
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
