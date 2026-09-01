// Mockeamos la instancia de Socket.IO exportada desde index.ts
jest.mock("../src/index", () => ({
  io: {
    emit: jest.fn(),
    close: jest.fn()
  }
}));

import { obtenerTurnos, agregarTurno, eliminarTurno, updateTurno } from "../src/services/turnos.service";
import { Turno } from "../src/models/turno.model";
import { io } from "../src/index"; // ahora es el mock

describe("Servicio de Turnos", () => {
  test("debería obtener un array de turnos", async () => {
    const turnos = await obtenerTurnos();
    expect(Array.isArray(turnos)).toBe(true);
  });

  test("debería agregar un nuevo turno y emitir evento", async () => {
    const nuevoTurno: Turno = {
      id: 99,
      fecha: "2026-09-01",
      paciente: "Paciente Test",
      motivo: "Consulta de prueba",
      documento: "12345678",
      especialidad: "Clínica",
      hora: "10:00",
      confirmado: false
    };

    const agregado = await agregarTurno(nuevoTurno);
    expect(agregado).toEqual(nuevoTurno);

    const turnos = await obtenerTurnos();
    expect(turnos).toContainEqual(nuevoTurno);

    // Verificamos que se haya emitido el evento
    expect(io.emit).toHaveBeenCalledWith("turnoCreado", nuevoTurno);
  });

  test("debería actualizar un turno existente y emitir evento", async () => {
    const turnoInicial: Turno = {
      id: 200,
      fecha: "2026-09-05",
      paciente: "Paciente Update",
      motivo: "Chequeo inicial",
      documento: "55555555",
      especialidad: "Cardiología",
      hora: "09:00",
      confirmado: false
    };

    await agregarTurno(turnoInicial);

    const datosActualizados = {
      hora: "10:30",
      confirmado: true,
      motivo: "Chequeo actualizado"
    };

    const actualizado = await updateTurno(200, datosActualizados);

    expect(actualizado).not.toBeNull();
    expect(actualizado).toMatchObject(datosActualizados);

    // Verificamos que se haya emitido el evento
    expect(io.emit).toHaveBeenCalledWith("turnoActualizado", expect.objectContaining({
      id: 200,
      ...datosActualizados
    }));
  });

  test("debería eliminar un turno existente y emitir evento", async () => {
    const turnoAEliminar: Turno = {
      id: 100,
      fecha: "2026-09-01",
      paciente: "Paciente Eliminar",
      motivo: "Consulta eliminar",
      documento: "87654321",
      especialidad: "Pediatría",
      hora: "11:00",
      confirmado: true
    };

    await agregarTurno(turnoAEliminar);

    const eliminado = await eliminarTurno(100);
    expect(eliminado).toBe(true);

    const turnos = await obtenerTurnos();
    expect(turnos.find((t: Turno) => t.id === 100)).toBeUndefined();

    // Verificamos que se haya emitido el evento
    expect(io.emit).toHaveBeenCalledWith("turnoEliminado", turnoAEliminar);
  });
});

// Cerramos el mock al terminar
afterAll(() => {
  io.close();
});
