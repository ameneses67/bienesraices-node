import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PWD,
    },
  });

  const { email, nombre, token } = datos;

  // Enviar email
  await transport.sendMail({
    from: "BienesRaices",
    to: email,
    subject: "Confirma tu cuenta en BienesRaices",
    text: "Por favor confirma tu cuenta en BienesRaices.",
    html: `
    <p>Hola ${nombre},</p>

    <p>Por favor da clic en el botón de abajo para confirmar tu cuenta en BienesRaices.</p>

    <button><a href="">Confirmar Cuenta</a></button>

    <p>Si tu no creaste esta cuenta, simplemente ignora este mensaje y nada pasará.</p>
    `,
  });
};
