import { MealTypeDB, ProductDB, Recipe } from "@app/components/types";

export const mockedProductsDB: ProductDB[] = [
  { diets: ["liver"], name: "chives", text: "Szczypiorek" },
  { diets: ["liver"], name: "potatoes", text: "Ziemniaki" },
  { diets: ["liver"], name: "tomatoes", text: "Pomidory" },
  { diets: ["liver"], name: "carrot", text: "Marchew" },
  { diets: ["liver"], name: "banana", text: "Banan" },
  { diets: ["liver"], name: "blueberries", text: "Borówki" },
  { diets: ["liver"], name: "chicken", text: "Kuczak" },
  { diets: ["liver"], name: "turkey", text: "Indyk" },
  { diets: ["liver"], name: "cod", text: "Dorsz" },
  { diets: ["liver"], name: "kefir", text: "Kefir" },
  { diets: ["liver"], name: "yogurt", text: "Jogurt" },
  { diets: ["liver"], name: "cottageCheese", text: "Twaróg" },
  { diets: ["liver"], name: "rice", text: "Ryż" },
  { diets: ["liver"], name: "millet", text: "Kasza jaglana" },
  { diets: ["liver"], name: "wheatFlour", text: "Mąka pszenna" },
  { diets: ["liver"], name: "butter", text: "Masło" },
  { diets: ["liver"], name: "egg", text: "Jajko" },
  { diets: ["liver"], name: "parsley", text: "Pietruszka" },
  { diets: ["liver"], name: "celeriac", text: "Seler korzeniowy" },
  { diets: ["liver"], name: "onion", text: "Cebula" },
  { diets: ["liver"], name: "leek", text: "Por" },
  { diets: ["liver"], name: "bay-leaf", text: "Liść laurowy" },
  { diets: ["liver"], name: "allspice", text: "Ziele angielskie" },
  { diets: ["liver"], name: "milk", text: "Mleko" },
];

export const mockedMealTypesDB: MealTypeDB[] = [
  { text: "Śniadanie", name: "breakfast" },
  { text: "Obiad", name: "lunch" },
  { text: "Kolacja", name: "dinner" },
];

export const mockedRecipes: Recipe[] = [
  {
    description: {
      ingredients: [
        "chleb pszenny lub wafle ryżowe  - 3 kromki",
        "twaróg półtłusty - 100g",
        "1 mały pomidor",
        "szczypiorek - 3 łyżeczki",
      ],
      preparation: `1.Twaróg wymieszać z drobnopokrojonym pomidorem bez skórki i ze szczypiorkiem.<br/>
        2. Doprawić niewielką ilością soli i pieprzu.`,
    },
    id: "1",
    ingredients: ["tomatoes", "chives"],
    kind: ["breakfast", "dinner"],
    title: "Kanapki z pomidorem, twarogiem i szczypiorkiem",
  },
  {
    description: {
      ingredients: [
        "banan - 1 sztuka",
        "borówki - pół szklanki",
        "jogurt naturalny - 1 szklanka",
      ],
      preparation: `1. Obrać banana i drobno pokroić. <br/>2. Owoce wymieszać z jogurtem.`,
    },
    id: "2",
    ingredients: ["blueberries", "banana", "yogurt"],
    kind: ["breakfast", "dinner"],
    title: "Jogurt z bananem i borówkami",
  },
  {
    description: {
      ingredients: [
        "filet z dorsza - 200g",
        "sok z cytryny - 1 łyżka",
        "ryż lub ziemniaki - ok. 50g",
      ],
      preparation: `
      1. Marchewkę możemy przygotować na dwa sposoby: zetrzeć i dodać sok z cytryny lub w bardziej lekkostrawnym wariancie drobno pokroić, posolić i gotować na parze przez ok. 20min.<br/>
      2. Umytą, osuszoną i przyprawioną solą i pieprzem rybę gotujemy na parze ok. 15 minut.<br/>
      3. Równolegle gotujemy ryż lub ziemniaki.
      `,
    },
    id: "3",
    ingredients: ["cod", "rice", "potatoes", "carrot"],
    kind: ["lunch"],
    title: "Dorsz z marchewką",
  },
  {
    description: {
      ingredients: [
        "twaróg półtłusty - 100g",
        "białko - 1 sztuka",
        "mąka pszenna - 200g",
        "masło - 50g",
        "sól - 1g",
      ],
      preparation: `
      1. Twaróg wymieszać z mąką, następnie dodać pianę ubitą z białka jaja.<br/>2. Formować kluski i dodać do wrzącej, osolonej wody.<br/>3. Po ugotowaniu dodać masło.
      `,
    },
    id: "4",
    ingredients: ["cottageCheese", "egg", "wheatFlour", "butter"],
    kind: ["lunch"],
    title: "Kluski twarogowe",
  },
  {
    description: {
      ingredients: [
        "zmielone chude mięso, np. drobiowe - 90g",
        "białko - 1 sztuka",
        "sól - 1g",
        "masło - 50g",
        "czerstwa bułka - 100g",
        "odtłuszczone mleko - 25ml",
      ],
      preparation: `
      1. Wymieszać masło z mięsem mielonym, uprzednio namoczoną w mleku i odciśniętą bułką oraz z ubitą pianą.<br/>2. Po wymieszaniu składników uformować pulpety, włożyć do wrzącej, osolonej wody i gotować około 10 minut.<br/>3. Serwować z ziemniakami i opcjonalnie surówką z marchewki.
      `,
    },
    id: "5",
    ingredients: ["chicken", "egg", "butter", "milk"],
    kind: ["lunch"],
    title: "Pulpety mięsne z ziemniakami",
  },
  {
    description: {
      ingredients: [
        "udko z kurczaka bez skóry - 300g / 2szt.",
        "marchewka - 100g / 2 szt.",
        "pęczek pietruszki - 90g / 1szt.",
        "seler korzeniowy - 60g / 1szt.",
        "cebula - 100g / 1szt.",
        "por - 70g / pół szt.",
        "natka pietruszki - 20g / pół pęczka",
        "liść laurowy",
        "ziele angielskie",
      ],
      preparation: `
      1. Mięso umieść w dużym garnku i dodaj 2 litry wody, liść laurowy i ziele angielskie. Gotuj przez ok. 30 minut.<br/>2. Obierz warzywa i drobno pokrój.<br/>3. Dodaj lubczyk i pietruszkę.<br/>4.Całość gotuj ok. półtorej godziny.<br/>5. Dodaj szczyptę soli i pieprzu. Usuń pietruszkę, pora i cebulę.
      `,
    },
    id: "6",
    ingredients: [
      "chicken",
      "carrot",
      "parsley",
      "celeriac",
      "onion",
      "leek",
      "bay-leaf",
      "allspice",
    ],
    kind: ["lunch"],
    title: "Rosół z kurczaka",
  },
  {
    description: {
      ingredients: [
        "marchewka - 25g / pół szt.",
        "biały ryż - 50g",
        "pietruszka - 20g / pół pęczka",
      ],
      preparation: `
      1. Do obranej i drobno pokrojonej marchewki dodaj pokrojoną pietruszkę.<br/>2. Umieść warzywa w garnku i gotuj ok. 25 minut w 1 litrze wody.<br/>3. Po 25 minutach dodaj ryż i gotuj następne 15 minut.<br/>4. Dopraw solą
      `,
    },
    id: "7",
    ingredients: ["parsley", "carrot", "rice"],
    kind: ["lunch"],
    title: "Ryżanka",
  },
];
