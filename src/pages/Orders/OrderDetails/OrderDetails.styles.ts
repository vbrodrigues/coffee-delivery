import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.25rem 2.5rem;
  width: 50rem;
  align-self: center;
  position: fixed;

  box-shadow: -6px 8px 6px -6px ${(props) => props.theme["gray-500"]};
  background: ${(props) => props.theme["gray-100"]};
  border-radius: 6px;
  z-index: 10;
`;

export const OrderDetailsHeader = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  z-index: 10;

  .ModalClose {
    margin-left: auto;
    cursor: pointer;
  }
`;

export const OrderDetailsHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  line-height: 130%;
  z-index: 10;

  h4 {
    line-height: 130%;
    font-weight: bold;
  }
`;

export const OrderDetailsInfo = styled.div`
  display: flex;

  z-index: 10;
`;
