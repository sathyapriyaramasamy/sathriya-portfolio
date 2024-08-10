import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Navigation Links */}
        <div className="mb-6 md:mb-0">
          <nav className="flex space-x-4">
            <a href="#home" className="hover:text-white transition duration-300">Home</a>
            <a href="#about" className="hover:text-white transition duration-300">About</a>
            <a href="#projects" className="hover:text-white transition duration-300">Projects</a>
            <a href="#contact" className="hover:text-white transition duration-300">Contact</a>
          </nav>
        </div>

        {/* Social Media Links */}
        <div className="mb-6 md:mb-0 flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            <FaLinkedinIn size={24} />
          </a>
        </div>

        {/* Copyright Information */}
        <div className="text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} sathyapriya. © All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
