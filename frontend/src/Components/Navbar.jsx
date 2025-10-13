import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoImage from "../assets/images/logo-1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle navigation with scrolling to sections
  const handleNavigation = (path, sectionId) => {
    setIsOpen(false); // Close mobile menu if open

    if (path === "/") {
      // If navigating to home page with a section
      if (location.pathname === "/") {
        // If already on home page, just scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If on another page, navigate to home then scroll
        navigate("/");
        // Need to wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      // For other pages without sections
      navigate(path);
    }
  };

  return (
    <nav className="fixed top-3 left-0 w-full z-50 ">
      <div className="max-w-5xl mx-2 lg:mx-auto flex items-center justify-between px-6 py-4 rounded-2xl shadow-md backdrop-blur-md bg-black/30">
        {/* Logo Section */}
        <div className="text-md font-bold tracking-wide">
          <button onClick={() => handleNavigation("/")}>
            <h3 className=" from-gray-400 via-gray-200 to-gray-400 bg-gradient-to-r bg-clip-text text-transparent">
              PORTFOLIO
            </h3>
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden text-sm md:flex space-x-8 text-gray-400 font-medium">
          <li>
            <button
              onClick={() => handleNavigation("/projects")}
              className="hover:text-gray-500 transition bg-transparent"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("/", "about")}
              className="hover:text-gray-500 transition bg-transparent"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("/", "contact")}
              className="hover:text-gray-500 transition bg-transparent"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-white text-xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 mx-2 py-5 rounded-b-2xl rounded-t-2xl bg-black/30 backdrop-blur-lg">
          <ul className="flex justify-center text-sm gap-7 text-gray-400 font-medium">
            <li>
              <button
                onClick={() => handleNavigation("/projects")}
                className="hover:text-gray-500 transition bg-transparent"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/", "about")}
                className="hover:text-gray-500 transition bg-transparent"
              >
                About
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNavigation("/", "contact")}
                className="hover:text-gray-500 transition bg-transparent"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
