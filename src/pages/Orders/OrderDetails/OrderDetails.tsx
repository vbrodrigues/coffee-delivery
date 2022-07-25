import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Package, X } from "phosphor-react";
import { OrderProps } from "../../../contexts/OrdersContext";
import { formatter } from "../../Home/Product/Product";
import {
  Background,
  OrderDetailsContainer,
  OrderDetailsHeader,
  OrderDetailsHeaderText,
  OrderDetailsInfo,
} from "./OrderDetails.styles";

interface OrderDetailsProps {
  showModal: boolean;
  setSelectedOrder: (order: OrderProps | null) => void;
  order: OrderProps | null;
}

export function OrderDetails({
  showModal,
  order,
  setSelectedOrder,
}: OrderDetailsProps) {
  return (
    <>
      {showModal && order ? (
        <Background>
          <OrderDetailsContainer>
            <OrderDetailsHeader>
              <Package size={32} weight="fill"></Package>
              <OrderDetailsHeaderText>
                <h4>
                  {format(new Date(order.createdAt), "d 'de' LLLL 'às' HH:mm", {
                    locale: ptBR,
                  })}
                </h4>
              </OrderDetailsHeaderText>
              <div
                className="ModalClose"
                onClick={() => setSelectedOrder(null)}
              >
                <X size={32}></X>
              </div>
            </OrderDetailsHeader>
            <OrderDetailsInfo>Teste</OrderDetailsInfo>
          </OrderDetailsContainer>
        </Background>
      ) : null}
    </>
  );
}
