import { Outlet } from "react-router";
import Navbar from "@/components/navbar/Navbar.jsx"; // Ajusta la ruta según tu estructura

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
