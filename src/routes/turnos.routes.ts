import { Router } from "express";
import {
  getTurnos,
  getTurno,
  createTurno,
  updateTurno,
  deleteTurno,
} from "../controllers/turnos.controller";

const router = Router();

/**
 * @openapi
 * /turnos:
 *   get:
 *     tags: [Turnos]
 *     summary: Listar todos los turnos
 *     parameters:
 *       - in: query
 *         name: especialidad
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtra turnos por especialidad
 *       - in: query
 *         name: fecha
 *         required: false
 *         schema:
 *           type: string
 *           format: date
 *         description: Filtra turnos por fecha
 *       - in: query
 *         name: medicoId
 *         required: false
 *         schema:
 *           type: integer
 *         description: Filtra turnos por ID del médico
 *     responses:
 *       200:
 *         description: Lista de turnos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Turno'
 */
router.get("/", async (req, res) => {
  try {
    await getTurnos(req, res);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener turnos" });
  }
});

/**
 * @openapi
 * /turnos/{id}:
 *   get:
 *     tags: [Turnos]
 *     summary: Obtener un turno por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Turno encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Turno'
 *       404:
 *         description: Turno no encontrado
 */
router.get("/:id", async (req, res) => {
  try {
    await getTurno(req, res);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener turno" });
  }
});

/**
 * @openapi
 * /turnos:
 *   post:
 *     tags: [Turnos]
 *     summary: Crear un nuevo turno
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TurnoInput'
 *     responses:
 *       201:
 *         description: Turno creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Turno'
 *       400:
 *         description: Datos inválidos
 */
router.post("/", async (req, res) => {
  try {
    await createTurno(req, res);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear turno" });
  }
});

/**
 * @openapi
 * /turnos/{id}:
 *   put:
 *     tags: [Turnos]
 *     summary: Actualizar un turno existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TurnoInput'
 *     responses:
 *       200:
 *         description: Turno actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Turno'
 *       404:
 *         description: Turno no encontrado
 */
router.put("/:id", async (req, res) => {
  try {
    await updateTurno(req, res);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar turno" });
  }
});

/**
 * @openapi
 * /turnos/{id}:
 *   delete:
 *     tags: [Turnos]
 *     summary: Eliminar un turno
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Turno eliminado correctamente
 *       404:
 *         description: Turno no encontrado
 */
router.delete("/:id", async (req, res) => {
  try {
    await deleteTurno(req, res);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar turno" });
  }
});

export default router;
