import { Link } from "react-router-dom";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "@remixicon/react";
import logo from "../assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/product", label: "Products" },
  { to: "/sanguine", label: "SanguineERP" },
  { to: "/solution", label: "Solutions" },
  { to: "/restType", label: "Restaurant Type" },
  { to: "/company", label: "Company" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-screen h-16 flex items-center justify-between px-4 md:justify-around rounded-lg p-10 sticky top-0 z-30 bg-second-bg-color">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-52 rounded-full object-cover" />
      </Link>

      {/* Menu Icon (Mobile) */}
      <div className="md:hidden text-xl cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="mx-4 cursor-pointer font-medium pb-2 relative transition-all duration-300 
            hover:text-grape after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
            after:w-full after:h-[2px] after:bg-grape after:scale-x-0 hover:after:scale-x-100 
            after:transition-transform after:duration-300 after:origin-left"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="hidden md:flex items-center">
        <Link
          to="/"
          className="mx-4 cursor-pointer font-medium pb-2 relative transition-all duration-300 
            hover:text-grape after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
            after:w-full after:h-[2px] after:bg-grape after:scale-x-0 hover:after:scale-x-100 
            after:transition-transform after:duration-300 after:origin-left"
        >
          Sign in
        </Link>
        <Link
          to="/"
          className="bg-grape px-2 py-2 rounded-lg text-second-bg-color font-medium transition-transform duration-500 hover:scale-105"
        >
          Try it now
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-second-bg-color shadow-md py-4 flex flex-col items-center space-y-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="mx-4 cursor-pointer font-medium pb-2 relative transition-all duration-300 
            hover:text-grape after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
            after:w-full after:h-[2px] after:bg-grape after:scale-x-0 hover:after:scale-x-100 
            after:transition-transform after:duration-300 after:origin-left"
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            className="mx-4 cursor-pointer font-medium pb-2 relative transition-all duration-300 
            hover:text-grape after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
            after:w-full after:h-[2px] after:bg-grape after:scale-x-0 hover:after:scale-x-100 
            after:transition-transform after:duration-300 after:origin-left"
            onClick={toggleMenu}
          >
            Sign in
          </Link>
          <Link
            to="/"
            className="bg-grape text-second-bg-color px-4 py-2 rounded-md font-bold hover:scale-105 transition-transform"
            onClick={toggleMenu}
          >
            Try it Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
