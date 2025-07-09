import { Link } from "react-router-dom";
import { useState } from "react";
import { RiMenu3Line ,RiCloseLine } from "@remixicon/react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="w-screen h-16 flex items-center justify-between px-4 md:justify-around rounded-lg p-10 sticky top-0 z-30 bg-second-bg-color">
        <Link to="/">
          <img src={logo} alt="Logo" className=" w-52 rounded-full object-cover" />
        </Link>

        {/* Menu Icon for Mobile View */}
        <div className="md:hidden text-xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <Link
            to="/"
            className="mx-4 cursor-pointer transition-transform duration-500 hover:scale-105 hover:text-grape font-medium pb-2"
          >
            Home
          </Link>
          <Link
            to="/product"
            className="mx-4 cursor-pointer transition-transform duration-500 hover:scale-105 hover:text-grape font-medium pb-2 "
          >
            Products
          </Link>
          <Link
            to="/sanguine"
            className="mx-4 cursor-pointer transition-transform duration-500 hover:scale-105 hover:text-grape font-medium pb-2 "
          >
            SanguineERP
          </Link>
          <Link
            to="/solution"
            className="mx-4 cursor-pointer transition-transform duration-500 hover:scale-105 hover:text-grape font-medium pb-2 "
          >
            Solutions
          </Link>
          <Link
            to="restType"
            className="mx-4 cursor-pointer transition-transform duration-500 hover:scale-105 hover:text-grape font-medium pb-2 "
          >
            Restaurant Type
          </Link>
          <Link
            to="/company"
            className="mx-4 cursor-pointer transition-transform duration-500 hover:scale-105 hover:text-grape font-medium pb-2"
          >
            Company
          </Link>
        </div>
        
        <div className=" flex  items-center">
        <Link
            to="/"
            className=" hidden md:block mx-4 cursor-pointer transition-transform duration-500 hover:scale-105 hover:text-grape font-medium pb-2 "
          >
            Sign in
          </Link>
        <Link
          to="/"
          className="hidden md:block bg-grape px-2 py-2 rounded-lg text-second-bg-color font-medium transition-transform duration-500 hover:scale-105"
        >
          Try it now
        </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-second-bg-color shadow-md py-4 flex flex-col items-center space-y-4 md:hidden">
            <Link
              to="/"
              className="text-lg font-medium text-gray-800 hover:text-grape"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/product"
              className="text-lg font-medium text-gray-800 hover:text-grape"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="/sanguine"
              className="text-lg font-medium text-gray-800 hover:text-grape"
              onClick={toggleMenu}
            >
              Sanguine ERP
            </Link>
            <Link
              to="/solution"
              className="text-lg font-medium text-gray-800 hover:text-grape"
              onClick={toggleMenu}
            >
              Solutions
            </Link>
            <Link
              to="/restType"
              className="text-lg font-medium text-gray-800 hover:text-grape"
              onClick={toggleMenu}
            >
              Restaurant Type
            </Link>
            <Link
              to="/company"
              className="text-lg font-medium text-gray-800 hover:text-grape"
              onClick={toggleMenu}
            >
              Company
            </Link>
            <Link
              to="/"
              className="text-lg font-medium text-gray-800 hover:text-grape"
              onClick={toggleMenu}
            >
              Sign in
            </Link>
            <Link
              to="/"
              className=" bg-grape text-second-bg-color px-4 py-2 rounded-md font-bold hover:scale-105 transition-transform"
              onClick={toggleMenu}
            >
              Try it Now
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
