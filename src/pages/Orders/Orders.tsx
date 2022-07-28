import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Package, Plus } from "phosphor-react";
import { useContext, useState } from "react";
import { OrderProps, OrdersContext } from "../../contexts/OrdersContext";
import { formatter } from "../Home/Product/Product";
import { OrderDetails } from "./OrderDetails/OrderDetails";
import {
  Order,
  OrderDetailsCall,
  OrderInfo,
  OrderListContainer,
  OrdersContainer,
  OrderText,
} from "./Orders.styles";

export function Orders() {
  const { orders } = useContext(OrdersContext);
  const [selectedOrder, setSelectedOrder] = useState<OrderProps | null>(null);

  function handleOpenOrderDetails(order: OrderProps) {
    console.log("Open details for order");
    console.log(order);
    setSelectedOrder(order);
  }

  return (
    <OrdersContainer>
      <h2>Meus pedidos</h2>

      <OrderListContainer>
        {orders.length === 0 && (
          <h4>Você ainda não realizou nenhum pedido conosco :(</h4>
        )}
        {orders.map((order) => {
          return (
            <Order key={order.id}>
              <OrderInfo>
                <Package size={32} weight="fill" color="#8047F8"></Package>
                <OrderText>
                  <h4>
                    {format(
                      new Date(order.createdAt),
                      "d 'de' LLLL 'às' HH:mm",
                      {
                        locale: ptBR,
                      }
                    )}
                  </h4>
                  <p>Total: {formatter.format(order.total)}</p>
                </OrderText>
              </OrderInfo>
              <OrderDetailsCall onClick={() => handleOpenOrderDetails(order)}>
                <a>Ver detalhes</a>
                <Plus size={26} color="#DBAC2C"></Plus>
              </OrderDetailsCall>
            </Order>
          );
        })}
      </OrderListContainer>
      <OrderDetails
        showModal={!!selectedOrder}
        order={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      ></OrderDetails>
    </OrdersContainer>
  );
}
