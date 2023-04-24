import { Router } from "express";
import { openai } from "../config/openai.config";

const baseRoute = Router();

baseRoute.get("/", async (req, res) => {
  try {
    const { prompt } = req.query;
    if (!prompt)
      return res.status(400).send({
        message: "Please provide a prompt",
      });

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt.toString(),
      max_tokens: 5,
      temperature: 0.9,
    });

    return res.status(200).send({
      message: `You sent ${prompt}`,
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Something went wrong",
      error,
    });
  }
});

export default baseRoute;
