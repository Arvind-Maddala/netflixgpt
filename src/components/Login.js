import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="container">
      <Header />
      <div className="absolute">
        <div>
          <img
            alt=""
            aria-hidden="true"
            data-uia="nmhp-card-hero+background+image"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/9a12affd-2dc5-4854-90f7-04e28b66f417/US-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            className="h-screen object-cover w-screen"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <p
            className={`absolute text-center ${
              isSignInForm ? "bottom-1" : "bottom-8"
            } left-0 right-0 mx-auto z-100 text-white shadow-2xl`}
          >
            {" "}
            Made with ❤️ by Aravind Maddala
          </p>
        </div>
      </div>
      <form className=" w-2/6 absolute mx-auto right-0 left-0 my-24 p-12 bg-black text-white bg-opacity-70">
        <h2 className="text-3xl mb-5 font-bold">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h2>
        {isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full rounded-sm bg-transparent border border-gray-300"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full rounded-sm bg-transparent border border-gray-300"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-sm bg-transparent border border-gray-300"
        />

        <button className="p-4 bg-red-700 w-full my-4 font-semibold rounded-sm text-center">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <p className="font-semibold">
              {" "}
              <span className="text-zinc-400">New to Netflix?</span> Sign up
              Now.
            </p>
          ) : (
            <p className="font-semibold">
              {" "}
              <span className="text-zinc-500 mr-1">
                Already registered?{" "}
              </span>{" "}
              Sign in Now.
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
