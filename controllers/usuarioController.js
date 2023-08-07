import { check, validationResult } from "express-validator";

import Usuario from "../models/Usuario.js";

const formularioLogin = (req, res) => {
  res.render("auth/login", {
    pagina: "Iniciar Sesión",
  });
};

const formularioRegistro = (req, res) => {
  res.render("auth/registro", {
    pagina: "Crear Cuenta",
  });
};

const registrar = async (req, res) => {
  // Validación campos formulario
  await check("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .run(req);
  await check("email")
    .isEmail()
    .withMessage("Correo electrónico inválido")
    .run(req);
  await check("password")
    .isLength({ min: 6 })
    .withMessage("Contraseña mínimo de 6 caracteres")
    .run(req);
  await check("repetir_password")
    .equals(req.body.password)
    .withMessage("Las contraseñas no son iguales")
    .run(req);

  let resultado = validationResult(req);

  const { nombre, email, password } = req.body;

  if (!resultado.isEmpty()) {
    // Errores
    return res.render("auth/registro", {
      pagina: "Crear Cuenta",
      errores: resultado.array(),
      usuario: {
        nombre,
        email,
      },
    });
  }

  // Validar que el correo no exista en la bd
  const existeUsuario = await Usuario.findOne({
    where: { email },
  });

  if (existeUsuario) {
    return res.render("auth/registro", {
      pagina: "Crear Cuenta",
      errores: [{ msg: "Ya existe un usuario con este correo" }],
      usuario: {
        nombre,
        email,
      },
    });
  }

  console.log(existeUsuario);

  // Crear usuario
  await Usuario.create({
    nombre,
    email,
    password,
    token: 123,
  });
};

const formularioRecuperacionPassword = (req, res) => {
  res.render("auth/recuperacion-password", {
    pagina: "Recupera tu Constraseña",
  });
};

export {
  formularioLogin,
  formularioRegistro,
  formularioRecuperacionPassword,
  registrar,
};
