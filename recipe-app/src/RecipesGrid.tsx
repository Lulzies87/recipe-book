import { Recipe } from "./Recipe.model";
import { RecipeCard } from "./RecipeCard";
import styles from "./RecipesGrid.module.scss";

type Props = { recipes: Recipe[] };

export function RecipesGrid({ recipes }: Props) {
  return (
    <ul className={styles.recipesGrid}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
}
