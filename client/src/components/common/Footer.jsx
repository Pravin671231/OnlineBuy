import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const customerLinks = [
    { name: "My Account", path: "/profile" },
    { name: "My Orders", path: "/orders" },
    { name: "Shopping Cart", path: "/cart" },
    { name: "FAQs", path: "/faq" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <footer className="bg-secondary text-white">
      {/* Footer Main Content */}
      <div className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <Link to="/" className="text-2xl font-bold">
              Online<span className="text-accent">Buy</span>
            </Link>

            <p className="text-gray-400 mt-4 leading-7">
              Modern e-commerce shopping destination. Quality products, fast
              delivery, and an effortless shopping experience.
            </p>

            <div className="flex gap-4 mt-5 text-xl">
              <a href="#" className="hover:text-accent transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-accent transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-accent transition">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Navigation
            </h3>

            <nav className="flex flex-col gap-1 text-gray-400">
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
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Customer Service
            </h3>

            <nav className="flex flex-col gap-1 text-gray-400">
              {customerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-accent transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Why Shop With Us */}
          <div>
            <h3 className=" text-white text-lg font-semibold mb-4">
              Why Shop With Us?
            </h3>

            <p className="text-gray-400 mb-4">
              Backed by our high-standard customer commitment.
            </p>

            <div className="flex flex-col gap-1 text-gray-300">
              <p>✓ Secure Payments</p>
              <p>✓ Authentic Brands</p>
              <p>✓ 30-Day Easy Returns</p>
              <p>✓ 24/7 Dedicated Support</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        {/* <div className="border-t border-gray-600 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between gap-4 text-gray-400 text-sm">
            <p className="flex items-center gap-2">
              <FaEnvelope />
              support@onlinebuy.com
            </p>

            <p className="flex items-center gap-2">
              <FaPhone />
              +91 98765 43210
            </p>

            <p className="flex items-center gap-2">
              <FaLocationDot />
              India
            </p>
          </div>
        </div> */}

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-6 pt-5 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} OnlineBuy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
