"use client";

import { ImageSection } from "./ImageSection";
import { PerformerSignUpForm } from "./SignUpForm";


export function SignUpPage() {
  return (
      <main className="h-full flex">
        <div className="w-1/2">
          <ImageSection />
        </div>
        <div className="w-1/2">
          <PerformerSignUpForm />
        </div>
      </main>
  );
}
