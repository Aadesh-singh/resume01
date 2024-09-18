import { Outlet } from "react-router-dom";
import HeaderNavigation from "../components/HeaderNavigation";
import Footer from "../components/Footer";
import RootWraper from "../components/RootWraper";

const Root = () => {
  return (
    <RootWraper>
      <HeaderNavigation />
      <Outlet />
      <Footer />
    </RootWraper>
  );
};
export default Root;
