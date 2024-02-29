import { createBrowserRouter } from "react-router-dom";
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
      },
      {
        path: "/login",
        Component: LoginPage,
      },
    ],
  },
]);
