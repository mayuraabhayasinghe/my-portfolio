import React from "react";
import { ContactSectionData } from "../../data";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="pt-14 pb-10 px-6 max-w-5xl mx-auto bg-slate-900/60 backdrop-blur-sm mt-10"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl text-center font-bold text-white mb-2">
          {ContactSectionData.title}
        </h2>
        <p className="text-gray-400 text-sm md:text-lg text-center mb-12 max-w-2xl mx-auto">
          {ContactSectionData.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col text-sm lg:text-base justify-center space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-full">
                <FiMail className="text-amber-300 text-xl" />
              </div>
              <div>
                <h3 className="text-white font-medium">Email</h3>
                <p className="text-gray-400">{ContactSectionData.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-full">
                <FiPhone className="text-amber-300 text-xl" />
              </div>
              <div>
                <h3 className="text-white font-medium">Phone</h3>
                <p className="text-gray-400">{ContactSectionData.phone}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-full">
                <FiMapPin className="text-amber-300 text-xl" />
              </div>
              <div>
                <h3 className="text-white font-medium">Location</h3>
                <p className="text-gray-400">{ContactSectionData.location}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-white font-medium mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a
                  href={ContactSectionData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all"
                >
                  <FiGithub className="text-white text-xl" />
                </a>
                <a
                  href={ContactSectionData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all"
                >
                  <FiLinkedin className="text-white text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
