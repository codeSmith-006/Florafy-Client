import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLeaf,
  FaSeedling,
} from "react-icons/fa";
import { MdPrivacyTip, MdContactPage } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import logo from "../assets/web-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1D] dark:bg-[#101828] text-white py-10 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Logo and About */}
        <div className="text-center lg:text-left">
          <h3 className="text-3xl font-bold flex items-center gap-2 text-green-300">
            <img className="w-18" src={logo} alt="" /> Florafy
          </h3>
          <p className="text-sm mt-2 text-gray-300">
            Connecting garden lovers with shared knowledge, tips, and community.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 text-sm text-gray-300 text-center lg:text-left">
          <a className="hover:text-green-400 flex items-center gap-2">
            <AiOutlineInfoCircle /> About Us
          </a>
          <a className="hover:text-green-400 flex items-center gap-2">
            <MdContactPage /> Contact
          </a>
          <a className="hover:text-green-400 flex items-center gap-2">
            <MdPrivacyTip /> Privacy Policy
          </a>
          <a className="hover:text-green-400 flex items-center gap-2">
            <FaSeedling /> Terms & Conditions
          </a>
        </div>

        {/* Social Media */}
        <div className="flex gap-4 text-white">
          <a className="hover:text-green-300 transition">
            <FaFacebookF size={20} />
          </a>
          <a className="hover:text-green-300 transition">
            <FaTwitter size={20} />
          </a>
          <a className="hover:text-green-300 transition">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Florafy — Crafted with 💚 by codeSmith-006
      </div>
    </footer>
  );
};

export default Footer;
