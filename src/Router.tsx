import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { Cart } from "./pages/Cart/Cart";
import { Confirmation } from "./pages/Confirmation/Confirmation";
import { Home } from "./pages/Home/Home";
import { Orders } from "./pages/Orders/Orders";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/orders" element={<Orders />} />
      </Route>
    </Routes>
  );
}
