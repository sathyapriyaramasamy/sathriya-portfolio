import React from "react";

const Skills = () => {
  const skillsData = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "JavaScript", percentage: 75 },
    { name: "React", percentage: 70 },
    { name: "Node.js", percentage: 65 },
    { name: "Python", percentage: 80 },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">{skill.name}</h3>
              <div className="relative h-4 rounded-full overflow-hidden bg-gray-200">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-in-out"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <div className="mt-2 text-right text-gray-600 font-medium">
                {skill.percentage}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
