import { Avatar, Navbar } from "flowbite-react";
import { useParams } from "react-router-dom";

const Header = () => {
  const { section } = useParams();
  return (
    <Navbar fluid rounded className="border-b w-full border-b-[#ABB1BC] sticky">
      <Navbar.Brand href="/">
        <img src="/logo2.png" alt="Tripwise Logo" />
      </Navbar.Brand>
      <div className="flex flex-row gap-3">
        <Avatar img="" alt="Logo Profile" rounded />
        <div className="hidden md:block">
          <h3 className="text-lg font-semibold">Jese Laos</h3>
          <p className="text-sm text-gray-400">Admin</p>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
