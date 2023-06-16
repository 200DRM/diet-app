import { ChangeEvent, useEffect } from "react";
import { setAllProductsInitiallyChecked } from "@app/helpers/products";
import { mockedProductsDB } from "@app/mockups";
import { Headline } from "@components/Headline";
import { Checkbox } from "@components/Inputs";
import { MainContent } from "@components/MainContent";
import { useLocalStorage } from "@components/hooks";
import { ProductFromLocalStorage } from "@components/types";

export const FoodPreferencesCheckboxes = () => {
  const [products, setProducts] = useLocalStorage("products", "[]");

  const handleCheckbox = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const { checked, name } = target;
    const currentProduct = { checked, name };

    if (products.find((p: ProductFromLocalStorage) => p.name === name)) {
      const productsWithoutCurrent = products.filter(
        (p: ProductFromLocalStorage) => p.name !== name
      );
      setProducts([...productsWithoutCurrent, currentProduct]);
    } else {
      setProducts([...products, currentProduct]);
    }
  };

  useEffect(() => {
    setAllProductsInitiallyChecked({ products, setProducts });
  }, []);

  return (
    <>
      <Headline>
        Odznacz składniki, które chcesz pominąć w przepisach. Wszystkie poniższe
        składniki są dozwolone w ramach diety.
      </Headline>
      {mockedProductsDB?.length ? (
        <MainContent>
          <>
            {mockedProductsDB.map((productFromDB) => {
              const initiallyChecked =
                products?.length > 0
                  ? products?.find(
                      (productFromLocal: ProductFromLocalStorage) =>
                        productFromLocal.name === productFromDB.name &&
                        productFromLocal.checked
                    )
                  : true;

              return (
                <Checkbox
                  initiallyChecked={initiallyChecked}
                  key={productFromDB.name}
                  name={productFromDB.name}
                  onChange={handleCheckbox}
                  text={productFromDB.text}
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
