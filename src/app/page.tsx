"use client";

import { useState } from "react";
import { FoodPreferencesCheckboxes } from "@components/FoodPreferencesCheckboxes";
import { MealTypeCheckboxes } from "@components/MealTypeCheckboxes";
import { Recipes } from "@components/Recipes";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="flex flex-col p-10 lg:p-24 w-full">
        {step === 1 && <FoodPreferencesCheckboxes />}
        {step === 2 && <MealTypeCheckboxes />}
        {step === 3 && <Recipes />}
      </section>
      <div className="flex justify-between text-slate-50 w-full">
        {step > 1 && (
          <button
            className="p-6 grow bg-lime-700"
            onClick={() => setStep(step - 1)}
            type="button"
          >
            WRÓĆ
          </button>
        )}
        {step < 3 && (
          <button
            className="p-6 grow bg-lime-800"
            onClick={() => setStep(step + 1)}
            type="button"
          >
            POTWIERDŹ
          </button>
        )}
      </div>
    </main>
  );
}
