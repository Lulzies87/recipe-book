import "dotenv/config";

import express from "express";
import cors from "cors";
import { json } from "body-parser";
import axios from "axios";

const app = express();

app.use(cors());
app.use(json());

const apiClient = axios.create({
  baseURL: "https://api.spoonacular.com/recipes",
  headers: { "x-api-key": process.env.API_KEY },
});

app.get("/", async (_, res) => {
  try {
    const response = await apiClient.get("/random", {
      params: { number: "100" },
    });
    res.status(200).send(response.data);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Error fetching data");
  }
});

app.get("/:search", async (req, res) => {
  try {
    const response = await apiClient.get("/complexSearch", {
      params: { query: `${req.params.search}`, number: "100" },
    });
    res.status(200).send(response.data);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Error fetching data");
  }
});

app.get("/maxCookingTime/:range", async (req, res) => {
  try {
    const response = await apiClient.get("/complexSearch", {
      params: { maxReadyTime: req.params.range, number: "100" },
    });
    res.status(200).send(response.data);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Error fetching data");
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== "admin" || password !== "Aa123456") {
    res.status(401);
    res.send({
      error: "Username or password doesn't match.",
    });

    return;
  }

  res.status(200);
  res.send(JSON.stringify(username));
});

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
