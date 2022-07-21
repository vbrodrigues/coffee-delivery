import styled from "styled-components";

export const LayoutContainer = styled.div`
  padding: 2rem;
  width: 100%;
  /* max-width: 90rem; */

  background: ${(props) => props.theme["gray-100"]};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
