import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* navbar */}
      <main>
        <Outlet />
      </main>
      {/* Footer */}
    </>
  );
};

export default MainLayout;
