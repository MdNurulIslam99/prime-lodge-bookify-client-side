import React from "react";
import { NavLink } from "react-router";

const SignIn = () => {
  return (
    <div>
      <div className="flex justify-center items-center py-10 px-5 md:px-0 ">
        {/* <Helmet>
          <title>SignIn-Form</title>
        </Helmet> */}
        <div className="w-full max-w-md p-4 rounded-xl shadow-2xl sm:p-8 bg-black text-white">
          <h2 className="mb-6 mt-3 text-3xl font-semibold text-center">
            Login to your account
          </h2>

          <form
            //  onSubmit={handleSignIn}
            action=""
            className="space-y-8"
          >
            <div className="space-y-4">
              {/* email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-base font-semibold"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300
                 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  required
                />
              </div>
              {/* Password */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-base font-semibold">
                    Password
                  </label>
                  <NavLink
                    to="/auth/forgetPassword"
                    className="text-xs hover:underline"
                  >
                    Forgot password?
                  </NavLink>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300
                 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  required
                />
              </div>
            </div>

            <div className="flex items-center w-full my-4">
              <hr className="w-full dark:text-gray-600" />
              <p className="px-3 dark:text-gray-600">OR</p>
              <hr className="w-full dark:text-gray-600" />
            </div>

            <div className="my-6 space-y-4">
              <button
                // onClick={handleGoogleSignin}
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p className="text-base font-semibold">Login with Google</p>
              </button>
            </div>

            {/* {error && (
              <p className="text-red-500 text-sm font-semibold">{error}</p>
            )} */}
            <button
              type="submit"
              className="w-full px-8 py-3 text-lg bg-violet-600 font-semibold rounded-md text-gray-50"
            >
              Sign in
            </button>

            <p className="text-base text-center">
              Don't have account ?
              <NavLink
                to="/auth/signup"
                className="focus:underline hover:underline"
              >
                <span className="text-blue-400 text-base font-medium">
                  {" "}
                  Sign up here
                </span>
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
