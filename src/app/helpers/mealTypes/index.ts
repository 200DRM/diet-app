import { MealType, MealTypeFromLocalStorage } from "@app/components/types";
import { mockedMealTypesDB } from "@app/mockups";

export const setAllMealTypesInitiallyChecked = ({
  mealTypes,
  setMealTypes,
}: Props) => {
  const updatedMealTypes: MealTypeFromLocalStorage[] = [];

  mockedMealTypesDB.forEach((mealTypeDB) => {
    const name = mealTypeDB.name;

    if (!mealTypes.includes(name)) {
      updatedMealTypes.push({ checked: true, name });
    }
  });

  setMealTypes(updatedMealTypes);
};

interface Props {
  mealTypes: MealType[];
  setMealTypes: (mealType: MealTypeFromLocalStorage[]) => void;
}
