import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Helmet>
        <title>PrivacyPolicy</title>
      </Helmet>
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

      <main className="max-w-4xl mx-auto p-6 mt-6 bg-white shadow-2xl rounded-xl">
        <h2 className="text-4xl  text-center font-bold mb-4 text-indigo-700">
          Privacy Policy
        </h2>

        <p className="mb-4">
          At <strong>PrimeLodgeBookify</strong>, your privacy is important to
          us. We are committed to protecting your personal information and
          ensuring transparency in how we collect, use, store, and share your
          data. This Privacy Policy explains how we handle information such as
          your name, contact details, preferences, and location to enhance your
          booking experience and deliver personalized services. Your data is
          stored securely and is never shared with third parties without your
          consent. You retain full control over your information and can manage
          or delete your account at any time.
        </p>

        <section className="mb-6">
          <h3 className="text-lg font-bold text-indigo-600">
            Information Collection:
          </h3>
          <p>
            The website collects personal data such as name, email, location,
            gender, age, preferences, and photos when users register or create
            profiles.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold text-indigo-600">Use of Data:</h3>
          <p>
            Collected data is used to match users with potential roommates,
            improve user experience, provide customer support, and send
            notifications.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold text-indigo-600">Data Sharing:</h3>
          <p>
            User information is not shared with third parties without consent,
            except with trusted service providers or if legally required.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold text-indigo-600">
            Security Measures:
          </h3>
          <p>
            The platform uses encryption, secure servers, and other safeguards
            to protect user data from unauthorized access or breaches.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold text-indigo-600">User Control:</h3>
          <p>
            Users can edit or delete their profiles and data at any time. They
            can also opt out of non-essential communications.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold text-indigo-600">
            Cookies & Tracking:
          </h3>
          <p>
            Cookies are used to enhance site functionality and analyze user
            behavior, with the option for users to manage cookie preferences.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold text-indigo-600">
            Children’s Privacy:
          </h3>
          <p>
            The service is not intended for users under 18, and no data is
            knowingly collected from minors.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold text-indigo-600">Policy Updates:</h3>
          <p>
            The policy may be updated periodically, with users notified of
            significant changes.
          </p>
        </section>
      </main>

      <footer className="bg-gray-100 mt-10 p-4 text-center text-sm text-gray-600">
        &copy; 2025 [Roommate Finder]. All rights reserved.
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
