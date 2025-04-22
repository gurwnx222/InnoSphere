import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

import contact from "../Images/contact.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const response = await emailjs.send(
        "service_cea126q", // Service ID
        "template_p8aurhv", // Template ID
        formData,
        "BbmX4lHJE2FLAx3yq" // Public Key
      );

      console.log("Email sent successfully:", response);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-900 min-h-screen flex items-center justify-center py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="text-white text-lg font-medium mb-2">
            \\ Get In Touch \\
          </div>
          <h1 className="text-white text-5xl font-bold">Hey! Let's Talk</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          {/* Left Form Section */}
          <div className="bg-white p-8 flex-1">
            {success && (
              <div className="mb-6 bg-green-100 border-l-4 border-green-500 p-4 rounded">
                <p className="text-green-700">
                  Your message has been sent successfully! We'll get back to you
                  soon.
                </p>
              </div>
            )}

            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Contact Us
            </h2>

            <form onSubmit={sendEmail}>
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F5] text-black p-4 rounded-lg placeholder-gray-500 border border-gray-200 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F5] p-4 rounded-lg placeholder-gray-500 border border-gray-200 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F5] p-4 rounded-lg placeholder-gray-500 border border-gray-200 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F5] p-4 rounded-lg h-32 resize-none placeholder-gray-500 border border-gray-200 focus:border-blue-500 focus:outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors w-full md:w-auto"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Now"}
              </button>
            </form>
          </div>

          {/* Right Image Section - Only visible on desktop */}
          <div className="hidden lg:block w-full lg:w-1/2 relative">
            <div className=""></div>
            <img
              src={contact}
              alt="Contact Us"
              className="w-full h-full object-cover 33"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
