import { ProductFromLocalStorage } from "@app/components/types";
import { mockedProductsDB } from "@app/mockups";

export const setAllProductsInitiallyChecked = ({
  products,
  setProducts,
}: Props) => {
  const updatedProducts: ProductFromLocalStorage[] = products;

  mockedProductsDB.forEach((productDB) => {
    const name = productDB.name;

    if (!products.find((p) => p.name === name)) {
      updatedProducts.push({ checked: true, name });
    }
  });

  setProducts(updatedProducts);
};

interface Props {
  products: ProductFromLocalStorage[];
  setProducts: (product: ProductFromLocalStorage[]) => void;
}
