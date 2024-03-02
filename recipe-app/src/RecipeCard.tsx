import { Recipe } from "./Recipe.model";
import styles from "./RecipeCard.module.scss";

type Props = { recipe: Recipe };

export function RecipeCard({ recipe }: Props) {
  return (
    <li className={styles.recipeCard}>
      <img
        className={styles.recipeImage}
        src={recipe.image}
        alt="recipe image"
      />
      <h2 className={styles.recipeHeader}>{recipe.title}</h2>
      <div className={styles.recipeDetails}>
        <span>Easy</span>
        <span>{recipe.readyInMinutes}</span>
        <span>Like</span>
      </div>
    </li>
  );
}
