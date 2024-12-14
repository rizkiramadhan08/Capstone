import { Outlet } from "react-router-dom";
import NavigationBar from "../components/User/HomePage/Navbar";

export default function HomeLayout() {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
}
