import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/userRoutes.js";
import dataBooksRoutes from "./routes/authorRoutes.js";

const server = express();
server.use(cors());
server.use(express.json());

server.use(userRoutes);
server.use(dataBooksRoutes);

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
