import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Package, X } from "phosphor-react";
import { OrderProps } from "../../../contexts/OrdersContext";
import { formatter, PRODUCT_IMAGES } from "../../Home/Product/Product";
import {
  Background,
  OrderDetailsContainer,
  OrderDetailsHeader,
  OrderDetailsHeaderText,
  OrderDetailsInfo,
  OrderItem,
  OrderSummary,
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
            <OrderDetailsInfo>
              <h3>Produtos</h3>
              {order.products.map((product) => {
                return (
                  <OrderItem key={product.product.id}>
                    <img src={PRODUCT_IMAGES[product.product.image]} alt="" />
                    <p>{product.product.name}</p>
                    <div className="ProductTotal">
                      <h4>
                        {formatter.format(
                          product.product.price * product.count
                        )}
                      </h4>
                      <p>
                        {product.count}x{" "}
                        {formatter.format(product.product.price)}
                      </p>
                    </div>
                  </OrderItem>
                );
              })}
              <OrderSummary>
                <span>
                  <p>Entrega: </p>
                  <h4>{formatter.format(order?.shippingCost)}</h4>
                </span>
                <p>Endereço:</p>
                <h3>
                  <p>Total: </p>
                  {formatter.format(order?.shippingCost + order?.itemsTotal)}
                </h3>
              </OrderSummary>
            </OrderDetailsInfo>
          </OrderDetailsContainer>
        </Background>
      ) : null}
    </>
  );
}
