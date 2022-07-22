import {
  ProductContainer,
  ProductInfo,
  ProductPricingContainer,
  ProductPrice,
  Tag,
  TagsContainer,
  ProductQuantity,
  CartButton,
  AddedToCartTag,
  ProductHeader,
} from "./Product.styles";
import expressoTradicional from "../../../assets/ExpressoTradicional.svg";
import expressoAmericano from "../../../assets/ExpressoAmericano.svg";
import expressoCremoso from "../../../assets/ExpressoCremoso.svg";
import expressoGelado from "../../../assets/ExpressoGelado.svg";
import cafeComLeite from "../../../assets/CaféComLeite.svg";
import latte from "../../../assets/Latte.svg";
import capuccino from "../../../assets/Capuccino.svg";
import macchiato from "../../../assets/Macchiato.svg";
import mocaccino from "../../../assets/Mocaccino.svg";
import chocolateQuente from "../../../assets/ChocolateQuente.svg";
import cubano from "../../../assets/Cubano.svg";
import havaiano from "../../../assets/Havaiano.svg";
import arabe from "../../../assets/Árabe.svg";
import irlandes from "../../../assets/Irlandês.svg";
import { CheckCircle, Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";

export const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const PRODUCT_IMAGES = {
  expressoTradicional,
  expressoAmericano,
  expressoCremoso,
  expressoGelado,
  cafeComLeite,
  latte,
  capuccino,
  macchiato,
  mocaccino,
  chocolateQuente,
  cubano,
  havaiano,
  arabe,
  irlandes,
} as const;

export interface ProductProps {
  id: number;
  name: string;
  tags: string[];
  description: string;
  price: number;
  image: keyof typeof PRODUCT_IMAGES;
}

export function Product({
  id,
  name,
  tags,
  description,
  price,
  image,
}: ProductProps) {
  const [count, setCount] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const { addProductToCart } = useContext(CartContext);

  function handleAddProductToCart() {
    addProductToCart({
      product: {
        id,
        name,
        tags,
        description,
        price,
        image,
      },
      count,
    });
    setAddedToCart(true);
  }

  function handleIncreaseCount() {
    setCount((state) => state + 1);
  }

  function handleDecreaseCount() {
    setCount((state) => Math.max(state - 1, 0));
  }

  return (
    <ProductContainer>
      <ProductHeader>
        <AddedToCartTag hidden={!addedToCart}>
          <CheckCircle></CheckCircle>
        </AddedToCartTag>
      </ProductHeader>
      <ProductInfo>
        <img src={PRODUCT_IMAGES[image]} alt="" />
        <TagsContainer>
          {tags.map((tag) => {
            return <Tag key={tag}>{tag}</Tag>;
          })}
        </TagsContainer>
        <h3>{name}</h3>
        <p>{description}</p>
      </ProductInfo>
      <ProductPricingContainer>
        <ProductPrice>
          <h2>{formatter.format(price)}</h2>
        </ProductPrice>
        <ProductQuantity>
          <span>
            <Minus cursor={"pointer"} onClick={handleDecreaseCount} />
            <p>{count}</p>
            <Plus cursor={"pointer"} onClick={handleIncreaseCount} />
          </span>
          <CartButton
            onClick={handleAddProductToCart}
            disabled={addedToCart || count === 0}
            addedToCart={addedToCart}
          >
            <ShoppingCart size={22} weight="fill" color="#FAFAFA" />
          </CartButton>
        </ProductQuantity>
      </ProductPricingContainer>
    </ProductContainer>
  );
}
