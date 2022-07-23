import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 70rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav {
    display: flex;
    width: 100%;
    text-decoration: none;
  }
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
  gap: 0.55rem;

  cursor: pointer;

  background: ${(props) => props.theme["purple-300"]};
  border-radius: 6px;

  transition: opacity 0.1s;

  &:hover {
    opacity: 0.7;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["purple-500"]};
  }
`;

interface CartButtonProps {
  displayBadge: boolean;
}

export const CartButton = styled.button<CartButtonProps>`
  display: flex;
  flex-direction: column;
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

  .CartWithItemsBadge {
    margin-top: -1rem;
    margin-right: -2.5rem;
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background: ${(props) => props.theme["purple-500"]};

    font-size: 0.75rem;
    text-decoration: none;
    color: ${(props) => props.theme["gray-100"]};

    ${(props) =>
      !props.displayBadge &&
      css`
        visibility: hidden;
      `}
  }
`;
