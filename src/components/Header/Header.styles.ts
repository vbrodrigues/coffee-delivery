import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 90rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LocationIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  background: ${(props) => props.theme["purple-300"]};
  border-radius: 6px;

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["purple-500"]};
  }
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  background: ${(props) => props.theme["yellow-300"]};
  border-radius: 6px;

  border: none;

  cursor: pointer;

  transition: opacity 0.1s;

  &:hover {
    opacity: 0.7;
  }
`;
