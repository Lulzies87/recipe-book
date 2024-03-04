import { useLoaderData } from "react-router";
import { Header } from "./Header";
import SideBar from "./SideBar";
import styles from "./MainPage.module.scss";
import { RecipesGrid } from "./RecipesGrid";
import { Recipe } from "./Recipe.model";
import { useState } from "react";
import axios from "axios";

export function MainPage() {
  const [recipes, setRecipes] = useState(useLoaderData() as Recipe[]);

  const handleSearchInput = async (searchInput: FormDataEntryValue | null) => {
    if (searchInput) {
      try {
        const response = await axios.get(
          `http://localhost:3000/${searchInput}`
        );
        setRecipes(response.data.results);
      } catch (err) {
        console.error("Error fething data:", err);
      }
    }
  };

  return (
    <>
      <Header />
      <SideBar searchInput={handleSearchInput} />
      <RecipesGrid recipes={recipes} />
    </>
  );
}
