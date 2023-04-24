import { Router } from "express";

const baseRoute = Router();

baseRoute.get("/", (req, res) => {
  const { prompt } = req.query;
  if (!prompt)
    return res.status(400).send({
      message: "Please provide a prompt",
    });

  return res.status(200).send({
    message: `You sent ${prompt}`,
  });
});

export default baseRoute;
