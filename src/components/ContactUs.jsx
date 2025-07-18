import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import ScrollToTopButton from "./ScrollToTopButton";

const ContactUs = () => {
  const isDark = useSelector((state) => state.darkMode);

  const bgClass = isDark ? "bg-[#101019] text-white" : "bg-blue-50 text-[#101019]";
  const cardBgClass = isDark ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700";

  return (
    <>
      <Navbar />
      <div className={`min-h-screen py-16 px-6 ${bgClass}`}>
        <div className="max-w-4xl mx-auto rounded-2xl shadow-xl p-8 space-y-10 ${cardBgClass}">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-blue-500">Get in Touch</h1>
            <p className="mt-2 text-lg italic text-blue-400">Let the time flow—together.</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-5 text-md md:text-lg">
            <p>
              Have questions about your order, our collections, or a custom timepiece? Our team is here to help.
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@timeflowwatches.com" className="text-blue-400 underline">
                support@timeflowwatches.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919876543210" className="text-blue-400 underline">
                +91 98765 43210
              </a>
            </p>
            <p>
              <strong>Showroom & Office:</strong><br />
              Timeflow Pvt. Ltd.<br />
              12th Floor, Horizon Tower<br />
              Mumbai, India – 400013
            </p>
            <p><strong>Support Hours:</strong> Monday – Friday, 10:00 AM – 6:00 PM IST</p>
          </div>

          {/* Contact Form (Static) */}
          <div className="pt-6 border-t border-blue-300">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Send us a message</h2>
            <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-md shadow-sm border border-gray-300 bg-white text-gray-800"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 rounded-md shadow-sm border border-gray-300 bg-white text-gray-800"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="md:col-span-2 p-3 rounded-md shadow-sm border border-gray-300 bg-white text-gray-800"
              />
              <button
                type="submit"
                className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default ContactUs;
