import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";

const NavigationBar = () => (
  <Navbar fluid rounded className="sticky top-0 z-30 bg-white ">
    {/* Logo */}
    <Navbar.Brand href="/">
      <img
        src="/logo2.png" // Ganti dengan path logo Anda
        className="h-6 sm:h-9"
        alt="TripWise Logo"
      />
    </Navbar.Brand>

    {/* Login dan Button Get Started */}
    <div className="flex items-center space-x-2 md:order-2">
      <Link
        to="/login"
        className="text-sm text-gray-600 hover:underline hidden sm:block"
      >
        Login
      </Link>
      <Button size="sm" color="info">
        <Link to="/login" className="text-white">
          Get Started
        </Link>
      </Button>

      {/* Hamburger Menu */}
      <Navbar.Toggle />
    </div>

    {/* Menu Navigasi */}
    <Navbar.Collapse>
      <Navbar.Link href="/" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="/features">Features</Navbar.Link>
      <Navbar.Link href="/about">About Us</Navbar.Link>
      <Navbar.Link href="/contact">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
