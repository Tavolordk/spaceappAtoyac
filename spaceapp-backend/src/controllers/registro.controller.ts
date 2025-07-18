import { Request, Response } from "express";
import Registro from "../models/registro.model";
import { enviarCorreo } from "../services/mailer.service";

export const crearRegistro = async (req: Request, res: Response) => {
  try {
    const nuevo = new Registro(req.body);
    await nuevo.save();
    await enviarCorreo(nuevo);
    res.status(200).json({ mensaje: "✅ Registro exitoso y correo enviado" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "❌ Error al registrar o enviar correo" });
  }
};
