"use client";

import { LeftSection } from "./LeftSection";
import { RightSection } from "./RightSection";

export default function VerificationSuccess1() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <main className="flex w-full min-h-screen bg-white max-md:flex-col">
        <LeftSection />
        <RightSection />
      </main>
    </>
  );
}