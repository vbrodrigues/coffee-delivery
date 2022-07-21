import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { Cart } from "./pages/Cart/Cart";
import { Home } from "./pages/Home/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
