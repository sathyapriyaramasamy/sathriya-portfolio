import React from "react";

// import image from "/image/image1.png"

const About = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="md:w-1/2">
        
          <img 
            src="https://flatironschool.com/wp-content/uploads/2021/12/Software_Engineering_Full-stack_Web_Developer_Skills__Needed-1124x750.webp"

            alt="About Me"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10">
          <h2 className="text-4xl font-bold text-red-800 mb-6">About Me</h2>
          <p className="text-lg text-gray-600 mb-4">
            Hello! I'm <span font-bold>Sathyapriya</span>, a passionate full-stack web developer with a love for creating
            dynamic and responsive web applications. I have experience in various technologies
            including React, Node.js, and databases like MySQL and MongoDB.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            I enjoy tackling challenging problems and constantly learning new skills to stay
            updated with the latest trends in web development. Let's work together to bring your
            ideas to life!
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
