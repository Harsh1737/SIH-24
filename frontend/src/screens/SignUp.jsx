/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import "../index.css";

const SignUp = () => {
  const [userType, setUserType] = useState("employer");

  const [work, setWork] = useState(
    userType === "employer" ? "Looking for Work?" : "Here to hire?"
  );
  const [talent, setTalent] = useState(
    userType === "employer" ? "Apply as talent" : "Join as Client"
  );
  const [title, setTitle] = useState(
    userType === "employer" ? "Sign up to hire talent" : "Sign up to find work"
  );
  const [emailLabel, setEmailLabel] = useState(
    userType === "employer" ? "Work email address" : "Personal email address"
  );
  const [checkboxLabel, setCheckboxLabel] = useState(
    userType === "employer"
      ? "Send me emails with tips on how to find talent that fits my needs."
      : "Send me emails with tips on how to get the best freelancing opportunities."
  );
  const [buttonLabel, setButtonLabel] = useState(
    userType === "employer" ? "Create my account" : "Create my account"
  );
  const [linkText, setLinkText] = useState(
    userType === "employer"
      ? "Already have an account?"
      : "Already have an account?"
  );
  const [linkHref, setLinkHref] = useState(userType === "employer" ? "#" : "#");

  const [showPassword, setShowPassword] = useState(false);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const countryRef = useRef();

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  const handleInputChange = (e) => {
    console.log(`${e.target.name}: ${e.target.value}`);
  };

  return (
    <>
      <div className="flex justify-between items-center p-5">
        <div className="flex-shrink-0">logo</div>
        <div className="flex space-x-4">
          <div>{work}</div>
          <div className="text-green-600 font-bold">
            <a href={linkHref}>{talent}</a>
          </div>
        </div>
      </div>

      <div className="my-4 flex justify-center items-center min-h-screen px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            {title}
          </h2>

          <button className="w-full flex items-center justify-center bg-blue-500 text-white font-medium rounded-full px-4 py-2 mb-4">
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/color/50/google-logo.png"
                alt="google-logo"
              />
            </div>
            Continue with Google
          </button>

          <div className="flex items-center justify-center mb-4 relative">
            <span className="text-gray-500 relative px-4 before:content-[''] before:absolute before:left-10 before:w-16 md:before:w-44 before:h-px before:bg-gray-300 before:top-1/2 before:-translate-y-1/2 after:content-[''] after:absolute after:right-10 after:w-16 md:after:w-44 after:h-px after:bg-gray-300 after:top-1/2 after:-translate-y-1/2">
              or
            </span>
          </div>

          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First name"
                ref={firstNameRef}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last name"
                ref={lastNameRef}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                {emailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={emailLabel}
                ref={emailRef}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div className="mb-4 relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password (8 or more characters)"
                ref={passwordRef}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
              {/* <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-10 mt-2 focus:outline-none"
              >
                {showPassword ? "H" : "S"}
              </button> */}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="country"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                ref={countryRef}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                required
              >
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Australia</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-gray-700">{checkboxLabel}</span>
              </label>
            </div>

            <div className="mb-6">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                  required
                />
                <span className="ml-2 text-gray-700">
                  Yes, I understand and agree to the
                  <a href="#" className="text-blue-600 underline">
                    Terms of Service
                  </a>
                  , including the
                  <a href="#" className="text-blue-600 underline">
                    User Agreement
                  </a>
                  and
                  <a href="#" className="text-blue-600 underline">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
              {buttonLabel}
            </button>
          </form>

          <div className="text-center mt-6">
            <p>
              {linkText}
              <a href={linkHref} className="text-blue-600 hover:underline">
                log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
