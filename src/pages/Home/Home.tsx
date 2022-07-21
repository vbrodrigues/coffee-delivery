import {
  BannerContainer,
  BannerInfo,
  BannerInfoHeader,
  BannerInfoItem,
  BannerInfoItemsContainer,
  HomeContainer,
  ProductsContainer,
  ProductsGrid,
} from "./Home.styles";

import bannerImg from "../../assets/Banner.svg";
import { Clock, Coffee, Package, ShoppingCart } from "phosphor-react";
import { Product } from "./Product/Product";

export function Home() {
  return (
    <HomeContainer>
      <BannerContainer>
        <BannerInfo>
          <BannerInfoHeader>
            <h1>Encontre o café perfeito Para qualquer hora do dia</h1>
            <h3>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h3>
          </BannerInfoHeader>
          <BannerInfoItemsContainer>
            <BannerInfoItem backgroundColor="#C47F17">
              <span>
                <ShoppingCart weight="fill" color="#FAFAFA" />
              </span>
              <p>Compra simples e segura</p>
            </BannerInfoItem>
            <BannerInfoItem backgroundColor="#574F4D">
              <span>
                <Package weight="fill" color="#FAFAFA" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </BannerInfoItem>
            <BannerInfoItem backgroundColor="#DBAC2C">
              <span>
                <Clock weight="fill" color="#FAFAFA" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </BannerInfoItem>
            <BannerInfoItem backgroundColor="#8047F8">
              <span>
                <Coffee weight="fill" color="#FAFAFA" />
              </span>
              <p>O café chega fresquinho até você</p>
            </BannerInfoItem>
          </BannerInfoItemsContainer>
        </BannerInfo>
        <img src={bannerImg} alt="" />
      </BannerContainer>

      <ProductsContainer>
        <h2>Nossos cafés</h2>
        <ProductsGrid>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </ProductsGrid>
      </ProductsContainer>
    </HomeContainer>
  );
}
