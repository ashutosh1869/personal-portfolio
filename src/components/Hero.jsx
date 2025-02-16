import React, { useState, useEffect } from "react";


const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Ashutosh...";
  const typingSpeed = 80; // Typing speed in milliseconds

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const [dynamicText, setDynamicText] = useState("Web Developer");
  const roles = ["Web Developer", "UI/UX Designer", "React developer", "Frontend Engineer"];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % roles.length;
      setDynamicText(roles[index]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8  min-h-screen flex items-center justify-center">
      <div className="text-center">
        <img
          src="/images/ashu.jpg" // Replace with the actual profile image path
          alt="Profile"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto shadow-md hover:shadow-yellow-600 mb-6 border-4 border-yellow-600 transition"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi! I am <span className="text-yellow-600 font-serif">{displayedText}</span>
        </h1>
        <div className="w-fit shadow-yellow-600 shadow-sm rounded-lg mx-auto border-1 border-yellow-600">
        <h2 className="text-2xl md:text-3xl w-fit p-2 font-medium mb-6">{dynamicText}</h2>

        </div>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          I specialize in building modern, responsive web applications with a focus on great user experiences.
        </p>
        <a
  href="https://drive.google.com/uc?export=download&id=1GhOP578OvxIqzPh5byGA1qGlQHPQmBGB
" // Updated link for direct download
  className=" text-yellow-600 font-bold py-2 px-6 rounded-lg shadow-sm hover:shadow-yellow-600 transition"
  download
>
  Download CV
</a>

      </div>
    </div>
  );
};

export default Hero;
