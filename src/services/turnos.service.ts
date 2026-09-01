import { Turno } from "../models/turno.model";
import { promises as fs } from "node:fs";
import { io } from "../index"; // instancia de Socket.IO

const DATA_PATH = process.env.DATA_PATH || "./data/turnos.json";

// Leer todos los turnos
export const obtenerTurnos = async (): Promise<Turno[]> => {
  const data = await fs.readFile(DATA_PATH, "utf-8");
  return JSON.parse(data);
};

// Obtener un turno por ID
export const obtenerTurnoPorId = async (id: number): Promise<Turno | undefined> => {
  const turnos = await obtenerTurnos();
  return turnos.find((t) => t.id === id);
};

// Agregar un nuevo turno
export const agregarTurno = async (nuevoTurno: Turno): Promise<Turno> => {
  const turnos = await obtenerTurnos();
  turnos.push(nuevoTurno);
  await fs.writeFile(DATA_PATH, JSON.stringify(turnos, null, 2));

  // 🔔 Emitir evento en tiempo real
  io.emit("turnoCreado", nuevoTurno);
  return nuevoTurno;
};

// Actualizar un turno por ID
export const updateTurno = async (
  id: number,
  datosActualizados: Partial<Turno>
): Promise<Turno | null> => {
  const turnos = await obtenerTurnos();
  const index = turnos.findIndex((t) => t.id === id);

  if (index === -1) {
    return null;
  }

  // Actualizamos los campos
  turnos[index] = { ...turnos[index], ...datosActualizados };
  await fs.writeFile(DATA_PATH, JSON.stringify(turnos, null, 2));

  // 🔔 Emitir evento en tiempo real
  io.emit("turnoActualizado", turnos[index]);
  return turnos[index];
};

// Eliminar un turno por ID
export const eliminarTurno = async (id: number): Promise<boolean> => {
  const turnos = await obtenerTurnos();
  const index = turnos.findIndex((t) => t.id === id);
  if (index !== -1) {
    const eliminado = turnos[index];
    turnos.splice(index, 1);
    await fs.writeFile(DATA_PATH, JSON.stringify(turnos, null, 2));

    // 🔔 Emitir evento en tiempo real
    io.emit("turnoEliminado", eliminado);
    return true;
  }
  return false;
};
