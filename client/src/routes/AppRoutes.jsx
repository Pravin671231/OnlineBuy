import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../Layouts/MainLayout";
import CategoryPage from "../pages/CategoryPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="categories" element={<CategoryPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
