import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
const MainLayout = () => {
  return (
    // <AuthGuard>
    <div className="main_layout">
      <Sidebar />
      <div className="main_layout__container">
        <Header />
        <div>hi</div>
        <Outlet />
      </div>
    </div>
    // </AuthGuard>
  );
};

export default MainLayout;
