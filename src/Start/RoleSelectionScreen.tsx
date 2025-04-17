// src/Start/RoleSelectionScreen.tsx
"use client";

import { Logo } from "./Logo";
import { RoleSelectionForm } from "./RoleSelectionForm";
import Footer from "../footer/Footer"; // Updated import for default export

export default function RoleSelectionScreen() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto:wght@400&display=swap"
        rel="stylesheet"
      />
      <main className="relative mx-auto w-full min-h-screen flex flex-col">
        <div className="flex flex-1">
          <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('Login2.jpg')" }}>
            {/* You can add any content here if needed */}
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <Logo />
            <RoleSelectionForm />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
