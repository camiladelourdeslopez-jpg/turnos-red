import { Router } from "express";
import {
  getTurnos,
  getTurno,
  createTurno,
  updateTurno,
  deleteTurno,
} from "../controllers/turnos.controller";

const router = Router();

// GET /turnos → listado completo
router.get("/", async (req, res) => {
  try {
    await getTurnos(req, res);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener turnos" });
  }
});

// GET /turnos/:id → turno por ID
router.get("/:id", async (req, res) => {
  try {
    await getTurno(req, res);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener turno" });
  }
});

// POST /turnos → crear nuevo turno
router.post("/", async (req, res) => {
  try {
    await createTurno(req, res);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear turno" });
  }
});

// PUT /turnos/:id → actualizar turno existente
router.put("/:id", async (req, res) => {
  try {
    await updateTurno(req, res);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar turno" });
  }
});

// DELETE /turnos/:id → eliminar turno
router.delete("/:id", async (req, res) => {
  try {
    await deleteTurno(req, res);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar turno" });
  }
});

export default router;
