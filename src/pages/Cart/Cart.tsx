import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";
import {
  AddressHeader,
  AddressInfoContainer,
  AddressInput,
  CartContainer,
  CheckoutConfirmButton,
  CheckoutInfoContainer,
  CheckoutItem,
  CheckoutItemInfo,
  CheckoutItemsContainer,
  CheckoutSummary,
  CheckoutSummaryItem,
  CompleteOrderInfoContainer,
  PaymentHeader,
  PaymentInfoContainer,
  PaymentMethod,
  PaymentMethodsContainer,
} from "./Cart.styles";
import expressoTradicional from "../../assets/ExpressoTradicional.svg";

export function Cart() {
  return (
    <CartContainer>
      <CompleteOrderInfoContainer>
        <AddressInfoContainer>
          <AddressHeader>
            <MapPin size={22} color="#DBAC2C" />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressHeader>
          <AddressInput></AddressInput>
          <AddressInput></AddressInput>
          <AddressInput></AddressInput>
          <AddressInput></AddressInput>
          <AddressInput></AddressInput>
          <AddressInput></AddressInput>
          <AddressInput></AddressInput>
        </AddressInfoContainer>

        <PaymentInfoContainer>
          <PaymentHeader>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentHeader>
          <PaymentMethodsContainer>
            <PaymentMethod>
              <CreditCard size={16} color="#8047F8" />
              <p>CARTÃO DE CRÉDITO</p>
            </PaymentMethod>
            <PaymentMethod>
              <Bank size={16} color="#8047F8" />
              <p>CARTÃO DE DÉBITO</p>
            </PaymentMethod>
            <PaymentMethod>
              <Money size={16} color="#8047F8" />
              <p>DINHEIRO</p>
            </PaymentMethod>
          </PaymentMethodsContainer>
        </PaymentInfoContainer>
      </CompleteOrderInfoContainer>

      <CheckoutInfoContainer>
        <CheckoutItemsContainer>
          <CheckoutItem>
            <img src={expressoTradicional} alt="" />
            <CheckoutItemInfo>
              <p>Expresso Tradicional</p>
              <span>
                <Minus />
                <p>1</p>
                <Plus />
              </span>
              <span>
                <Trash size={16} color="#8047F8" />
                <p>REMOVER</p>
              </span>
            </CheckoutItemInfo>
            <h4>R$ 9, 90</h4>
          </CheckoutItem>

          <CheckoutItem>
            <img src={expressoTradicional} alt="" />
            <CheckoutItemInfo>
              <p>Latte</p>
              <span>
                <Minus />
                <p>1</p>
                <Plus />
              </span>
              <span>
                <Trash size={16} color="#8047F8" />
                <p>REMOVER</p>
              </span>
            </CheckoutItemInfo>
            <h4>R$ 19, 80</h4>
          </CheckoutItem>
        </CheckoutItemsContainer>

        <CheckoutSummary>
          <CheckoutSummaryItem>
            <p>Total de itens</p>
            <p>R$ 29, 70</p>
          </CheckoutSummaryItem>
          <CheckoutSummaryItem>
            <p>Entrega</p>
            <p>R$ 3, 50</p>
          </CheckoutSummaryItem>
          <CheckoutSummaryItem>
            <p>Total</p>
            <p>R$ 33, 20</p>
          </CheckoutSummaryItem>
        </CheckoutSummary>
        <CheckoutConfirmButton>CONFIRMAR PEDIDO</CheckoutConfirmButton>
      </CheckoutInfoContainer>
    </CartContainer>
  );
}
