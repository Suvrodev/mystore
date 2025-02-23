import { Outlet } from "react-router";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import MobileHeader from "../Pages/Shared/Header/MobileHeader/MobileHeader";

const MainLayout = () => {
  return (
    <div>
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
