import { Outlet } from "react-router-dom";
import NavbarHome from "./home-navbar";
import MainFooter from "./main-footer";

const MainContent = () => {
  return (
    <>
      <NavbarHome />
      <Outlet />
      <MainFooter />
    </>
  );
};

export default MainContent;
