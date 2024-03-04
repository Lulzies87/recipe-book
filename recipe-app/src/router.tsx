import { createBrowserRouter } from "react-router-dom";
import axios from "axios";
import App from "./App";
import { MainPage } from "./MainPage";
import { LoginPage } from "./LoginPage";
import { Recipe } from "./Recipe.model";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: MainPage,
        async loader() {
          const response = await axios.get<{
            recipes: {
              id: string;
              title: string;
              image: string;
              readyInMinutes: number;
            }[];
          }>("http://localhost:3000/");

          const recipes: Recipe[] = response.data.recipes.map(
            ({ id, title, image, readyInMinutes }) => ({
              id,
              title,
              image,
              readyInMinutes,
            })
          );

          return recipes;
        },
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/:search",
        Component: MainPage,
        async loader({ params }) {
          const response = await axios.get<{
            results: {
              id: string;
              title: string;
              image: string;
              readyInMinutes: number;
            }[];
          }>(`http://localhost:3000/${params.search}`);

          const recipes: Recipe[] = response.data.results.map(
            ({ id, title, image, readyInMinutes }) => ({
              id,
              title,
              image,
              readyInMinutes,
            })
          );
          return recipes;
        },
      },
    ],
  },
]);
