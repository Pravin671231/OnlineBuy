import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* navbar */}
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      {/* Footer */}
    </>
  );
};

export default MainLayout;
