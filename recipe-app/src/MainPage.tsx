import axios from "axios";

import { Header } from "./Header";
import { Recipes } from "./Recipes";
import { SideBar } from "./SideBar";

export function MainPage() {
  const apiClient = axios.create({
    baseURL: "http://localhost:3000",
  });

  interface Recipe {
    id: string;
  }

  const fetchData = async () => {
    try {
      const response = await apiClient.get<Recipe>("/api");
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Header />
      <SideBar />
      <Recipes />
      <button onClick={fetchData}>Get Recipes</button>
    </>
  );
}
