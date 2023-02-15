import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Header/Header";
import Header from "../../components/Sidebar/Sidebar";
const MainLayout = () => {
  return (
    // <AuthGuard>
    <div className="main_layout">
      <Sidebar />
      <div className="main_layout__container">
        <Header />
        <div>hi</div>
        {/* <Outlet /> */}
      </div>
    </div>
    // </AuthGuard>
  );
};

export default MainLayout;
