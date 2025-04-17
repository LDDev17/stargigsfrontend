"use client";

import { LeftPanel } from "../Customers/LeftPanel";
import { SignupForm } from "../Customers/SignupForm";
import Footer from "../footer/Footer"; // Import the Footer component
import './SignupPage.css'; // Import the CSS file for the main layout
import './footerstyles.css'; // Import the CSS file for the footer

export function SignupPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Lato:wght@400&family=Roboto:wght@400&display=swap"
        rel="stylesheet"
      />
      <main className="main-container">
        <div className="left-panel">
          <LeftPanel />
        </div>
        <div className="signup-form">
          <SignupForm />
        </div>
      </main>
      <div className="footer-container">
        <Footer /> {/* Footer is now outside the main div and has a classname */}
      </div>
    </>
  );
}
