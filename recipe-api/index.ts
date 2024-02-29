import "dotenv/config";

import express from "express";
import cors from "cors";
import { json } from "body-parser";
import axios from "axios";

const app = express();

app.use(cors());
app.use(json());

// app.get("/api", (req, res) => {
//   const endPoint = "https://api.spoonacular.com/recipes/716429/information";
//   const data = axios
//     .get(endPoint, {
//       headers: { "x-api-key": "bfb6e89cee30484eaa6d65fd8f327a86" },
//     })
//     .then((response) => console.log(response.data));

//   res.status(200);
//   res.send(data);
// });

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
