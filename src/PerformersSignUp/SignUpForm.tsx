import type { FormEvent } from "react";
import { signUp } from 'aws-amplify/auth';

import PerformerIcon from "../design-components/PerformerIcon";
import { InputField } from "./InputField";
// import { SocialLoginButton } from "./SocialLoginButton";
import BackButton from "../design-components/buttons/BackButton";
import TextButton from "../design-components/buttons/TextButton";
import SignUpStepType from "../types/SignUpStepType";


interface PerformerSignUpFormProps {
  setUserEmail: (email: string) => void;
  setSignUpStep: (signUpStep: SignUpStepType) => void;
};

interface SignUpFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  confirmPassword: HTMLInputElement;
};

interface SignUpForm extends HTMLFormElement {
  readonly elements: SignUpFormElements;
};

// Component that occupies right half of SignUpPage when signUpStep is 'form'.
export function PerformerSignUpForm({ setUserEmail, setSignUpStep }: PerformerSignUpFormProps) {

  const handleSignUp = async (event: FormEvent<SignUpForm>) => {
    event.preventDefault();
    const form = event.currentTarget

    if (form.password !== form.confirmPassword) {
      throw new Error("Passwords do not match");
    }

    const email: string = form.elements.email.value;
    const password: string = form.elements.password.value;

    try {
      // Sends the following data to Cognito to see if it approves the email and password
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username: email,
        password: password,
        options: {
          userAttributes: {
            email: email,
            role: 'performer',
          },
          autoSignIn: { enabled: true }, // Enable auto sign-in after sign-up
        }
      });

      // userEmail needed for Verification step on next "page"
      setUserEmail(email);
      console.log("Sign up result:", { isSignUpComplete, userId, nextStep });
      setSignUpStep('confirmation');
    } catch (error) {
      console.error("Error signing up:", error);
      setSignUpStep('error');
      // Handle error (e.g., show a message to the user)
    };
  };

  // TODO: Uncomment this function to implement social sign-ups
  // const handleSocialLogin = (provider: "google" | "facebook") => {
  //   // Handle social login
  // };

  return (
    <section className="relative flex-1 px-12 pt-10 pb-20 right-[section] font-inter">
      <nav className="flex absolute gap-3 items-center cursor-pointer right-[116px] top-[38px]">
        <BackButton />
      </nav>

      <div className="mx-auto mt-12 mb-0 max-w-[388px] max-sm:mt-5">
        <PerformerIcon />

        <form onSubmit={handleSignUp} className="flex flex-col gap-8">
          <header className="flex flex-col gap-5">
            <h2 className="text-4xl font-bold leading-[52.2px]">
              Join
              <span
                className="bg-clip-text bg-gradient-to-r from-light_orange 
                  to-primary text-transparent ml-2"
              >
                STAR GIGS
              </span> –
            </h2>
            <p className="text-xl leading-8 text-neutral-600">
              Showcase your talent and get discovered.
            </p>
          </header>

          <div className="flex flex-col gap-5">
            <InputField
              label="Email"
              type="email"
              name="email"
              placeholder="Example@email.com"
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              placeholder="At least 8 characters"
              showPasswordToggle
            />
            <InputField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Repeat password"
              showPasswordToggle
            />
            <button
              type="submit"
              className="text-white rounded-xl py-3"
              style={{ backgroundColor: "black" }}
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

          {/* TODO: Uncomment these lines to implement social sign-ups */}
          {/* <div className="flex gap-4 justify-center">
            <SocialLoginButton
              provider="google"
              onClick={() => handleSocialLogin("google")}
            />
            <SocialLoginButton
              provider="facebook"
              onClick={() => handleSocialLogin("facebook")}
            />
          </div> */}

          <footer className="mt-14 text-lg leading-7 text-center text-slate-700 inline-flex space-x-2">
            <p className="py-2.5">Already have an account? </p>
            {/* TODO: needs onClick to take the user to the SignInPage */}
            <TextButton
              buttonText="Login"
              textColor="text-primary"
              textHoverFrom="from-light_orange"
              textHoverTo="to-primary"
            />
          </footer>
        </form>
      </div>
    </section>
  );
}
