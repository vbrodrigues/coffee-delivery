import styled from "styled-components";

export const HomeContainer = styled.div``;

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  margin: 5.875rem 0;
`;

export const BannerInfo = styled.div`
  width: 36.75rem;
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`;

export const BannerInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    line-height: 130%;
  }
`;

export const BannerInfoItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 18.375rem 18.375rem;
  grid-template-rows: 2rem 2rem;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
`;

interface BannerInfoItemProps {
  backgroundColor: string;
}

export const BannerInfoItem = styled.div<BannerInfoItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    background: ${(props) => props.backgroundColor};
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.125rem;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  grid-auto-rows: minmax(20rem, auto);
`;
