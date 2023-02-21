import { Outlet } from "react-router-dom";

import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
const MainLayout = () => {
  return (
    <div className="main_layout">
      <Sidebar />
      <div className="main_layout__container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
