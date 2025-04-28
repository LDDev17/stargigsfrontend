import { useNavigate } from "react-router-dom";
import * as React from "react";
import { InputField } from "./InputField";
import { SocialLoginButton } from "./SocialLoginButton";
import './signupform2.css'; // Import the custom CSS file

export function PerformerSignUpForm() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate("/verification-page2"); // Redirect to verification page 2
  };

  const handleSocialLogin = (provider: "google" | "facebook") => {
    // Handle social login
  };

  return (
    <section className="relative flex-1 px-12 pt-10 pb-20 right-[section] max-md:px-5 max-md:py-8 max-sm:p-5">
      <nav className="flex absolute gap-3 items-center cursor-pointer right-[116px] top-[38px]">
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

      <div className="mx-auto mt-12 mb-0 max-w-[388px] max-sm:mt-5">
        <div className="px-3.5 py-0 mb-12 text-sm font-medium leading-5 text-black rounded-3xl h-[30px]">
          Performer
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <header className="flex flex-col gap-5">
            <h2 className="text-4xl font-bold leading-[52.2px]">
              Join <span>STAR GIGS</span> –
            </h2>
            <p className="text-xl leading-8 text-neutral-600">
              Showcase your talent and get discovered.
            </p>
          </header>

          <div className="flex flex-col gap-5">
            <InputField
              label="Username"
              type="text"
              placeholder="Enter your username"
            />
            <InputField
              label="Email"
              type="email"
              placeholder="Example@email.com"
            />
            <InputField
              label="Password"
              type="password"
              placeholder="At least 8 characters"
              showPasswordToggle
            />
            <InputField
              label="Confirm Password"
              type="password"
              placeholder="Repeat password"
              showPasswordToggle
            />
            <button
              type="submit"
              className="custom-signup-button"
            >
              Sign up
            </button>
          </div>

          <div className="flex gap-4 items-center mx-0 my-6">
            <div className="flex-1 h-px bg-zinc-300" />
            <div className="text-base leading-7 text-slate-700">
              Or Continue with
            </div>
            <div className="flex-1 h-px bg-zinc-300" />
          </div>

          <div className="flex gap-4 justify-center">
            <SocialLoginButton
              provider="google"
              onClick={() => handleSocialLogin("google")}
            />
            <SocialLoginButton
              provider="facebook"
              onClick={() => handleSocialLogin("facebook")}
            />
          </div>

          <footer className="mt-14 text-lg leading-7 text-center text-slate-700">
            <span>Already have an account? </span>
            <button className="text-orange-600 cursor-pointer">Log In</button>
          </footer>
        </form>
      </div>
    </section>
  );
}
