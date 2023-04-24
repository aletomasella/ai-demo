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

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        // { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt as string },
      ],
      max_tokens: 150,
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
