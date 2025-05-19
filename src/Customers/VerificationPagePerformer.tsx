"use client";
// import "./verification.module.css";
import { useState, FormEvent } from "react";

import { CodeInput } from "./CodeInput";
import { Timer } from "./Timer";
import PerformerIcon from "../design components/PerformerIcon";
import BackButton from "../design components/buttons/BackButton";
import { autoSignIn, confirmSignUp } from "aws-amplify/auth";
import SignUpStepType from "../types/SignUpStepType";

interface VerificationPagePerformerProps {
  userEmail: string;
  setSignUpStep: (signUpStep: SignUpStepType) => void;
}

interface VerificationFormElements extends HTMLFormControlsCollection {
  code: HTMLInputElement;
}

interface VerificationForm extends HTMLFormElement {
  readonly elements: VerificationFormElements;
}

export default function VerificationPagePerformer({ userEmail, setSignUpStep }: VerificationPagePerformerProps) {
  const [code, setCode] = useState<string[]>(Array(5).fill(""));
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirmSignUp = async (event: FormEvent<VerificationForm>) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.currentTarget;
    const code: string[] = form.elements.code.value.split("");

    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username: userEmail,
        confirmationCode: code.join(""),
      });

      console.log("Sign up result:", { isSignUpComplete, nextStep });

      if (isSignUpComplete) {
        console.log("Sign up complete:", { isSignUpComplete });
        const { nextStep } = await autoSignIn();

        if (nextStep.signInStep === 'DONE') {
          console.log('Successfully logged in.');
        }
        setSignUpStep('success');
      }
    } catch (error) {
      console.error("Error confirming sign up:", error);
      setSignUpStep('error');
    } finally {
      setIsLoading(false);
    }
  }

 

  return (
    <section 
      className="flex flex-col space-y-12 md:space-y-18 lg:space-y-24 p-10  
      font-inter justify-center items-center"
    >
      <header className="flex justify-end w-full">
        <BackButton />
      </header>

      <form 
        className="mx-auto max-w-[388px]"
        onSubmit={handleConfirmSignUp}
      >
        <PerformerIcon />
        <div className="flex flex-col gap-8">
          <header className="mb-5">
            <h2 className="mb-5 text-4xl font-bold text-text_primary">
              One More Step!
            </h2>
            <p className="text-xl leading-8 text-secondary">
              Verify Your Account! We've sent a code to {userEmail}.
            </p>
          </header>

          <CodeInput 
            // onComplete={handleSubmit} 
            code={code}
            setCode={setCode}
          />

          <button
            type="submit"
            className="text-white rounded-xl py-3"
            disabled={isLoading}
            style={{ backgroundColor: "black"}}
          >
            {isLoading? 'Verifying...' : 'Submit'}
          </button>

          <div className="flex gap-2.5 justify-center text-base text-black text-opacity-70">
            <button className="cursor-pointer">Send code again</button>
            <Timer initialSeconds={20} />
          </div>
        </div>
      </form>
    </section>
  );
}
