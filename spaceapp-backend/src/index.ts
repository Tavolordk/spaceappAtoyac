import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { conectarDB } from "./config/db";
import registroRoutes from "./routes/registro.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

conectarDB();

app.use("/api/registro", registroRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor listo en http://localhost:${PORT}`));
