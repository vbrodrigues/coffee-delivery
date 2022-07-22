import {
  ConfirmationContainer,
  ConfirmationInfo,
  ConfirmationInfoHeader,
  ConfirmationInfoSummary,
  ConfirmationItem,
  ConfirmationItemIcon,
  ConfirmationItemText,
} from "./Confirmation.styles";
import confirmationImg from "../../assets/Confirmation.svg";
import { Clock, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { formatter } from "../Home/Product/Product";

export function Confirmation() {
  const { address, paymentMethod, itemsTotal, shippingCost } =
    useContext(CartContext);

  return (
    <ConfirmationContainer>
      <ConfirmationInfo>
        <ConfirmationInfoHeader>
          <h1>Uhu! Pedido confirmado!</h1>
          <h3>Agora é só aguardar que logo o café chegará até você</h3>
        </ConfirmationInfoHeader>
        <ConfirmationInfoSummary>
          <ConfirmationItem>
            <ConfirmationItemIcon backgroundColor="#8047F8">
              <MapPin size={16} weight="fill" color="#FAFAFA"></MapPin>
            </ConfirmationItemIcon>
            <ConfirmationItemText>
              <h4>
                Entrega em{" "}
                <p>
                  Rua {address.street}, {address.houseNumber},{" "}
                  {address.complement}
                </p>
              </h4>
              <p>
                {address.neighbourhood} - {address.city}, {address.state}
              </p>
            </ConfirmationItemText>
          </ConfirmationItem>

          <ConfirmationItem>
            <ConfirmationItemIcon backgroundColor="#DBAC2C">
              <Clock size={16} weight="fill" color="#FAFAFA"></Clock>
            </ConfirmationItemIcon>
            <ConfirmationItemText>
              <h4>Previsão de entrega</h4>
              <p>20 min - 30 min</p>
            </ConfirmationItemText>
          </ConfirmationItem>

          <ConfirmationItem>
            <ConfirmationItemIcon backgroundColor="#4B2995">
              <Money size={16} weight="fill" color="#FAFAFA"></Money>
            </ConfirmationItemIcon>
            <ConfirmationItemText>
              <h4>Total do pedido</h4>
              <p>
                {formatter.format(itemsTotal)}
                {` (+ ${formatter.format(shippingCost)})`}
              </p>
            </ConfirmationItemText>
          </ConfirmationItem>

          <ConfirmationItem>
            <ConfirmationItemIcon backgroundColor="#C47F17">
              <CurrencyDollar
                size={16}
                weight="fill"
                color="#FAFAFA"
              ></CurrencyDollar>
            </ConfirmationItemIcon>
            <ConfirmationItemText>
              <h4>Forma de pagamento</h4>
              <p>{paymentMethod.name}</p>
            </ConfirmationItemText>
          </ConfirmationItem>
        </ConfirmationInfoSummary>
      </ConfirmationInfo>
      <img src={confirmationImg} alt="" />
    </ConfirmationContainer>
  );
}
