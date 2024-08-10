import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Get in Touch</h2>
        
        <div className="flex flex-col md:flex-row justify-between">
          {/* Contact Information */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 ">Contact Information</h3>
            <p className="text-gray-600 mb-4">
              Feel free to reach out if you have any questions or want to collaborate on a project.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Email:</strong> sathiyanbu56@gmail.com
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Phone:</strong> +91 7708099852
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Address:</strong> 3/13 Middle street, Madhavacherry, Kallakurichi, TN 606 207
            </p>
            {/* Social Media Links */}
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-pink-600 hover:text-pink-800">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
