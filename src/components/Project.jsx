import React from "react";

const projects = [
  {
    title: "E-commerce",
    description: "An E-commerce Web Application that provides a comprehensive platform for users to browse, search, and purchase products online. The application includes features like product listings, a shopping cart, secure checkout, order tracking, and user authentication to enhance the shopping experience..",
    imageUrl: "https://d2908q01vomqb2.cloudfront.net/c5b76da3e608d34edb07244cd9b875ee86906328/2021/05/10/eCommerce.jpeg", // Replace with your project image URL
    link: "#"
  },
  {
    title: "Banking web application",
    description: "A Banking Web Application that offers a secure and user-friendly interface for customers and administrators to manage accounts, perform transactions, and access various banking services online. The application ensures seamless authentication, transaction management, and profile updates.",
    imageUrl: "https://cdn.dribbble.com/users/1490062/screenshots/20527778/banking_app_dashboard_4x.png", // Replace with your project image URL
    link: "#"
  },
  {
    title: "Mobile-shop web application",
    description: "A brief description of theA Mobile Shop Web Application for browsing, selecting, and purchasing mobile devices, with features including product comparison, detailed specifications, secure checkout, and user account management. project, highlighting key features and technologies used.",
    imageUrl: "https://w3layouts.com/wp-content/uploads/2013/06/smart_store-future.png", // Replace with your project image URL
    link: "#"
  },
  {
    title: "e-commerce-clothes websites",
    description: "A brief description of the project, highlighting key features and technolAn E-commerce Clothing Platform designed for users to browse, select, and purchase fashion items, featuring product filters, a shopping cart, secure checkout, and order management for a seamless shopping experience.ogies used.",
    imageUrl: "https://i.pinimg.com/originals/9c/12/46/9c1246f6b5510b0b6d582356bc2e5ae3.png", // Replace with your project image URL
    link: "#"
  },
];

const Projects = () => {
  return (
    <div className="bg-black-600 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">My Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/3 transform transition duration-500 hover:scale-105">
              <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-600 hover:text-blue-800">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
