import {
  CartButton,
  HeaderContainer,
  LocationIndicator,
  HeaderNav,
} from "./Header.styles";
import logo from "../../assets/Logo.svg";
import { Circle, MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const { cartProducts } = useContext(CartContext);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt=""></img>
      </NavLink>

      <HeaderNav>
        <LocationIndicator>
          <MapPin size={22} weight="fill" color="#8047F8" />
          <span>Passo Fundo, RS</span>
        </LocationIndicator>

        <NavLink to="/cart">
          <CartButton displayBadge={cartProducts.length > 0}>
            <Circle
              className="CartWithItemsBadge"
              size={14}
              weight="fill"
              color="#8047F8"
            ></Circle>
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
          </CartButton>
        </NavLink>
      </HeaderNav>
    </HeaderContainer>
  );
}
