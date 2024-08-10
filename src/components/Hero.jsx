import React from "react";

const Hero = () => {
  return (
    <div className="bg-black-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Welcome to Our Service
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            We provide the best solutions for your business. Let's take it to the next level together.
          </p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Image */}
        <div className="mt-10 md:mt-0 md:w-1/2">
          <img
            src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061975.jpg?t=st=1723189275~exp=1723192875~hmac=66400327ba3c13dbc2be6398bb1313ffede96b181f9e219352d7d2ada4657d46&w=740"
            alt="Hero Image"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
