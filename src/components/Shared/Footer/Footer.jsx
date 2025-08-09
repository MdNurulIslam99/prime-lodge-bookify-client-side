import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CHANGED: Force equal column widths and spacing */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            {/* Logo & About */}
            <div className="flex flex-col items-center md:items-start space-y-3">
              <div className="flex flex-col md:flex-row md:justify-start justify-center items-center gap-3">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://i.ibb.co/fzZSrP6Q/images.jpg"
                  alt="logo"
                />
                <h2 className="text-2xl font-bold">
                  <span className="text-blue-300">PrimeLodge</span>
                  <span className="text-emerald-300">Bookify</span>
                </h2>
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                "Experience smarter, more seamless hotel booking with our modern
                platform—designed for today’s travelers to easily reserve
                hotels, resorts, and boutique stays worldwide."
              </p>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/branding"
                    className="hover:text-indigo-400 transition"
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    to="/design"
                    className="hover:text-indigo-400 transition"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marketing"
                    className="hover:text-indigo-400 transition"
                  >
                    Marketing
                  </Link>
                </li>
                <li>
                  <a href="/event" className="hover:text-indigo-400 transition">
                    Event Management
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/termsCondition"
                    className="hover:text-indigo-400 transition"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacyPolicy"
                    className="hover:text-indigo-400 transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-indigo-400 transition"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href="/faqSection"
                    className="hover:text-indigo-400 transition"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Follow Us</h3>
              <ul className="flex justify-center md:justify-start gap-6 py-3">
                <li>
                  <NavLink
                    className="text-gray-200"
                    to="https://www.facebook.com/"
                    target="_blank"
                  >
                    <FaFacebook size={35} />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-200"
                    to="https://github.com/MdNurulIslam99"
                    target="_blank"
                  >
                    <FaGithub size={35} />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-200"
                    to="https://x.com/"
                    target="_blank"
                  >
                    <FaXTwitter size={35} />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-200"
                    to="https://www.linkedin.com/"
                    target="_blank"
                  >
                    <FaLinkedin size={35} />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-8 border-gray-700" />
          <p className="text-center text-gray-500 text-base">
            &copy; 2025 PrimeLodgeBookify Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
