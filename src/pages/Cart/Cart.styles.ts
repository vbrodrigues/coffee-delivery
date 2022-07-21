import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const CompleteOrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
`;

export const AddressInfoContainer = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme["gray-200"]};
  border-radius: 6px;
`;

export const AddressHeader = styled.div``;

export const AddressInput = styled.input``;

export const PaymentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  margin-top: 0.75rem;
  gap: 2rem;

  background: ${(props) => props.theme["gray-200"]};
  border-radius: 6px;
`;

export const PaymentHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    margin-top: 0.125rem;
  }
`;

export const PaymentMethodsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const PaymentMethod = styled.button`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 1rem;
  gap: 0.75rem;
  width: 11.125rem;

  border: 1px solid ${(props) => props.theme["gray-300"]};
  cursor: pointer;

  background: ${(props) => props.theme["gray-300"]};
  border-radius: 6px;

  transition: background 0.2s;
  transition: border 0.2s;

  p {
    font-size: 0.75rem;
  }

  &:hover {
    background: ${(props) => props.theme["gray-100"]};
    border: 1px solid ${(props) => props.theme["gray-500"]};
  }
`;

export const CheckoutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28rem;
  padding: 2.5rem;

  background: ${(props) => props.theme["gray-200"]};
  border-radius: 6px 32px;
`;

export const CheckoutItemsContainer = styled.div``;

export const CheckoutItem = styled.div``;

export const CheckoutItemInfo = styled.div``;

export const CheckoutSummary = styled.div``;

export const CheckoutSummaryItem = styled.span``;

export const CheckoutConfirmButton = styled.button``;
