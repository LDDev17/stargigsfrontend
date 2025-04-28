"use client";

import React from "react";
import Header from "./Header";
import SidebarPerformer from "../sidebar/SidebarPerformer";
import MainDash from "../dashboardPages/maindash"; // Adjust the import path as needed

interface LayoutProps {
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ className }) => {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      <Header />
      <div className="flex flex-1 border-t-6 border-gray-800">
        <SidebarPerformer className="border-r-6 border-gray-800" />
        <main className="flex-1 p-5">
          <MainDash /> {/* Import MainDash here */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
