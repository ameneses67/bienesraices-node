import express from "express";
import {
  formularioLogin,
  formularioRegistro,
  formularioRecuperacionPassword,
  registrar,
} from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/login", formularioLogin);

router.get("/registro", formularioRegistro);
router.post("/registro", registrar);

router.get("/recuperacion-password", formularioRecuperacionPassword);

export default router;
