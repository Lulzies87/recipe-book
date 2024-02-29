import { createBrowserRouter } from "react-router-dom";
import axios from "axios";
import App from "./App";
import { MainPage } from "./MainPage";
import { LoginPage } from "./LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: MainPage,
        async loader() {
          const response = await axios.get<{ recipes: { id: string, title: string }[] }>(
            "http://localhost:3000/api"
          );

          return response.data.recipes.map(({ id, title }) => ({id, title}) );
        },
      },
      {
        path: "/login",
        Component: LoginPage,
      },
    ],
  },
]);
