import { createContext, ReactNode, useState } from "react";
import { ProductProps } from "../pages/Home/Product/Product";

export interface CartProduct {
  product: ProductProps;
  count: number;
}

const PAYMENT_METHODS = {
  creditCard: "Cartão de Crédito",
  debitCard: "Cartão de Débito",
  cash: "Dinheiro",
} as const;

interface PaymentMethod {
  method: keyof typeof PAYMENT_METHODS | "";
  name: string;
}

export interface Address {
  cep: string;
  street: string;
  houseNumber: number;
  complement?: string;
  neighbourhood: string;
  city: string;
  state: string;
}

interface CartContextType {
  addProductToCart: (product: CartProduct) => void;
  removeProductFromCart: (productId: number) => void;
  emptyCart: () => void;
  increaseProductCount: (productId: number) => void;
  decreaseProductCount: (productId: number) => void;
  cartProducts: CartProduct[];
  itemsTotal: number;
  shippingCost: number;
  paymentMethod: PaymentMethod;
  confirmPaymentMethod: (paymentMethod: string) => void;
  address: Address;
  confirmAddress: (address: Address) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const [itemsTotal, setItemsTotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(3.5);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("");
  const [address, setAddress] = useState<Address>({} as Address);

  function addProductToCart(product: CartProduct) {
    setCartProducts((state) => {
      const productOnCart = state.find(
        (cartProduct) => cartProduct.product.id === product.product.id
      );

      if (!productOnCart) {
        return [...state, product];
      }

      return state.map((cartProduct) => {
        if (cartProduct.product.id === product.product.id) {
          return { ...cartProduct, count: cartProduct.count + product.count };
        }
        return cartProduct;
      });
    });
    setItemsTotal((state) => state + product.count * product.product.price);
  }

  function removeProductFromCart(productId: number) {
    const productOnCart = cartProducts.find(
      (cartProduct) => cartProduct.product.id === productId
    );

    if (productOnCart) {
      setCartProducts((state) =>
        state.filter((product) => product.product.id !== productId)
      );
      setItemsTotal(
        (state) => state - productOnCart.count * productOnCart.product.price
      );
    }
  }

  function emptyCart() {
    setCartProducts([]);
  }

  function increaseProductCount(productId: number) {
    const cartProduct = cartProducts.find(
      (product) => product.product.id === productId
    );

    if (!cartProduct) {
      return;
    }

    setCartProducts((state) =>
      state.map((cartProduct) => {
        if (cartProduct.product.id === productId) {
          return {
            ...cartProduct,
            count: cartProduct.count + 1,
          };
        } else {
          return cartProduct;
        }
      })
    );

    setItemsTotal((state) => state + cartProduct.product.price);
  }

  function decreaseProductCount(productId: number) {
    const cartProduct = cartProducts.find(
      (product) => product.product.id === productId
    );

    if (!cartProduct) {
      return;
    }

    setCartProducts((state) =>
      state.map((cartProduct) => {
        if (cartProduct.product.id === productId) {
          return {
            ...cartProduct,
            count: Math.max(cartProduct.count - 1, 0),
          };
        } else {
          return cartProduct;
        }
      })
    );

    setItemsTotal((state) => state - cartProduct.product.price);
  }

  function confirmAddress(address: Address) {
    setAddress(address);
  }

  function confirmPaymentMethod(paymentMethod: string) {
    setPaymentMethod({
      method: paymentMethod,
      name: PAYMENT_METHODS[paymentMethod],
    });
  }

  return (
    <CartContext.Provider
      value={{
        addProductToCart,
        removeProductFromCart,
        emptyCart,
        increaseProductCount,
        decreaseProductCount,
        cartProducts,
        itemsTotal,
        shippingCost,
        paymentMethod,
        confirmPaymentMethod,
        address,
        confirmAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
