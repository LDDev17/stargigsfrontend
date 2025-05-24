"use client";

import { useState } from "react";

import { LeftSection } from "./LeftSection";
import RoleSelectionForm from "./RoleSelectionForm"; // Corrected import

export default function RoleSelectionPage() {
  const [selectedRole, setSelectedRole] = useState<string>('');

  // handler for role changes from child component
  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
  };

  return (
    <>
      
      <main className="flex w-full h-screen">
        <LeftSection selectedRole={selectedRole} />
        <RoleSelectionForm onRoleChange={handleRoleChange} />
      </main>
    </>
  );
}
