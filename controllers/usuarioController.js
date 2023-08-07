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
  const usuario = await Usuario.create(req.body);

  res.json(usuario);
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
