// src/Start/RoleSelectionScreen.tsx
"use client";

import { Logo } from "./Logo";
import RoleSelectionForm from "./RoleSelectionForm";
import Footer from "../footer/Footer"; // Updated import for default export

export default function RoleSelectionScreen() {
  return (
    <>
      <main className="relative min-h-screen flex flex-col w-1/2">
        <div className="flex flex-1">
          
          <div className="flex flex-col justify-center items-center">
            <RoleSelectionForm />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
