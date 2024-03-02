export interface Recipe {
  id: string;
  title: string;
  image: string;
  readyInMinutes: number;
}

export type Recipes = {
  recipes: Recipe[];
};
