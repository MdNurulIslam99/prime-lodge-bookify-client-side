import React from "react";
import { Link } from "react-router";

const FaqSection = () => {
  return (
    <div className="bg-gray-200  rounded-2xl">
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
      <div className="py-5 max-w-screen-2xl mx-auto px-10">
        <div>
          <h1 className="text-3xl font-bold text-center py-5">FAQ SECTION</h1>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300 ">
          <input type="radio" name="hotel-accordion" defaultChecked />
          <div className="collapse-title font-bold text-lg">
            How do I create an account?
          </div>
          <div className="collapse-content text-base font-semibold">
            <span className="text-lg font-bold">Answer : </span> Click the "Sign
            Up" button at the top right of the homepage and follow the steps to
            register using your email or social login.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="hotel-accordion" />
          <div className="collapse-title font-bold text-lg">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-base font-semibold">
            <span className="text-lg font-bold">Answer : </span> Go to the login
            page and click on "Forgot Password." Follow the instructions sent to
            your registered email to reset your password.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="hotel-accordion" />
          <div className="collapse-title font-bold text-lg">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-base font-semibold">
            <span className="text-lg font-bold">Answer : </span> Navigate to
            your account dashboard, click on "My Profile," and select "Edit" to
            update your personal details or preferences.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="hotel-accordion" />
          <div className="collapse-title font-bold text-lg">
            How can I cancel or modify my booking?
          </div>
          <div className="collapse-content text-base font-semibold">
            <span className="text-lg font-bold">Answer : </span> Go to "My
            Bookings" in your account, select the reservation you want to
            change, and follow the prompts to cancel or modify your booking,
            based on the hotel's cancellation policy.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="hotel-accordion" />
          <div className="collapse-title font-bold text-lg">
            Will I receive a confirmation after booking?
          </div>
          <div className="collapse-content text-base font-semibold">
            <span className="text-lg font-bold">Answer : </span> Yes, a
            confirmation email with your booking details will be sent
            immediately after a successful reservation. You can also view it in
            your account under "My Bookings."
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="hotel-accordion" />
          <div className="collapse-title font-bold text-lg">
            Are there any additional charges or hidden fees?
          </div>
          <div className="collapse-content text-base font-semibold ">
            <span className="text-lg font-bold">Answer : </span> No hidden fees!
            All charges are clearly displayed before you confirm your booking.
            Some hotels may charge additional taxes or service fees at check-in,
            which will be noted in the listing.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
