import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import MainLayout from "../Layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
