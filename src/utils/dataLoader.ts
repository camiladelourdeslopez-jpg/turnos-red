import { promises as fs } from "node:fs";

export async function loadTurnos(filePath: string) {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const turnos = JSON.parse(data);
    console.log(`✅ Se cargaron ${turnos.length} registros desde ${filePath}`);
    return turnos;
  } catch (error) {
    console.error("❌ Error al leer el archivo de turnos:", error);
    return [];
  }
}
