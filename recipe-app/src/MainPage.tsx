import { useLoaderData } from "react-router";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import styles from "./MainPage.module.scss";
import { RecipesGrid } from "./RecipesGrid";
import { Recipe } from "./Recipe.model";

export function MainPage() {
  const recipes = useLoaderData() as Recipe[];

  return (
    <>
      <Header />
      <SideBar />
      <RecipesGrid recipes={recipes} />
    </>
  );
}
