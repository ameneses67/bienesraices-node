import express from "express";
import {
  formularioLogin,
  formularioRegistro,
  formularioRecuperacionPassword,
} from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/login", formularioLogin);
router.get("/registro", formularioRegistro);
router.get("/recuperacion-password", formularioRecuperacionPassword);

export default router;
