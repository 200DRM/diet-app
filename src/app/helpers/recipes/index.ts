import { collection, getDocs, query } from "@firebase/firestore";
import {
  GetRecipes,
  HandleRecipesFiltering,
  ProductFromLocalStorage,
  Recipe,
} from "@app/components/types";
import { MealTypeFromLocalStorage } from "@app/components/types";
import { mockedRecipes } from "@app/mockups";
import { firestore } from "@src/firebase";

const recipiesRef = collection(firestore, "recipies");

const handleRecipesFiltering = ({
  chosenMealTypesNames,
  filteredProductsNames,
  filteredRecipes,
  recipe,
  setRecipes,
}: HandleRecipesFiltering) => {
  const isValidRecipe =
    recipe.ingredients?.length > 0 && recipe.kind?.length > 0;

  if (isValidRecipe) {
    const recipeWithAllowedIngredients = recipe.ingredients.every(
      (ingredient: string) => filteredProductsNames.includes(ingredient)
    );
    const recipeWithChosenMealType = recipe.kind.find((k: string) =>
      chosenMealTypesNames.includes(k)
    );

    if (recipeWithAllowedIngredients && recipeWithChosenMealType) {
      filteredRecipes.push(recipe);
    }
  }

  if (filteredRecipes.length > 0) {
    setRecipes(filteredRecipes);
  }
};

export const getRecipes = ({ setRecipes }: GetRecipes) => {
  const filteredRecipes: Recipe[] = [];

  const chosenMealTypesNames: string[] = [];
  const chosenMealTypesFromLocal = JSON.parse(
    localStorage.getItem("mealTypes") || "[]"
  ).filter((mealType: MealTypeFromLocalStorage) => mealType.checked);

  const filteredProductsNames: string[] = [];
  const filteredProductsFromLocal = JSON.parse(
    localStorage.getItem("products") || "[]"
  ).filter((product: ProductFromLocalStorage) => product.checked);

  chosenMealTypesFromLocal.forEach((mealType: MealTypeFromLocalStorage) =>
    chosenMealTypesNames.push(mealType.name)
  );

  filteredProductsFromLocal.forEach((product: ProductFromLocalStorage) =>
    filteredProductsNames.push(product.name)
  );

  getDocs(query(recipiesRef))
    .then((recipesFromDB) => {
      if (recipesFromDB.docs?.length > 0) {
        recipesFromDB.docs.map((r) => {
          const recipe = r.data() as Recipe;
          handleRecipesFiltering({
            chosenMealTypesNames,
            filteredProductsNames,
            filteredRecipes,
            recipe,
            setRecipes,
          });
        });
      } else {
        mockedRecipes.map((recipe) => {
          handleRecipesFiltering({
            chosenMealTypesNames,
            filteredProductsNames,
            filteredRecipes,
            recipe,
            setRecipes,
          });
        });
      }
    })
    .catch(() => {
      mockedRecipes.map((recipe) => {
        handleRecipesFiltering({
          chosenMealTypesNames,
          filteredProductsNames,
          filteredRecipes,
          recipe,
          setRecipes,
        });
      });
    });
};
