import { useLoaderData } from "react-router";
import { Header } from "./Header";
import SideBar from "./SideBar";
import { RecipesGrid } from "./RecipesGrid";
import { Recipe } from "./Recipe.model";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./MainPage.module.scss";

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
  
  useEffect(() => {
    const value = searchParams.get("maxCookingTime");
    if (value) {
      const filteredRecipes = recipes.filter((recipe) =>
        recipe.readyInMinutes <= Number(value)
      );
      setRecipes(filteredRecipes);
    }
  }, [searchParams]);

  return (
    <>
      <Header />
      <SideBar />
      <RecipesGrid recipes={recipes} />
    </>
  );
}
