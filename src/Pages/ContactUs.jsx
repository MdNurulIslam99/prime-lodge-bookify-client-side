import React from "react";
import { Helmet } from "react-helmet";
import { FaPhone } from "react-icons/fa";
// import { Helmet } from "react-helmet-async";
import { FaAddressCard } from "react-icons/fa6";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";

import { Link } from "react-router";
const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>ContactUs</title>
      </Helmet>
      <div className="bg-gray-50 text-gray-800">
        <header className="bg-indigo-300 text-white p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">PrimeLodgeBookify</h1>
            <nav>
              <Link to="/" className="hover:underline text-2xl font-bold ">
                Home
              </Link>
            </nav>
          </div>
        </header>
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg p-6 shadow-2xl mb-10">
            <h1 className="text-3xl font-bold text-indigo-700 mb-4">
              Contact Us
            </h1>
            <p className="mb-6 text-lg">
              Have questions, feedback, or need assistance with your booking?
              We're here to help! Whether you're searching for the perfect stay,
              managing a reservation, or need support with your account, feel
              free to contact us. Our team is committed to making your hotel
              booking experience seamless, secure, and stress-free.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-2xl mb-10 space-y-3">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600 ">
              Our Contact Information
            </h2>
            <p className="mb-2 flex gap-3">
              <FaAddressCard size={25} /> <strong>Address:</strong> 123 Box
              Lane, Package City, 45678
            </p>
            <p className="mb-2 flex gap-3">
              <MdAttachEmail size={20} /> <strong>Email:</strong>
              <a
                href="mailto:support@primeLodgebookify.com"
                className="text-indigo-600 underline"
              >
                support@primeLodgebookify.com
              </a>
            </p>

            <p className=" flex gap-3 ">
              <IoChatboxEllipsesSharp size={20} />
              <strong>Live Chat:</strong> Available 9 AM – 6 PM (Mon–Fri)
            </p>
            <p classNameName="flex gap-3">
              <span className="mb-">
                <FaPhone size={20} />
              </span>
              <span className="relative -top-5 left-8  ">
                <strong>Phone:</strong> +1 (234) 567-8910
              </span>
            </p>
          </div>

          <form className="bg-white p-6 rounded-lg shadow-2xl space-y-4">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              Send Us a Message
            </h2>
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Type your message here..."
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
