import { Link } from "react-router-dom";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "@remixicon/react";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/product", label: "Products" },
  { to: "/sanguine", label: "SanguineERP" },
  { to: "/solution", label: "Solutions" },
  { to: "/restType", label: "Restaurant Type" },
  { to: "/company", label: "Company" },
];

//  Animation Variants
const navContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (

 <motion.nav
      className="w-full h-16 flex items-center justify-between px-4 md:justify-around py-4 sticky top-0 z-30 bg-second-bg-color"
      initial="hidden"
      animate="show"
      variants={navContainerVariants}
    >
      {/* Logo with animation */}
      <motion.div variants={navItemVariants}>
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-40 sm:w-52 rounded-full object-cover" />
        </Link>
      </motion.div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-xl cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
      </div>

      {/* Desktop Links */}
      <motion.div
        className="hidden md:flex"
        variants={navContainerVariants}
      >
        {navLinks.map((link) => (
          <motion.div key={link.to} variants={navItemVariants}>
            <Link
              to={link.to}
              className="mx-4 cursor-pointer font-medium leading-4 pb-2 relative transition hover:text-grape after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
                after:w-full after:h-[2px] after:bg-grape after:scale-x-0 hover:after:scale-x-100 
                after:transition-transform after:duration-300 after:origin-left"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Auth Buttons with animation */}
      <motion.div
        className="hidden md:flex items-center"
        variants={navContainerVariants}
      >
        <motion.div variants={navItemVariants}>
          <Link
            to="/"
            className="mx-4 cursor-pointer font-medium pb-2 relative transition-all duration-300 
              hover:text-grape after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
              after:w-full after:h-[2px] after:bg-grape after:scale-x-0 hover:after:scale-x-100 
              after:transition-transform after:duration-300 after:origin-left"
          >
            Sign in
          </Link>
        </motion.div>
        <motion.div variants={navItemVariants}>
          <Link
            to="/"
            className="bg-grape px-2 py-2 rounded-lg text-second-bg-color font-medium transition-transform duration-500 hover:scale-105"
          >
            Try it now
          </Link>
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={navContainerVariants}
            className="absolute top-16 left-0 w-full bg-second-bg-color shadow-md py-4 flex flex-col items-center space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <motion.div key={link.to} variants={navItemVariants}>
                <Link
                  to={link.to}
                  className="mx-4 cursor-pointer font-medium pb-2 relative transition-all duration-300 
                    hover:text-grape after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
                    after:w-full after:h-[2px] after:bg-grape after:scale-x-0 hover:after:scale-x-100 
                    after:transition-transform after:duration-300 after:origin-left"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={navItemVariants}>
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
            </motion.div>
            <motion.div variants={navItemVariants}>
              <Link
                to="/"
                className="bg-grape text-second-bg-color px-4 py-2 rounded-md font-bold hover:scale-105 transition-transform"
                onClick={toggleMenu}
              >
                Try it Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>

  );
};

export default Navbar;
