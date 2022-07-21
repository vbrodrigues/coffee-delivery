import {
  CartButton,
  HeaderContainer,
  LocationIndicator,
  HeaderNav,
} from "./Header.styles";
import logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
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
          <CartButton>
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
          </CartButton>
        </NavLink>
      </HeaderNav>
    </HeaderContainer>
  );
}
