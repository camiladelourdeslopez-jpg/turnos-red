import { promises as fs } from "node:fs";
import { Medico } from "../models/medico.model";

const DATA_PATH = process.env.DATA_PATH_MEDICOS || "./data/medicos.json";

export const obtenerMedicos = async (): Promise<Medico[]> => {
  try {
    const data = await fs.readFile(DATA_PATH, "utf-8");
    return JSON.parse(data) as Medico[];
  } catch {
    return [];
  }
};

export const obtenerMedicoPorId = async (
  id: number
): Promise<Medico | undefined> => {
  const medicos = await obtenerMedicos();
  return medicos.find((medico) => medico.id === id);
};

export const agregarMedico = async (nuevoMedico: Medico): Promise<Medico> => {
  const medicos = await obtenerMedicos();
  medicos.push(nuevoMedico);
  await fs.writeFile(DATA_PATH, JSON.stringify(medicos, null, 2));
  return nuevoMedico;
};

export const actualizarMedico = async (
  id: number,
  datosActualizados: Partial<Medico>
): Promise<Medico | null> => {
  const medicos = await obtenerMedicos();
  const index = medicos.findIndex((medico) => medico.id === id);

  if (index === -1) {
    return null;
  }

  medicos[index] = { ...medicos[index], ...datosActualizados };
  await fs.writeFile(DATA_PATH, JSON.stringify(medicos, null, 2));
  return medicos[index];
};

export const eliminarMedico = async (id: number): Promise<boolean> => {
  const medicos = await obtenerMedicos();
  const index = medicos.findIndex((medico) => medico.id === id);

  if (index === -1) {
    return false;
  }

  medicos.splice(index, 1);
  await fs.writeFile(DATA_PATH, JSON.stringify(medicos, null, 2));
  return true;
};
