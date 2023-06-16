import DOMPurify from "dompurify";
import { useState } from "react";
import { useEffect } from "react";
import { getRecipes } from "@app/helpers/recipes";
import { Headline } from "@components/Headline";
import { MainContent } from "@components/MainContent";
import { Recipe } from "@components/types";

export const Recipes = () => {
  const [step, setStep] = useState(0);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const sanitizer = DOMPurify.sanitize;

  const handleClick = () => {
    if (step === recipes?.length - 1) setStep(0);
    else setStep(step + 1);
  };

  useEffect(() => {
    getRecipes({ setRecipes });
  }, []);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>Brak danych</p>
      ) : (
        <div key={recipes[step].id}>
          <Headline>{recipes[step].title}</Headline>
          <MainContent>
            <>
              <div className="m-6">
                <Headline>Składniki</Headline>
                <ul className="text-2xl">
                  {recipes[step].description.ingredients.map((i: string) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="m-6">
                <Headline>Przygotowanie</Headline>
                <p
                  className="text-2xl"
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(recipes[step].description.preparation),
                  }}
                />
              </div>
              <div className="d-flex text-center">
                <button
                  className="bg-lime-800 mt-4 p-4 text-lime-100"
                  onClick={handleClick}
                  type="button"
                >
                  NASTĘPNY
                </button>
              </div>
            </>
          </MainContent>
        </div>
      )}
    </div>
  );
};
