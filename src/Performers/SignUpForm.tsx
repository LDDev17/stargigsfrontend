import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import PerformerIcon from "../design components/PerformerIcon";
import { InputField } from "./InputField";
import { SocialLoginButton } from "./SocialLoginButton";
import BackButton from "../design components/buttons/BackButton";
import TextButton from "../design components/buttons/TextButton";

// import './signupform2.css'; // Import the custom CSS file
interface PerformerSignUpProps {
  username: string;
  email: string;
  password: string;
}

export function PerformerSignUpForm() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({});

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   navigate("/verification-page2"); // Redirect to verification page 2
  // };

  const handleSocialLogin = (provider: "google" | "facebook") => {
    // Handle social login
  };

  return (
    <section className="relative flex-1 px-12 pt-10 pb-20 right-[section] font-inter">
      <nav className="flex absolute gap-3 items-center cursor-pointer right-[116px] top-[38px]">
        <BackButton 
          prevUrl = 'role-selection-page'
        />
      </nav>

      <div className="mx-auto mt-12 mb-0 max-w-[388px] max-sm:mt-5">
        <PerformerIcon />

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <header className="flex flex-col gap-5">
            <h2 className="text-4xl font-bold leading-[52.2px]">
              Join 
              <span className="bg-clip-text bg-gradient-to-r from-light_orange to-primary text-transparent">
                STAR GIGS
              </span> –
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
              className="text-white rounded-xl py-3"
              style={{ backgroundColor: "black"}}
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

          <footer className="mt-14 text-lg leading-7 text-center text-slate-700 inline-flex space-x-2">
            <p className="py-2.5">Already have an account? </p>
            <TextButton 
              buttonText="Login"
              textColor="primary"
            />
          </footer>
        </form>
      </div>
    </section>
  );
}
