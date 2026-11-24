import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <>
      {/* navbar */}
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen">
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
