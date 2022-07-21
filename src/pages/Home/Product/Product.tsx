import {
  ProductContainer,
  ProductInfo,
  ProductPricingContainer,
  ProductPrice,
  Tag,
  TagsContainer,
  ProductQuantity,
  CartButton,
} from "./Product.styles";
import expressoTradicional from "../../../assets/ExpressoTradicional.svg";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function Product() {
  return (
    <ProductContainer>
      <ProductInfo>
        <img src={expressoTradicional} alt="" />
        <TagsContainer>
          <Tag>TRADICIONAL</Tag>
        </TagsContainer>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </ProductInfo>
      <ProductPricingContainer>
        <ProductPrice>
          <p>R$</p>
          <h2>9, 90</h2>
        </ProductPrice>
        <ProductQuantity>
          <span>
            <Minus />
            <p>1</p>
            <Plus />
          </span>
          <CartButton>
            <ShoppingCart size={22} weight="fill" color="#FAFAFA" />
          </CartButton>
        </ProductQuantity>
      </ProductPricingContainer>
    </ProductContainer>
  );
}
