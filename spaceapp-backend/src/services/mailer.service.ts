import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { IRegistro } from "../models/registro.model";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

export const enviarCorreo = async (registro: IRegistro) => {
  await transporter.sendMail({
    from: `"Registro Space Apps Atoyac" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: "📬 Nuevo registro",
    html: `
      <h2>Nuevo Registro</h2>
      <ul>
        <li><strong>Nombre:</strong> ${registro.nombre}</li>
        <li><strong>Correo:</strong> ${registro.correo}</li>
        <li><strong>Institución:</strong> ${registro.institucion}</li>
        <li><strong>Teléfono:</strong> ${registro.telefono}</li>
      </ul>
    `
  });
};
