import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await emailjs.send(
        "service_cea126q", // Service ID
        "template_p8aurhv", // Template ID
        formData,
        "BbmX4lHJE2FLAx3yq" // Public Key
      );

      console.log("Email sent successfully:", response);
      alert("Email sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 bg-blue-900 min-h-screen flex items-center justify-center py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="text-white text-lg font-medium mb-2">\\ Get In Touch \\</div>
          <h1 className="text-white text-5xl font-bold">Hey! Let's Talk</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
          {/* Left Form Section */}
          <div className="bg-white rounded-lg p-8 flex-1">
            <form onSubmit={sendEmail}>
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#D9D9D9] text-black p-4 rounded-lg placeholder-[#0b1b42]"
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
                  className="w-full bg-[#D9D9D9] p-4 rounded-lg placeholder-[#0b1b42]"
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
                  className="w-full bg-[#D9D9D9] p-4 rounded-lg placeholder-[#0b1b42]"
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#D9D9D9] p-4 rounded-lg h-32 resize-none placeholder-[#0b1b42]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-900 text-white font-medium py-3 px-8 rounded-lg hover:bg-[#e0354f] transition-colors"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Now"}
              </button>
            </form>
          </div>

          {/* Right Information Section */}
          <div className="bg-white rounded-lg p-8 lg:w-5/12">
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <FaPhone className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-blue-600 text-xl font-bold mb-1">Call Anytime</h3>
                  <p className="text-gray-700">+91 98776 48774</p>
                  <p className="text-gray-700">+91 78891 30942</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-blue-600  text-xl font-bold mb-1">Send Email</h3>
                  <p className="text-gray-700">innosphere84@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
              </div>
            </div>

            <div>
              <h3 className="text-[#0b1b42] text-xl font-bold mb-4">Follow us</h3>
              <div className="flex gap-3">
                <a href="#" className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white hover:bg-[#e0354f] transition-colors">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white hover:bg-[#e0354f] transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white hover:bg-[#e0354f] transition-colors">
                  <FaFacebookF className="text-xl" />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white hover:bg-[#e0354f] transition-colors">
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
