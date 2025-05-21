"use client";
import { useState } from "react";

import { ImageSection } from "./ImageSection";
import { PerformerSignUpForm } from "./SignUpForm";
import VerificationPagePerformer from "./VerificationPagePerformer";
import SignUpStepType from "../types/SignUpStepType";
import { SuccessMessage } from "./SuccessMessage";

// Page that houses left and right sides of SignUpPage. 
// Also maintains state for userEmail(which is needed for sign up) and state for 
// what step of the sign-in process we are on
export function SignUpPage() {
  const [userEmail, setUserEmail] = useState<string>("");
  const [signUpStep, setSignUpStep] = useState<SignUpStepType>('form');

  return (
      <main className="h-full flex">
        
        {/* Left Side */}
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
            <SuccessMessage />
          ) : (
            // TODO: add error handling page
            <p>error</p>
          )
        }
        </div>
      </main>
  );
}
