import React from "react";
import ProjectsData from "../Components/Projects/Project-Data";
import ProjectCard from "../Components/Projects/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1 * index,
        ease: [0.215, 0.61, 0.355, 1], // Cubic bezier for smooth easing
      },
    }),
  };

  return (
    <motion.div
      className="min-h-screen py-20 px-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="max-w-5xl mt-5 mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl text-center font-bold text-white mb-3"
        >
          Projects
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-gray-400 text-center mb-12 max-w-xl mx-auto"
        >
          A collection of projects I've worked on. Each project demonstrates
          different skills and technologies.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid gap-12">
          {ProjectsData.length > 0 ? (
            ProjectsData.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={projectCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))
          ) : (
            <motion.div
              variants={fadeIn}
              className="text-center text-gray-400 py-12"
            >
              No projects available at the moment.
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Project Card Component

export default Projects;
