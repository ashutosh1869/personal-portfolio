import React from "react";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Blog App",
      image: "src/images/projects/blogApp.png", // Replace with actual image path
      description: "A blog app built with React and Appwrite, enabling users to sign up, add, edit, and delete posts with ease.",
      link: "https://blog-app-1869.vercel.app/",
    },
    {
      id: 2,
      title: "To-Do List",
      image: "src/images/projects/Todo.png", // Replace with actual image path
      description: "A to-do list app built with React, enabling users to add, edit, and delete tasks with ease.",
      link: "https://to-do-five-dun.vercel.app/",
    },
    {
      id: 3,
      title: "Currency-Converter",
      image: "src/images/projects/currency.png", // Replace with actual image path
      description: "A currency converter app built with React, enabling users to convert between different currencies.",
      link: "https://currency-converter-chi-three.vercel.app/",
    },
  ];

  return (
    <div className="p-4 pb-10 pt-20 bg-zinc-800 h-fit" id="projects">
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-screen-lg">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-zinc-900 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-yellow-600"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 opacity-85 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 rounded-sm mb-5 font-bold p-2 shadow-sm shadow-yellow-600 hover:text-yellow-600"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;