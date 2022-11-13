import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/userRoutes.js";
import authorRoutes from "./routes/authorRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";
import bookRoutes from "./routes/bookRoutes.js"
import statusRoutes from "./routes/statusRoutes.js";

const server = express();
server.use(cors());
server.use(express.json());

server.use(userRoutes);
server.use(authorRoutes);
server.use(companyRoutes);
server.use(bookRoutes);
server.use(statusRoutes);

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
