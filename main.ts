import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const PORT = process.env.PORT || 3001;

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}. Go to http://localhost:${PORT}`
  );
});
2;
