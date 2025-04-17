"use client";

import { LeftSection } from "./LeftSection";
import RoleSelectionForm from "./RoleSelectionForm"; // Corrected import

export default function RoleSelectionPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <main className="flex flex-row mx-auto w-full max-w-none h-screen bg-white max-md:flex-col max-md:max-w-[991px] max-sm:flex-col max-sm:max-w-screen-sm">
        <LeftSection />
        <RoleSelectionForm />
      </main>
    </>
  );
}
