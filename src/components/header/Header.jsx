import React from "react";

export default function Header() {
  return (
    <header className="shadow sticky bg-zinc-800 w-full z-50 top-0">
      <nav className=" flex justify-center align-middle border-b-yellow-600  py-2.5">
        <div className="flex justify-between items-center w-full mx-auto max-w-screen-xl">
          {/* Logo Section */}
          <a href="#">
            <div className="font-bold text-lg text-gray-500 ml-2">
              <span className="text-2xl text-yellow-600 pr-1">A</span>
              shutosh</div>
          </a>

          {/* Navigation Links */}
          <div className="flex items-center">
            <ul className="flex space-x-6 font-medium">
              <li>
                <a href="#"
                  className={`block py-1 px-3 duration-200 text-gray-500 hover:text-yellow-600` }>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`block py-1 px-3 duration-200 text-gray-500 hover:text-yellow-600`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`block py-1 px-3 duration-200 text-gray-500 hover:text-yellow-600`}
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>
          <div className="flex w-auto">

            <a href="#contact"
              className="bg-zinc-900 text-yellow-600 font-bold py-2 px-6 rounded-lg shadow-sm hover:shadow-yellow-600 transition">
              Get in touch
            </a>
          </div>
        </div>

      </nav>
      <hr className="border-yellow-600" />
    </header>

  );
}
