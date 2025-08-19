import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import Logo from "../assets/Logo.png";
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
            className="h-30 w-auto object-contain translate-y-2 md:h-34 lg:h-34"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm font-medium">
          <li>
            <a
              href="#"
              className="text-red-600 border-b-2 border-red-600 pb-1 transition-colors"
            >
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-600 transition-colors">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-600 transition-colors">
              SERVICES
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-600 transition-colors">
              BLOGS
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-600 transition-colors">
              CONTACT
            </a>
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
              <a
                href="#"
                className="text-red-600 border-b-2 border-red-600 pb-1"
              >
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                BLOGS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                CONTACT
              </a>
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
