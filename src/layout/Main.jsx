import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  const {pathname} = useLocation();

  return (
    <div>
      <div className="max-w-7xl mx-auto px-8">
        <NavBar />
        <Outlet />
      </div>
      {pathname === "/login" || pathname === "/signUp" ? "" : <Footer />}
    </div>
  );
};

export default Main;