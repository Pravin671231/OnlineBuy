
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-secondary text-white font-bold">
      <div className="px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl">
          Online<span className="text-accent">Buy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-accent transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Cart, User & Mobile Menu */}
        <div className="flex items-center gap-5 text-xl">

          <Link to="/cart" className="hover:text-accent">
            <FaCartShopping />
          </Link>

          <Link to="/profile" className="hover:text-accent">
            <FaRegUserCircle />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl hover:text-accent"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-5 py-4 bg-secondary border-t border-white/20 ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-accent transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
