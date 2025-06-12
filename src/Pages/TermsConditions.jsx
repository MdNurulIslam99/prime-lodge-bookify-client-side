import React from "react";
import { Link } from "react-router";

const TermsConditions = () => {
  return (
    <div className="bg-gray-100 text-gray-800 ">
      <div>
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
      </div>
      <div className="max-w-4xl mx-auto p-6 bg-gray-200 shadow-2xl mt-10 mb-10 rounded-2xl ">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Terms & Conditions
        </h1>

        <p className="mb-6 text-lg">
          Welcome to <strong>PrimeLodgeBookify</strong>, a modern hotel booking
          platform designed to help users discover and reserve the perfect stays
          with ease. By accessing or using our website and services, you agree
          to abide by the following Terms and Conditions. Please read them
          carefully before proceeding.
        </p>

        <div className="space-y-5">
          <div>
            <h2 className="text-xl font-semibold"> 1. User Eligibility</h2>
            <p>
              Users must be at least 18 years old to use the platform. They must
              provide accurate and truthful information when creating an
              account.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              {" "}
              2. Account Responsibility
            </h2>
            <p>
              Users are responsible for maintaining the confidentiality of their
              login credentials and for all activities that occur under their
              account.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold"> 3. Content Guidelines</h2>
            <p>
              Users must not upload or share false, offensive, discriminatory,
              or unlawful content. All reviews, profiles, and listings must
              reflect real experiences and lawful intentions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold"> 4. Property Listings</h2>
            <p>
              All property listings must be legitimate. Only authorized property
              owners or managers may post accommodation listings on the
              platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold"> 5. User Conduct</h2>
            <p>
              Users must interact respectfully with others. Any form of
              harassment, abuse, or fraudulent behavior will result in account
              suspension or termination.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold"> 6. Privacy Policy</h2>
            <p>
              User data is handled according to our Privacy Policy. We strongly
              advise against sharing sensitive personal information in public
              areas of the platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold"> 7. Prohibited Uses</h2>
            <p>
              Users may not use the platform for illegal activities, including
              fraud, solicitation, posting malicious content, or spreading
              malware.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              {" "}
              8. Termination of Service
            </h2>
            <p>
              We reserve the right to suspend or remove accounts that violate
              these Terms or misuse the platform in any way.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold"> 9. Changes to Terms</h2>
            <p>
              We may revise these Terms and Conditions at any time. Continued
              use of the platform after changes are made constitutes acceptance
              of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold"> 10. Liability Disclaimer</h2>
            <p>
              Our platform serves solely as a booking facilitator. We are not
              responsible for the conduct of hosts or guests, or for any issues
              that arise during or after a stay.
            </p>
          </div>
        </div>

        <footer className="mt-10 text-center text-sm text-gray-500">
          &copy; 2025 PrimeLodgeBookify. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default TermsConditions;
