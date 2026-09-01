// Datos crudos tal como vienen del JSON
export interface TurnoCrudo {
  id: string;           // viene como string en el JSON
  paciente: string;
  documento?: number;   // puede venir como número
  especialidad?: string;
  fecha: string;        // ej: "14/08/2026"
  hora?: string;        // ej: "10.00"
  confirmado?: string;  // ej: "si" / "no"
  motivo?: string;
}

// Datos normalizados para usar en la app
export interface Turno {
  id: number;           // convertido a number
  paciente: string;     // sanitizado (trim)
  documento: string;    // convertido a string
  especialidad: string; // valor estandarizado
  fecha: string;        // normalizado a formato ISO
  hora: string;         // normalizado a HH:mm
  confirmado: boolean;  // convertido a boolean
  motivo: string;       // siempre presente
  observaciones?: string; // opcional
}
