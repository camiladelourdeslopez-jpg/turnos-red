import { Request, Response } from "express";
import {
  obtenerMedicos,
  obtenerMedicoPorId,
  agregarMedico,
  actualizarMedico,
  eliminarMedico,
} from "../services/medicos.service";

export const getMedicos = async (req: Request, res: Response) => {
  const medicos = await obtenerMedicos();
  res.json(medicos);
};

export const getMedico = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const medico = await obtenerMedicoPorId(id);

  medico
    ? res.json(medico)
    : res.status(404).json({ mensaje: "Médico no encontrado" });
};

export const createMedico = async (req: Request, res: Response) => {
  const nuevoMedico = req.body;
  const medicoCreado = await agregarMedico(nuevoMedico);
  res.status(201).json(medicoCreado);
};

export const updateMedico = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const datosActualizados = req.body;
  const medico = await obtenerMedicoPorId(id);

  if (!medico) {
    return res.status(404).json({ mensaje: "Médico no encontrado" });
  }

  const medicoActualizado = await actualizarMedico(id, datosActualizados);
  res.json(medicoActualizado ?? medico);
};

export const deleteMedico = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const eliminado = await eliminarMedico(id);

  eliminado
    ? res.json({ mensaje: "Médico eliminado" })
    : res.status(404).json({ mensaje: "Médico no encontrado" });
};
