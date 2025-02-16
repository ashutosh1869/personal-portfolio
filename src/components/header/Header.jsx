import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {toggleTheme} from "../../store/themeSlice";

export default function Header() {
  const isLightTheme = useSelector((state) => state.theme.theme === "light");
  const dispatch = useDispatch();

  return (
    <header className={`shadow sticky ${isLightTheme ? 'bg-zinc-300' : 'bg-zinc-800'} w-full z-50 top-0`}>
      <nav className="flex justify-center align-middle border-b-yellow-600 py-2.5">
        <div className="flex justify-between items-center w-full mx-auto max-w-screen-xl">
          {/* Logo Section */}
          <a href="#">
            <div className={`font-bold text-2xl font-lavishly ${isLightTheme ? 'text-gray-800' : 'text-gray-500'} ml-1`}>
              <span className={`text-3xl text-yellow-600 pr-1`}>A</span>
              shutosh
            </div>
          </a>

          {/* Navigation Links */}
          <div className="flex items-center">
            <ul className="flex space-x-6 font-medium">
              <li>
                <a
                  href="#"
                  className={`block py-1 px-3 duration-200 ${isLightTheme ? 'text-gray-800' : 'text-gray-500'} hover:text-yellow-600`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`block py-1 px-3 duration-200 ${isLightTheme ? 'text-gray-800' : 'text-gray-500'} hover:text-yellow-600`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`block py-1 px-3 duration-200 ${isLightTheme ? 'text-gray-800' : 'text-gray-500'} hover:text-yellow-600`}
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>
          <div className="flex w-auto">
            {/* adding a btn of theme switch */}
            <button
              className={`bg-zinc-900 mr-3 text-yellow-600 font-bold py-2 px-3 rounded-lg shadow-sm hover:shadow-yellow-600 transition`}
              onClick={() => dispatch(toggleTheme())}
            >
              {/* {isLightTheme ? "Dark" : "Light"} */}
              {isLightTheme ? "🌙" : "☀️"}
            </button>

            <a
              href="#contact"
              className="bg-zinc-900 text-yellow-600 font-bold py-2 px-6 rounded-lg shadow-sm hover:shadow-yellow-600 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>
      <hr className="border-yellow-600" />
    </header>
  );
}
