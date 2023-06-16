import { ChangeEvent, useEffect } from "react";
import { setAllMealTypesInitiallyChecked } from "@app/helpers/mealTypes";
import { mockedMealTypesDB } from "@app/mockups";
import { Headline } from "@components/Headline";
import { Checkbox } from "@components/Inputs";
import { MainContent } from "@components/MainContent";
import { useLocalStorage } from "@components/hooks";
import { MealTypeFromLocalStorage } from "@components/types";

export const MealTypeCheckboxes = () => {
  const [mealTypes, setMealTypes] = useLocalStorage("mealTypes", "[]");

  const handleCheckbox = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const { checked, name } = target;
    const currentMealType = { checked, name };

    if (mealTypes.find((m: MealTypeFromLocalStorage) => m.name === name)) {
      const mealTypesWithoutCurrent = mealTypes.filter(
        (m: MealTypeFromLocalStorage) => m.name !== name
      );
      setMealTypes([...mealTypesWithoutCurrent, currentMealType]);
    } else {
      setMealTypes([...mealTypes, currentMealType]);
    }
  };

  useEffect(() => {
    setAllMealTypesInitiallyChecked({ mealTypes, setMealTypes });
  }, []);

  return (
    <>
      <Headline>Wybierz rodzaj posiłku</Headline>
      {mockedMealTypesDB?.length ? (
        <MainContent>
          <>
            {mockedMealTypesDB.map((mealTypeFromDB) => {
              const initiallyChecked =
                mealTypes?.length > 0
                  ? mealTypes.find(
                      (mealTypeFromLocal: MealTypeFromLocalStorage) =>
                        mealTypeFromLocal.name === mealTypeFromDB.name &&
                        mealTypeFromLocal.checked
                    )
                  : true;

              return (
                <Checkbox
                  initiallyChecked={initiallyChecked}
                  key={mealTypeFromDB.name}
                  name={mealTypeFromDB.name}
                  onChange={handleCheckbox}
                  text={mealTypeFromDB.text}
                />
              );
            })}
          </>
        </MainContent>
      ) : (
        <p>Brak produktów</p>
      )}
    </>
  );
};
