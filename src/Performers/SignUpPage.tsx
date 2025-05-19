"use client";
import { useState } from "react";

import { ImageSection } from "./ImageSection";
import { PerformerSignUpForm } from "./SignUpForm";
import VerificationPagePerformer from "../Customers/VerificationPagePerformer";
import SignUpStepType from "../types/SignUpStepType";
import { SuccessMessage1 } from "../pages/SuccessMessage1";

export function SignUpPage() {
  const [userEmail, setUserEmail] = useState<string>("");
  const [signUpStep, setSignUpStep] = useState<SignUpStepType>('form');

  return (
      <main className="h-full flex">
        <div className="w-1/2">
          <ImageSection />
        </div>
        <div className="w-1/2">
          {signUpStep === 'form' ? 
          (
            <PerformerSignUpForm 
            setUserEmail={setUserEmail}
            setSignUpStep={setSignUpStep}
            />
          ) : signUpStep === 'confirmation' ? (
            <VerificationPagePerformer 
              userEmail={userEmail}
              setSignUpStep={setSignUpStep}
            />
          ) : signUpStep === 'success' ? (
            <SuccessMessage1 />
          ) : (
            <p>error</p>
          )
        }
        </div>
      </main>
  );
}
