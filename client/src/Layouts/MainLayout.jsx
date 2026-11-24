import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

const MainLayout = () => {
  return (
    <>
      {/* navbar */}
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      {/* Footer */}
    </>
  );
};

export default MainLayout;
