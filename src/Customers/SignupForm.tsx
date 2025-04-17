"use client";
import * as React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { FormInput } from "./components/FormInput";
import { PasswordInput } from "./components/PasswordInput";
import { SocialLogin } from "./components/SocialLogin";
import './signupform.css'; // Import the custom CSS

export function SignupForm() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate("/verification-page1"); // Redirect to the specific verification page
  };

  return (
    <section className="relative flex-1 px-16 py-20 max-md:px-5 max-md:py-10 max-sm:px-4 max-sm:py-8">
      <nav className="flex absolute gap-3 items-center cursor-pointer right-[46px] top-[38px] max-sm:right-4 max-sm:top-5">
        <button className="flex items-center gap-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 9.5L8.46875 2.9375C8.75 2.65625 9.1875 2.65625 9.46875 2.9375C9.75 3.21875 9.75 3.65625 9.46875 3.9375L4.21875 9.28125H17.5C17.875 9.28125 18.1875 9.59375 18.1875 9.96875C18.1875 10.3438 17.875 10.6875 17.5 10.6875H4.15625L9.46875 16.0938C9.75 16.375 9.75 16.8125 9.46875 17.0938C9.34375 17.2188 9.15625 17.2812 8.96875 17.2812C8.78125 17.2812 8.59375 17.2188 8.46875 17.0625L2 10.5C1.71875 10.2187 1.71875 9.78125 2 9.5Z"
              fill="#111928"
            />
          </svg>
          <span className="text-base leading-7 text-gray-900">Back</span>
        </button>
      </nav>

      <div className="px-3.5 py-1.5 text-sm font-medium leading-5 rounded-3xl text-gray-950 w-fit max-sm:text-xs">
        Planning Events/Shopping for Performances
      </div>

      <div className="mt-12 max-w-[388px] max-md:mx-auto max-md:my-0 max-sm:max-w-full">
        <header className="mb-8">
          <h2 className="mb-5 text-4xl font-bold leading-[52.2px] text-gray-950 max-sm:text-3xl">
            Join STAR GIGS –
          </h2>
          <p className="text-xl leading-8 text-neutral-600 max-sm:text-base">
            Plan events & book top talent effortlessly.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <FormInput
            label="Username"
            type="text"
            placeholder="Enter your username"
          />
          <FormInput
            label="Email"
            type="email"
            placeholder="Example@email.com"
          />
          <PasswordInput label="Password" placeholder="At least 8 characters" />
          <PasswordInput
            label="Confirm Password"
            placeholder="Repeat password"
          />
          <button
            type="submit"
            className="custom-signup-button px-0 py-4 w-full text-base leading-7 text-white bg-black rounded-xl cursor-pointer border-[none]"
          >
            Sign up
          </button>
        </form>

        <SocialLogin />

        <footer className="mt-6 text-lg leading-7 text-center text-slate-700">
          <span>Already have an account? </span>
          <a href="#" className="text-orange-600 no-underline">
            Log In
          </a>
        </footer>
      </div>
    </section>
  );
}

