import { Router } from "express";
import {
  getMedicos,
  getMedico,
  createMedico,
  updateMedico,
  deleteMedico,
} from "../controllers/medicos.controller";

const router = Router();

/**
 * @openapi
 * /medicos:
 *   get:
 *     tags: [Medicos]
 *     summary: Listar todos los médicos
 *     parameters:
 *       - in: query
 *         name: especialidad
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtra médicos por especialidad
 *       - in: query
 *         name: fecha
 *         required: false
 *         schema:
 *           type: string
 *           format: date
 *         description: Filtra médicos por fecha
 *       - in: query
 *         name: medicoId
 *         required: false
 *         schema:
 *           type: integer
 *         description: Filtra médicos por ID del médico
 *     responses:
 *       200:
 *         description: Lista de médicos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Medico'
 *       400:
 *         description: Parámetros de consulta inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", async (req, res) => {
  try {
    await getMedicos(req, res);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener médicos" });
  }
});

/**
 * @openapi
 * /medicos/{id}:
 *   get:
 *     tags: [Medicos]
 *     summary: Obtener un médico por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Médico encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Medico'
 *       404:
 *         description: Médico no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:id", async (req, res) => {
  try {
    await getMedico(req, res);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener médico" });
  }
});

/**
 * @openapi
 * /medicos:
 *   post:
 *     tags: [Medicos]
 *     summary: Crear un nuevo médico
 *     requestBody:
 *       required: true
 *       description: Datos del médico a registrar
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MedicoInput'
 *     responses:
 *       201:
 *         description: Médico creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Medico'
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", async (req, res) => {
  try {
    await createMedico(req, res);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear médico" });
  }
});

/**
 * @openapi
 * /medicos/{id}:
 *   put:
 *     tags: [Medicos]
 *     summary: Actualizar un médico existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       description: Campos a actualizar del médico
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MedicoInput'
 *     responses:
 *       200:
 *         description: Médico actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Medico'
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Médico no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", async (req, res) => {
  try {
    await updateMedico(req, res);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar médico" });
  }
});

/**
 * @openapi
 * /medicos/{id}:
 *   delete:
 *     tags: [Medicos]
 *     summary: Eliminar un médico
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Médico eliminado correctamente
 *       204:
 *         description: Operación exitosa sin contenido
 *       404:
 *         description: Médico no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:id", async (req, res) => {
  try {
    await deleteMedico(req, res);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar médico" });
  }
});

export default router;
