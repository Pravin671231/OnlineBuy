import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../Layouts/MainLayout";
import CategoryPage from "../pages/CategoryPage";
import CartPage from "../pages/CartPage";
import FavoritePage from "../pages/FavoritePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
