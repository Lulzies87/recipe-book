import "dotenv/config";

import express from "express";
import cors from "cors";
import { json } from "body-parser";
import axios from "axios";

const app = express();

app.use(cors());
app.use(json());

interface Recipe {
  id: string;
}

app.get("/api", async (_, res) => {
  const endPoint = "https://api.spoonacular.com/recipes/716429/information";

  try {
    const response = await axios.get(endPoint, {
      headers: { "x-api-key": "bfb6e89cee30484eaa6d65fd8f327a86" },
    });
    res.status(200).send(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
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
