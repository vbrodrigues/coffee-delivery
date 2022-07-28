import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Bicycle, MapPin, Package, X } from "phosphor-react";
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
  OrderSummaryAddress,
  OrderSummaryPrice,
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
                <X size={32} color="#DBAC2C"></X>
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
                <OrderSummaryAddress>
                  <p>
                    <MapPin size={18} />
                    Endereço:
                  </p>
                  <h4>
                    <strong>
                      Rua {order.address.street}, {order.address.houseNumber},{" "}
                      {order.address.complement}
                    </strong>
                  </h4>
                  <p>
                    {order.address.neighbourhood} - {order.address.city},{" "}
                    {order.address.state}
                  </p>
                </OrderSummaryAddress>
                <OrderSummaryPrice>
                  <span>
                    <Bicycle size={18} />
                    <h4>Entrega: </h4>
                    <h4>{formatter.format(order?.shippingCost)}</h4>
                  </span>
                  <span>
                    <h4>Total: </h4>
                    <h3>
                      {formatter.format(
                        order?.shippingCost + order?.itemsTotal
                      )}
                    </h3>
                  </span>
                </OrderSummaryPrice>
              </OrderSummary>
            </OrderDetailsInfo>
          </OrderDetailsContainer>
        </Background>
      ) : null}
    </>
  );
}
