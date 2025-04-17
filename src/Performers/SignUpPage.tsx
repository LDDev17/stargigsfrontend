"use client";

import { ImageSection } from "./ImageSection";
import { PerformerSignUpForm } from "./SignUpForm";
import Footer from "../footer/Footer"; // Import the Footer component
import './PerformerSignUpPage.css'; // Import the CSS file

export function SignUpPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Lato:wght@400&family=Roboto:wght@400&display=swap"
        rel="stylesheet"
      />
      <main className="main-container">
        <div className="image-section">
          <ImageSection />
        </div>
        <div className="signup-form">
          <PerformerSignUpForm />
        </div>
      </main>
      <div className="footer-container">
        <Footer /> {/* Footer is now outside the main div */}
      </div>
    </>
  );
}
