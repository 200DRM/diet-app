import { DocumentData } from "firebase/firestore";

export interface GetRecipes {
  setRecipes: SetRecipes;
}

export interface HandleRecipesFiltering {
  chosenMealTypesNames: string[];
  filteredProductsNames: string[];
  filteredRecipes: Recipe[];
  recipe: Recipe;
  setRecipes: SetRecipes;
}

export interface ProductDB {
  diets: string[];
  name: string;
  text: string;
}

export type MealType = "breakfast" | "lunch" | "dinner";

export interface MealTypeDB {
  text: string;
  name: MealType;
}

export interface MealTypeFromLocalStorage {
  checked: boolean;
  name: MealType;
}

export interface ProductFromLocalStorage {
  checked: boolean;
  name: string;
}

export interface Recipe {
  description: {
    ingredients: string[];
    preparation: string;
  };
  id: string;
  ingredients: string[];
  kind: string[];
  title: string;
}

type SetRecipes = (recipes: Recipe[]) => void;
