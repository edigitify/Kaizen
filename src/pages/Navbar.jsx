import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import Logo from "../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="h-20 w-[200px] flex items-center justify-center overflow-hidden">
          <img
            src={Logo}
            alt="Kaizen IT Solutions"
            className="h-20 w-auto object-contain translate-y-2 md:h-24 lg:h-24"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm font-medium">
          <li>
            <NavLink
             to="/"
              className={({ isActive }) =>
                `font-medium text-sm lg:text-base hover:text-red-200 transition-colors ${
                  isActive
                    ? "text-red-700 border-b-2 border-red-700"
                    : "text-red-400 border-b-2 border-transparent"
                }`
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) =>
                `font-medium text-sm lg:text-base hover:text-red-200 transition-colors ${
                  isActive
                    ? "text-red-700 border-b-2 border-red-700"
                    : "text-red-400 border-b-2 border-transparent"
                }`
              }>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) =>
                `font-medium text-sm lg:text-base hover:text-red-200 transition-colors ${
                  isActive
                    ? "text-red-700 border-b-2 border-red-700"
                    : "text-red-400 border-b-2 border-transparent"
                }`
              }>
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className={({ isActive }) =>
                `font-medium text-sm lg:text-base hover:text-red-200 transition-colors ${
                  isActive
                    ? "text-red-700 border-b-2 border-red-700"
                    : "text-red-400 border-b-2 border-transparent"
                }`
              }>
              BLOGS
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) =>
                `font-medium text-sm lg:text-base hover:text-red-200 transition-colors ${
                  isActive
                    ? "text-red-700 border-b-2 border-red-700"
                    : "text-red-400 border-b-2 border-transparent"
                }`
              }>
              CONTACT
            </NavLink>
          </li>
        </ul>

        {/* Quote Button */}
        <button className="hidden md:block bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition">
          GET A QUOTE
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md animate-slideDown">
          <ul className="flex flex-col space-y-4 p-4 text-sm">
            <li>
              <NavLink
                to="/"
                className="text-red-600 border-b-2 border-red-600 pb-1"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-red-600">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-red-600">
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="hover:text-red-600">
                BLOGS
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-red-600">
                CONTACT
              </NavLink>
            </li>
          </ul>
          <div className="px-4 pb-4">
            <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
              GET A QUOTE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;