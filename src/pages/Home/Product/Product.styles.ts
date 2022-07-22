import styled, { css } from "styled-components";

export const ProductContainer = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme["gray-200"]};
  border-radius: 6px 36px;
`;

export const ProductHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 0.75rem;
`;

export const AddedToCartTag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  margin-bottom: 1rem;

  background: ${(props) => props.theme["green-300"]};
  border-radius: 100px;

  ${(props) =>
    props.hidden &&
    css`
      visibility: hidden;
    `}
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;

  h3 {
    font-family: "Baloo 2";
    font-size: 1.25rem;
    margin-top: 1rem;
  }

  p {
    font-size: 0.75rem;
    margin-top: 0.5rem;
    text-align: center;
    line-height: 130%;
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
`;

export const Tag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  margin-top: 1rem;

  background: ${(props) => props.theme["yellow-300"]};
  border-radius: 100px;

  color: ${(props) => props.theme["yellow-500"]};
  font-size: 0.625rem;
`;

export const ProductPricingContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 0.8125;
  padding: 1.25rem 1.5rem;
`;

export const ProductPrice = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 2.375rem;

  span {
    display: flex;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;

    background: ${(props) => props.theme["purple-300"]};
    border-radius: 6px;
  }
`;

interface CartButtonProps {
  addedToCart?: boolean;
}

export const CartButton = styled.button<CartButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  background: ${(props) => props.theme["purple-500"]};
  border-radius: 6px;

  border: none;

  cursor: pointer;

  transition: opacity 0.1s;

  &:hover:not(:disabled) {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${(props) =>
    props.addedToCart &&
    css`
      background: ${(props) => props.theme["green-500"]};
    `}
`;
