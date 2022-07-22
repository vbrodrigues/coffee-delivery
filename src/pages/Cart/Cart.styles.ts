import styled, { css } from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;
`;

export const CompleteOrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  gap: 1rem;
`;

export const SelectedItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AddressInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background: ${(props) => props.theme["gray-200"]};
  border-radius: 6px;
`;

export const AddressHeader = styled.div`
  display: flex;
  justify-content: space-between;

  .AddressHeaderText {
    display: flex;
    gap: 0.5rem;
  }
`;

export const AddressForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const ADDRESS_INPUT_SIZES = {
  small: "3.75rem",
  regular: "12.5rem",
  medium: "17.25rem",
  big: "21.75rem",
  full: "35rem",
} as const;

interface AddressInputProps {
  boxSize: keyof typeof ADDRESS_INPUT_SIZES;
  isOptional: boolean;
}

export const AddressInput = styled.input<AddressInputProps>`
  display: flex;
  height: 2.625rem;
  padding: 0.75rem;
  width: ${(props) => ADDRESS_INPUT_SIZES[props.boxSize]};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  background: ${(props) => props.theme["gray-300"]};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["gray-400"]};

  &:focus {
    border: 1px solid ${(props) => props.theme["yellow-500"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }

  &:optional {
    background: ${(props) => props.theme["gray-200"]};
    border: 1px dashed ${(props) => props.theme["gray-400"]};
  }
`;

export const AddressConfirmButton = styled.button`
  margin-top: 1.5rem;
  width: 12.5rem;
  height: 3.83rem;

  border: 1px solid ${(props) => props.theme["yellow-500"]};
  outline: none;
  border-radius: 6px;
  color: ${(props) => props.theme["yellow-500"]};

  cursor: pointer;

  transition: background 0.1s;

  &:hover:not(:disabled) {
    background: ${(props) => props.theme["yellow-500"]};
    color: ${(props) => props.theme["gray-100"]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

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

interface PaymentMethodProps {
  selected?: boolean;
}

export const PaymentMethod = styled.div<PaymentMethodProps>`
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

  ${(props) =>
    props.selected &&
    css`
      /* background: ${(props) => props.theme["gray-100"]}; */
      p {
        font-weight: bold;
      }
      border: 1px solid ${(props) => props.theme["purple-500"]};
    `};
`;

export const CheckoutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28rem;
  padding: 2.5rem;

  background: ${(props) => props.theme["gray-200"]};
  border-radius: 6px 32px;

  .nav {
    display: flex;
    width: 100%;
    text-decoration: none;
  }
`;

export const CheckoutItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 23rem;
`;

export const CheckoutItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 6.5rem;

  border-bottom: 1px solid ${(props) => props.theme["gray-400"]};

  img {
    margin-right: 1.25rem;
    width: 4rem;
  }

  h4 {
    font-weight: bold;
  }

  div {
    display: flex;
  }

  &:not(:first-child) {
    margin-top: 1.5rem;
  }
`;

export const CheckoutItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3.125rem;

  p:first-child {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
`;

export const CheckoutItemInfoQuantity = styled.div`
  display: flex;
  gap: 0.5rem;

  span,
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;

    background: ${(props) => props.theme["purple-300"]};
    border-radius: 6px;
  }

  button {
    cursor: pointer;
    border: none;

    transition: opacity 0.1s;

    &:hover {
      opacity: 0.7;
    }
  }

  button p {
    font-size: 0.75rem;
  }
`;

export const CheckoutSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

interface CheckoutSummaryItemProps {
  fontWeight?: 300 | 700;
  fontSize?: "1rem" | "1.25rem";
}

export const CheckoutSummaryItem = styled.span<CheckoutSummaryItemProps>`
  display: flex;
  justify-content: space-between;

  p {
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 300)};
    font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  }
`;

export const CheckoutConfirmButton = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  height: 3.83rem;

  border: none;
  outline: none;
  border-radius: 6px;
  background: ${(props) => props.theme["yellow-500"]};
  color: ${(props) => props.theme["gray-100"]};
  font-weight: bold;

  cursor: pointer;

  transition: background 0.1s;

  &:hover:not(:disabled) {
    background: ${(props) => props.theme["yellow-700"]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
