import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";
import { ContactSectionData } from "../data";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle navigation with scrolling to sections
  const handleNavigation = (path, sectionId) => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-t from-black/70 to-transparent backdrop-blur-sm py-10 mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <Link to="/" className="block mb-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 inline-block text-transparent bg-clip-text">
                Mayura Abhayasinghe
              </h3>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              A passionate software developer creating intuitive and efficient
              solutions for the digital world.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <motion.a
                whileHover={{ scale: 1.2, color: "#fff" }}
                href={ContactSectionData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#fff" }}
                href={ContactSectionData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiLinkedin size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => handleNavigation("/")}
                className="text-left text-gray-400 hover:text-white transition-colors text-sm"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("/", "about")}
                className="text-left text-gray-400 hover:text-white transition-colors text-sm"
              >
                About
              </button>
              <button
                onClick={() => handleNavigation("/projects")}
                className="text-left text-gray-400 hover:text-white transition-colors text-sm"
              >
                Projects
              </button>
              <button
                onClick={() => handleNavigation("/", "contact")}
                className="text-left text-gray-400 hover:text-white transition-colors text-sm"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>{ContactSectionData.email}</p>
              <p>{ContactSectionData.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            © {currentYear} Mayura Abhayasinghe. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              aria-label="Scroll to top"
            >
              <FiArrowUp className="text-white" size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
