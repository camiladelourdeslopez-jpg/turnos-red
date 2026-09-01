import { Request, Response } from "express";
import {
  obtenerTurnos,
  obtenerTurnoPorId,
  agregarTurno,
  eliminarTurno,
} from "../services/turnos.service";

// GET /turnos → listado completo
export const getTurnos = async (req: Request, res: Response) => {
  const lista = await obtenerTurnos();
  res.json(lista);
};

// GET /turnos/:id → turno por ID
export const getTurno = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const turno = await obtenerTurnoPorId(id);
  turno
    ? res.json(turno)
    : res.status(404).json({ mensaje: "Turno no encontrado" });
};

// POST /turnos → crear nuevo turno
export const createTurno = async (req: Request, res: Response) => {
  const nuevoTurno = req.body;
  const creado = await agregarTurno(nuevoTurno);
  res.status(201).json(creado);
};

// PUT /turnos/:id → actualizar turno existente
export const updateTurno = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const datosActualizados = req.body;
  const turno = await obtenerTurnoPorId(id);

  if (!turno) {
    return res.status(404).json({ mensaje: "Turno no encontrado" });
  }

  Object.assign(turno, datosActualizados);
  res.json(turno);
};

// DELETE /turnos/:id → eliminar turno
export const deleteTurno = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const eliminado = await eliminarTurno(id);

  eliminado
    ? res.json({ mensaje: "Turno eliminado" })
    : res.status(404).json({ mensaje: "Turno no encontrado" });
};
