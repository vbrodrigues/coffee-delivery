import { createContext, ReactNode, useEffect, useState } from "react";
import { ProductProps } from "../pages/Home/Product/Product";

interface ProductsContextType {
  products: ProductProps[];
}

export const ProductsContext = createContext<ProductsContextType>(
  {} as ProductsContextType
);

interface ProductsContextProviderProps {
  children: ReactNode;
}

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    function getProducts() {
      fetch("../../../products.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const productsJSON = JSON.stringify(data.products);
          localStorage.setItem("@coffee-delivery:products-1.0.0", productsJSON);
          setProducts(data.products);
        });
    }

    const storageProductsJSON = localStorage.getItem(
      "@coffee-delivery:products-1.0.0"
    );

    if (!storageProductsJSON) {
      getProducts();
    } else {
      const storageProducts = JSON.parse(storageProductsJSON);
      setProducts(storageProducts);
    }
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
