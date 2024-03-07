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
      <h2>Summary</h2>
      <p className={styles.recipeDetails__summary}>{recipeDetails?.summary}</p>
      <div className={styles.recipeDetails__statsContainer}>
        <div className={styles.recipeDetails__statsContainer__stats}>
          <p>Cooking time: {recipeDetails?.readyInMinutes}</p>
          <p>Servings: {recipeDetails?.servings}</p>
          <p>Health score: {recipeDetails?.servings}</p>
        </div>
        <img className={styles.recipeDetails__statsContainer__image} src={recipeDetails?.image} alt={recipeDetails?.title} />
      </div>
      <h2>Instructions</h2>
      <p className={styles.recipeDetails__summary}>{recipeDetails?.instructions}</p>

    </article>
  );
}
