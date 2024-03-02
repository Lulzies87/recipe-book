import { useLoaderData } from "react-router";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import styles from "./MainPage.module.scss";
import { RecipesGrid } from "./RecipesGrid";
import { Recipe } from "./Recipe.model";

export function MainPage() {
  const recipes = useLoaderData() as Recipe[];
  // Assaf#1: We're displaying 100 random recipes! :)
  // After we get the "recipes" array from the loader, we pass it to the RecipesGrid + RecipeCard components using props.
  return (
    <>
      <Header />
      <SideBar />
      <RecipesGrid recipes={recipes} />
    </>
  );
}
