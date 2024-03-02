import { Recipe } from "./Recipe.model";
import { RecipeCard } from "./RecipeCard";
import styles from "./RecipesGrid.module.scss";

type Props = { recipes: Recipe[] };

// Assaf #2: Here we display a grid of recipe cards.
// The grid dimentions are fixed, not suitable for various screen sizes yet.

export function RecipesGrid({ recipes }: Props) {
  return (
    <ul className={styles.recipesGrid}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
}
