import React, { useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const USER_ID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; // Your EmailJS public key
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID; // Your EmailJS service ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // Your EmailJS template ID

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    // Initialize EmailJS with the user ID from environment variables
    emailjs.init(USER_ID);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    // Send email using EmailJS
    // Using environment variables for service ID and template ID
    emailjs
      .send(
        SERVICE_ID, // EmailJS service ID from environment variables
        TEMPLATE_ID, // EmailJS template ID from environment variables
        templateParams
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setIsSubmitting(false);
        setSubmitStatus("success");

        // Show success toast notification
        toast.success("Message sent successfully!", {
          duration: 5000,
          position: "top-center",
          style: {
            background: "#10B981",
            color: "#fff",
            fontWeight: "bold",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#10B981",
          },
        });

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Clear internal success message after 3 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setIsSubmitting(false);

        // Show error toast notification
        toast.error("Failed to send message. Please try again.", {
          duration: 5000,
          position: "top-center",
          style: {
            background: "#EF4444",
            color: "#fff",
            fontWeight: "semibold",
          },
        });
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-sm lg:text-base">
      <div>
        <label htmlFor="name" className="block text-gray-400 mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-300 text-white"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-400 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-300 text-white"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-gray-400 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-300 text-white"
          placeholder="Project Inquiry"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-400 mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-300 text-white"
          placeholder="Hello, I would like to talk about..."
        ></textarea>
      </div>

      {/* Toast notification container */}
      <Toaster />

      {/* Keeping the inline success message as a fallback */}
      {submitStatus === "success" && (
        <div className="p-3 bg-green-500/20 border border-green-500 rounded-lg">
          <p className="text-green-300 text-sm">
            Your message has been sent successfully!
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-amber-300 hover:bg-amber-400 text-black font-medium rounded-lg transition-all ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message <FiSend className="ml-1" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
