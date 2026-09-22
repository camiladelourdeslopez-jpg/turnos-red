import { z } from "zod";

export const turnoSchema = z.object({
  id: z.number().positive(),
  paciente: z.string().min(1),
  documento: z.string(), // flexible
  especialidad: z.enum(["Clínica médica", "Pediatría", "Odontología", "Nutrición"]),
  fecha: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/), // formato DD/MM/YYYY
  hora: z.string().regex(/^\d{2}:\d{2}$/), // formato HH:mm
  confirmado: z.boolean(),
  motivo: z.string().min(1),
  observaciones: z.string().optional()
});

