import mongoose from "mongoose";

export interface IRegistro extends mongoose.Document {
  nombre: string;
  correo: string;
  institucion: string;
  telefono: string;
  fechaRegistro: Date;
}

const registroSchema = new mongoose.Schema<IRegistro>({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  institucion: { type: String, required: true },
  telefono: { type: String, required: true },
  fechaRegistro: { type: Date, default: Date.now }
});

export default mongoose.model<IRegistro>("Registro", registroSchema);
