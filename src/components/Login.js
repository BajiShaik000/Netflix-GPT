import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInFrom, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInFrom);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo-img"
        />
      </div>
      <form className=" w-3/12 absolute p-8 rounded-lg bg-opacity-80 bg-black my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInFrom && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-800"
        />
        <button className="p-3 my-5 bg-red-700 w-full rounded-lg">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-3 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInFrom
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
