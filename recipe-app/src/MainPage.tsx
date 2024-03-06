import { useLoaderData } from "react-router";
import { Header } from "./Header";
import SideBar from "./SideBar";
import { RecipesGrid } from "./RecipesGrid";
import { Recipe } from "./Recipe.model";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./MainPage.module.scss";
import { RecipeDetails } from "./RecipeDetails";

export function MainPage() {
  const recipes = useLoaderData() as Recipe[];
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchInput = searchParams.get("search");
    if (searchInput) {
      const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchInput)
      );
      setFilteredRecipes(filteredRecipes);
    }

    const cookingTimeValue = searchParams.get("maxCookingTime");
    if (cookingTimeValue) {
      const filteredRecipes = recipes.filter(
        (recipe) => recipe.readyInMinutes <= Number(cookingTimeValue)
      );
      setFilteredRecipes(filteredRecipes);
    }

    const chosenRecipeId = searchParams.get("recipe");
    // const chosenRecipeId = "716311";
    if (chosenRecipeId) {
      // console.log(`Recipe ${chosenRecipeId} chosen!`);
    }
  }, [searchParams]);

  return (
    <>
      <Header />
      <SideBar />
      {/* <RecipesGrid recipes={filteredRecipes} /> */}
      <RecipeDetails recipes={recipes} recipeId="716405" />
    </>
  );
}
