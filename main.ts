import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import baseRoute from "./src/routes/baseRoute";

dotenv.config();

const PORT = process.env.PORT || 3002;

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(baseRoute);

server.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}. Go to http://localhost:${PORT}`
  );
});
2;
