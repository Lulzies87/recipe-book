import { createBrowserRouter } from "react-router-dom";
import axios from "axios";
import App from "./App";
import { MainPage } from "./MainPage";
import { LoginPage } from "./LoginPage";
import { Recipe } from "./Recipe.model";

const server = axios.create({
  baseURL: "http://localhost:3000",
});

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: MainPage,
        async loader() {
          const response = await server.get<{
            recipes: {
              id: string;
              title: string;
              image: string;
              readyInMinutes: number;
              servings: number;
              summary: string;
              instructions: string;
            }[];
          }>("/");

          const recipes: Recipe[] = response.data.recipes.map(
            ({
              id,
              title,
              image,
              readyInMinutes,
              servings,
              summary,
              instructions,
            }) => ({
              id,
              title,
              image,
              readyInMinutes,
              servings,
              summary,
              instructions,
            })
          );

          return recipes;
        },
      },
      {
        path: "/login",
        Component: LoginPage,
      },
    ],
  },
]);
