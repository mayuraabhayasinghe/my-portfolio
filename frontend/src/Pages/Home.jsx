import React, { useState, useEffect } from "react";
import profileImg from "../assets/images/profile-image.png";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowDown,
  FiDownload,
} from "react-icons/fi";
import { HomeSectionData, AboutSectionData, ContactSectionData } from "../data";
import { trackDownload } from "../utils/analytics";
import toast, { Toaster } from "react-hot-toast";
import Contact from "../Components/Contact/Contact";
import About from "../Components/About/About";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const [isDownloading, setIsDownloading] = useState(false);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Character-by-character animation
  const letterAnimation = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: custom * 0.06,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    }),
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

  // Check if the browser supports the download attribute
  const supportsDownloadAttribute = () => {
    const a = document.createElement("a");
    return typeof a.download !== "undefined";
  };

  const handleDownloadCV = (e) => {
    setIsDownloading(true);

    // If the browser doesn't support download attribute, open in new tab instead
    if (!supportsDownloadAttribute()) {
      e.preventDefault();
      window.open(HomeSectionData.resumePath, "_blank");
      trackDownload("Mayura_Abhayasinghe_CV.pdf");
      toast.success("Opening CV in new tab", {
        icon: "📄",
        duration: 3000,
      });
      setTimeout(() => setIsDownloading(false), 1000);
      return;
    }

    // Create a link to test if the file exists
    const testLink = document.createElement("a");
    testLink.href = HomeSectionData.resumePath;

    // Fetch to check if the file exists
    fetch(testLink.href)
      .then((response) => {
        if (!response.ok) {
          // If file doesn't exist, show an alternative way to contact for CV
          toast.error(
            "CV file is not available. Please contact me via email for the latest CV.",
            {
              duration: 5000,
            }
          );
          e.preventDefault(); // Prevent the default download behavior
        } else {
          // If successful, track the download event and show success toast
          trackDownload("Mayura_Abhayasinghe_CV.pdf");
          toast.success("Download started!", {
            icon: "📥",
            duration: 3000,
          });
        }
      })
      .catch((error) => {
        console.error("Error checking CV file:", error);
        toast.error(
          "Unable to download CV. Please contact me via email for the latest CV.",
          {
            duration: 5000,
          }
        );
        e.preventDefault(); // Prevent the default download behavior
      })
      .finally(() => {
        // Reset the downloading state after a delay to show the downloading text briefly
        setTimeout(() => {
          setIsDownloading(false);
        }, 2000);
      });
  };

  return (
    <div className="min-h-screen">
      {/* Toast notification container */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Hero Section */}
      <section className="relative min-h-[92vh] sm:h-screen flex flex-col justify-center items-center px-2 lg:px-0 pt-16 sm:pt-0 mb-10 md:mb-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl w-full mx-auto flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          {/* Left Content - Text */}
          <motion.div
            className="order-2 lg:order-1 space-y-4 sm:space-y-6 text-center md:text-left mt-6 md:mt-0"
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-gray-400 text-lg sm:text-xl md:text-2xl font-medium"
            >
              Hello, I'm
            </motion.h2>
            <motion.h1
              className="text-2xl md:text-4xl xl:text-6xl font-bold bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text leading-tight py-2 flex flex-wrap justify-center md:justify-start"
              initial="hidden"
              animate="visible"
            >
              {Array.from("Mayura Abhayasinghe").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  custom={index}
                  className="inline-block"
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-sm md:text-lg lg:text-xl max-w-xl leading-relaxed"
            >
              {HomeSectionData.bio}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap sm:flex-nowrap justify-center md:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/projects")}
                className="text-sm md:text-base px-4 sm:px-6 py-2 sm:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition duration-300"
              >
                View My Work
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={HomeSectionData.resumePath}
                download="Mayura_Abhayasinghe_CV.pdf"
                onClick={handleDownloadCV}
                className={`text-sm md:text-base px-4 sm:px-6 py-2 sm:py-3 bg-amber-300 hover:bg-amber-400 border hover:border-white text-black rounded-full transition duration-300 inline-flex items-center justify-center gap-2 ${
                  isDownloading ? "opacity-80 pointer-events-none" : ""
                }`}
              >
                {isDownloading ? (
                  "Downloading..."
                ) : (
                  <>
                    Download CV <FiDownload size={16} />
                  </>
                )}
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={fadeInUp}
              className="flex justify-center md:justify-start gap-4 sm:gap-6 pt-4 sm:pt-6"
            >
              <motion.a
                whileHover={{ scale: 1.2, color: "#fff" }}
                href={ContactSectionData.socialLinks.github}
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FiGithub size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#fff" }}
                href={ContactSectionData.socialLinks.linkedin}
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FiLinkedin size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#fff" }}
                href="#contact"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FiMail size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end md:mb-0 mt-16 md:mt-0"
            variants={fadeInUp}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Profile Image with Glow Effect */}
              <div className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/10 relative z-10">
                <img
                  src={profileImg}
                  alt="Mayura Abhayasinghe"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow Effect */}
              <motion.div
                animate={{
                  scale: [0.7, 0.8, 0.7],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl -z-10 scale-75 opacity-70"
              ></motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-dashed border-white/20 rounded-full animate-[spin_20s_linear_infinite] z-0"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">
              Scroll Down
            </span>
            <FiArrowDown className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </motion.div>
      </section>

      {/* About Section Preview */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <About />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default Home;
