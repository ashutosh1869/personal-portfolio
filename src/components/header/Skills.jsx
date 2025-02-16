import React from "react";

const Skills = () => {
  const skillsData = [
    
    {
      id: 1,
      title: "React.js",
      description: "Skilled in creating dynamic user interfaces and single-page applications using React.js.",
    }
    ,
    {
      id: 2,
      title: "JavaScript",
      description: "Experienced in writing clean and efficient JavaScript code for interactive web applications.",
    },
    ,
    {
      id: 3,
      title: "UI/UX Design",
      description: "Skilled in creating user-friendly and visually appealing designs for web applications.",
    },
    {
      id: 4,
      title: "C++",
      description: "Proficient in writing optimized C++ code for competitive programming and problem-solving.",
    },
    ,
    
  ];

  return (
    <div className="pt-20 pb-10 p-8  h-fit " id="skills">
      <h1 className="text-4xl font-bold text-center mb-8">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-auto max-w-screen-lg">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className=" rounded-lg shadow-md p-6 transform transition-transform hover:shadow-yellow-600"
          >
            <h2 className="text-2xl font-semibold mb-2">{skill.title}</h2>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;