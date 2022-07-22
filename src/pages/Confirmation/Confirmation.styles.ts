import styled from "styled-components";

export const ConfirmationContainer = styled.div`
  display: flex;
  margin-top: 5rem;
  gap: 6.375rem;

  img {
    width: 30.45rem;
  }
`;

export const ConfirmationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const ConfirmationInfoHeader = styled.div`
  h1 {
    color: ${(props) => props.theme["yellow-700"]};
  }
`;

export const ConfirmationInfoSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;

  outline: 1px solid ${(props) => props.theme["yellow-500"]};
  border-radius: 6px 36px;
`;

export const ConfirmationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface ConfirmationItemIconProps {
  backgroundColor: string;
}

export const ConfirmationItemIcon = styled.span<ConfirmationItemIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;

  background: ${(props) => props.backgroundColor};
  border-radius: 50%;
`;

export const ConfirmationItemText = styled.div`
  p {
    font-weight: bold;
  }
`;
