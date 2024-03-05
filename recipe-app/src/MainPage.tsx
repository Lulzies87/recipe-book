import { useLoaderData } from "react-router";
import { Header } from "./Header";
import SideBar from "./SideBar";
import styles from "./MainPage.module.scss";
import { RecipesGrid } from "./RecipesGrid";
import { Recipe } from "./Recipe.model";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export function MainPage() {
  const [recipes, setRecipes] = useState(useLoaderData() as Recipe[]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("search");
    if (query) {
      const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(query)
      );
      setRecipes(filteredRecipes);
    }
  }, [searchParams]);

  const handleSelectedRange = async (range: number) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/maxCookingTime/${range}`
      );
      setRecipes(response.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <SideBar handleRange={handleSelectedRange} />
      <RecipesGrid recipes={recipes} />
    </>
  );
}
