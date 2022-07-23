import styled from "styled-components";

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  width: 70rem;
`;

export const OrderListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  list-style-type: none;
  margin-top: 1.75rem;
`;

export const Order = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2.5rem;

  background: ${(props) => props.theme["gray-200"]};
  border-radius: 6px;
`;

export const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const OrderText = styled.div`
  display: flex;
  flex-direction: column;

  p,
  h4 {
    line-height: 130%;
  }

  p {
    font-weight: bold;
    font-size: 0.875rem;
  }
`;

export const OrderDetailsCall = styled.span`
  display: flex;
  align-items: center;
  gap: 1.125rem;

  cursor: pointer;
`;
