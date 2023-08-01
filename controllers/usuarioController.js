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

const registrar = (req, res) => {
  console.log("Registrando...");
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
