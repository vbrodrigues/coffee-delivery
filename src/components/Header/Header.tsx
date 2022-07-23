import {
  CartButton,
  HeaderContainer,
  LocationIndicator,
  HeaderNav,
} from "./Header.styles";
import logo from "../../assets/Logo.svg";
import { ShoppingCart, UserList } from "phosphor-react";
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
        <NavLink to="/orders" className="nav">
          <LocationIndicator>
            <UserList size={22} weight="fill" color="#8047F8" />
            <span>Meus pedidos</span>
          </LocationIndicator>
        </NavLink>

        <NavLink to="/cart" style={{ textDecoration: "none" }}>
          <CartButton displayBadge={cartProducts.length > 0}>
            <div className="CartWithItemsBadge">{cartProducts.length}</div>
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
          </CartButton>
        </NavLink>
      </HeaderNav>
    </HeaderContainer>
  );
}
