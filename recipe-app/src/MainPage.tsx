import { useLoaderData } from "react-router";
import { Header } from "./Header";
import SideBar from "./SideBar";
import { RecipesGrid } from "./RecipesGrid";
import { Recipe } from "./Recipe.model";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { RecipeDetails } from "./RecipeDetails";
import styles from "./MainPage.module.scss";

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
  }, [searchParams]);

  return (
    <>
      <Header />
      <SideBar />
      {searchParams.get("recipe") ? (
        <RecipeDetails
          recipes={filteredRecipes}
          recipeId={searchParams.get("recipe")!.toString()}
        />
      ) : (
        <RecipesGrid recipes={filteredRecipes} />
      )}
    </>
  );
}
