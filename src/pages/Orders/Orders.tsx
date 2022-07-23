import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Package, Plus } from "phosphor-react";
import { useContext } from "react";
import { OrdersContext } from "../../contexts/OrdersContext";
import { formatter } from "../Home/Product/Product";
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
                <Package size={32} weight="fill"></Package>
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
              <OrderDetailsCall>
                <a>Ver detalhes</a>
                <Plus size={26}></Plus>
              </OrderDetailsCall>
            </Order>
          );
        })}
      </OrderListContainer>
    </OrdersContainer>
  );
}
