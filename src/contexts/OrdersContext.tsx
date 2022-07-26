import { createContext, ReactNode, useEffect, useState } from "react";
import { Address, CartProduct } from "./CartContext";

export interface OrderProps {
  id: number;
  products: CartProduct[];
  createdAt: Date;
  itemsTotal: number;
  shippingCost: number;
  total: number;
  address: Address;
}

interface OrdersContextType {
  orders: OrderProps[];
  addOrder: (order: OrderProps) => void;
}

export const OrdersContext = createContext<OrdersContextType>(
  {} as OrdersContextType
);

interface OrdersContextProviderProps {
  children: ReactNode;
}

export function OrdersContextProvider({
  children,
}: OrdersContextProviderProps) {
  const [orders, setOrders] = useState<OrderProps[]>([]);

  useEffect(() => {
    const ordersJSON = localStorage.getItem("@coffee-delivery:orders-1.0.0");

    if (ordersJSON) {
      const savedOrders: OrderProps[] = JSON.parse(ordersJSON);
      const sortedOrders = savedOrders.sort((a, b) => {
        if (a.createdAt < b.createdAt) {
          return 1;
        } else if (a.createdAt === b.createdAt) {
          return 0;
        }
        return -1;
      });
      setOrders(sortedOrders);
    }
  }, []);

  function addOrder(order: OrderProps) {
    setOrders((state) => {
      const newOrders = [...state, order];
      localStorage.setItem(
        "@coffee-delivery:orders-1.0.0",
        JSON.stringify(newOrders)
      );
      const sortedOrders = newOrders.sort((a, b) => {
        if (a.createdAt < b.createdAt) {
          return 1;
        } else if (a.createdAt === b.createdAt) {
          return 0;
        }
        return -1;
      });
      return sortedOrders;
    });
  }

  return (
    <OrdersContext.Provider
      value={{
        orders,
        addOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}
