import { Outlet } from "react-router-dom";
import { NavSidebar } from "../components/Admin/Sidebar";
import Header from "../components/Admin/Header";
import RouteTitle from "../components/RouteTitle";

const AdminLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <NavSidebar className="hidden lg:block" />
        <main
          className="flex-1 p-4 lg:p-8 
          overflow-y-auto
          bg-[#F0F9FF]
          "
        >
          <div className="max-w-full">
            <RouteTitle />
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
