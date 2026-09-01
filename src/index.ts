import express from "express";
import http from "http";
import { Server } from "socket.io";
import turnosRoutes from "./routes/turnos.routes";

const app = express();
const server = http.createServer(app); // servidor HTTP

// Exportamos la instancia de Socket.IO para que los services puedan usarla
export const io = new Server(server, {
  cors: {
    origin: "*", // habilita conexiones desde cualquier origen (ajustar según necesidad)
  },
});

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/turnos", turnosRoutes);

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
