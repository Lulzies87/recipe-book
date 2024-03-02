import { Recipe } from "./Recipe.model";
import { RecipeCard } from "./RecipeCard";
import styles from "./RecipesGrid.module.scss";

type Props = { recipes: Recipe[] };

export function RecipesGrid({ recipes }: Props) {
  return (
    <article className={styles.recipesGrid}>
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </article>
  );
}
