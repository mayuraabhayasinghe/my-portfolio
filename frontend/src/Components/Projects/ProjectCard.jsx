import React from "react";
import { FiGithub, FiExternalLink, FiLinkedin } from "react-icons/fi";
import defaultProjectImg from "../../assets/images/ProjectImages/default-project.jpeg";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  // Function to get the correct image source
  const getImageSource = () => {
    // If project has an image that starts with "/" (from public folder)
    if (project.image && project.image.startsWith("/")) {
      try {
        // For images in the public folder, we return the path as is
        return project.image;
      } catch {
        // If there's any error, use default
        return defaultProjectImg;
      }
    }
    // If no image or image doesn't start with "/", use default
    return defaultProjectImg;
  };

  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.src = defaultProjectImg;
  };

  // Animation variants for internal elements
  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.5 },
    },
  };

  const contentVariants = {
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  const techBadgeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: index * 0.05,
      },
    }),
  };

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all hover:bg-white/10"
      whileHover={{
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
        y: -5,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="w-full h-full"
          >
            <img
              src={getImageSource()}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>

          {/* Mobile-only Title overlay */}
          <div className="md:hidden absolute bottom-0 left-0 p-6 w-full">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold text-white mb-2"
            >
              {project.title}
            </motion.h3>
          </div>
        </div>

        {/* Project Content */}
        <motion.div
          className="p-6 flex flex-col justify-between"
          variants={contentVariants}
          whileHover="hover"
        >
          {/* Title - only on desktop */}
          <div className="hidden md:block mb-4">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-white mb-2"
            >
              {project.title}
            </motion.h3>
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-4">{project.description}</p>

          {/* Technologies */}
          <div className="mb-4">
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-gray-500 mb-2"
            >
              Technologies Used
            </motion.h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={techBadgeVariants}
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 text-xs bg-white/10 rounded-full text-gray-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-4">
            {project.links.github && (
              <motion.a
                whileHover={{ scale: 1.1, color: "#fff" }}
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
              >
                <FiGithub /> <span>GitHub</span>
              </motion.a>
            )}

            {project.links.live && (
              <motion.a
                whileHover={{ scale: 1.1, color: "#fcd34d" }}
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-amber-300 hover:text-amber-200 transition-colors"
              >
                <FiExternalLink /> <span>Live Demo</span>
              </motion.a>
            )}

            {project.links.linkedin && (
              <motion.a
                whileHover={{ scale: 1.1, color: "#fff" }}
                href={project.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
              >
                <FiLinkedin /> <span>LinkedIn</span>
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
