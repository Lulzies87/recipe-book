import { Recipe } from "./Recipe.model";
import styles from "./RecipeDeatils.module.scss"

interface Props {
  recipeId: string;
  recipes: Recipe[];
}

export function RecipeDetails({ recipes, recipeId }: Props) {
    const recipeDetails = recipes.find((recipe) => recipeId == recipe.id);
    console.log(recipeDetails);

  return (
    <article className={styles.recipeDetails}>
      <h1 className={styles.recipeDetails__header}>{recipeDetails?.title}</h1>
      <p className={styles.recipeDetails__summary}>{recipeDetails?.summary}</p>
      <p>Cooking time: {recipeDetails?.readyInMinutes}</p>
      <img className={styles.recipeDetails__image} src={recipeDetails?.image} alt={recipeDetails?.title} />
    </article>
  );
}
