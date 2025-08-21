import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import Logo from "../assets/Logo1.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-red-900 text-white px-6 py-20 text-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Socials */}
        <div>
          <img
            src={Logo}
            alt="Amber Logo"
            className="h-16 w-auto object-contain translate-y-2 md:h-20 lg:h-24"
          />
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="hover:text-blue-500" />
            <FaTwitter className="hover:text-blue-400" />
            <FaInstagram className="hover:text-pink-500" />
          </div>
          <div className="mt-6">
            <input
              type="email"
              placeholder="care@kaizen.com"
              className="rounded px-3 py-2 text-black w-full max-w-xs bg-white"
            />
            <button className="bg-gray-200 mt-2 px-4 py-2 rounded text-white">
              Subscribe
            </button>
          </div>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Important Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              {" "}
              <Link to="/services">SERVICES</Link>{" "}
            </li>

            <li>
              {" "}
              <Link to="/blogs">BLOGS</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/contact">CONTACT US</Link>{" "}
            </li>
          </ul>
        </div>

        {/* All Products List */}
        <div>
          <h3 className="text-white font-semibold mb-3">All Products List</h3>
          <ul className="space-y-2">
            <li>IT SECTOR</li>
            <li>SOFTWERE DEVELOPER</li>
            <li>FULL STACK DEVELOPER</li>
            <li>MERN STACK DEVELOPER</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2">
            <li>
              {" "}
              <a>care@kaizen.com</a>
            </li>
            <li>info@kaizen.com</li>
            <li>+91 5692738377</li>
            <li>
              Plot No - C - 20, Office No - 404, Aruna
              <br />
              Park, Laxmi Nagar Delhi - 110092
              <br />
              Delhi - 110092
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-white">
        <p>©️ 2025 Edigitify Pvt. Ltd. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-6 flex flex-col space-y-3">
        <a href="https://wa.me/919872654265" target="_blank" rel="noreferrer">
          <div className="bg-green-500 p-3 rounded-full shadow-lg text-white">
            <FaWhatsapp size={20} />
          </div>
        </a>
        <a href="tel:919872654265">
          <div className="bg-blue-500 p-3 rounded-full shadow-lg text-white">
            <FaPhone size={20} />
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;