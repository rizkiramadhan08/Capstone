import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import useAuthStore from "../../../store/authStore";

const NavigationBar = () => {
  const { auth, clearAuth } = useAuthStore(); // Ambil data autentikasi dan fungsi logout

  const handleLogout = () => {
    clearAuth(); // Hapus data autentikasi
    window.location.href = "/"; // Arahkan ke halaman utama
  };

  return (
    <Navbar fluid rounded className="sticky top-0 z-30 bg-white shadow-md">
      <Navbar.Brand href="/">
        <img
          src="/logo2.png" // Sesuaikan dengan logo Anda
          className="h-6 sm:h-9"
          alt="TripWise Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-800">
          TripWise
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {auth ? (
          // Jika user login, tampilkan nama pengguna dan tombol logout
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">
              Hi, {auth.first_name || "Traveler"}
            </span>
            <Button color="failure" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          // Jika user belum login, tampilkan tombol login
          <Button color="customBlue">
            <Link to="/login">Get Started</Link>
          </Button>
        )}
        {/* Tombol Toggle untuk layar kecil */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active={window.location.pathname === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link
          href="/features"
          active={window.location.pathname === "/features"}
        >
          Destination
        </Navbar.Link>
        <Navbar.Link
          href="/about"
          active={window.location.pathname === "/about"}
        >
          Route
        </Navbar.Link>
        <Navbar.Link
          href="/contact"
          active={window.location.pathname === "/contact"}
        >
          AI Assistant
        </Navbar.Link>
        {/* Menu Logout di layar kecil */}
        {auth && (
          <div className="mt-3 md:hidden">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Hi, {auth?.first_name || "Traveler"}
            </span>
            <Button
              color="failure"
              onClick={handleLogout}
              className="w-full text-center"
            >
              Logout
            </Button>
          </div>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
