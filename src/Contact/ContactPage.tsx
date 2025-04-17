"use client";

import React from "react";
import  Navbar  from "../layout components/Navbar"; // Updated import
import { ContactForm } from "../Contact/ContactForm"; // Updated import
import { ContactInfo } from "../Contact/ContactInfo"; // Updated import
import  Footer  from "../footer/Footer"; // Updated import

export const ContactPage: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <main className="min-h-screen bg-zinc-50">
        <Navbar /> {/* Changed from Header to Navbar */}
        <section className="px-32 py-12 max-md:px-5 max-md:py-8">
          <header className="mb-14 text-center max-sm:mb-8">
            <h1 className="mb-6 text-4xl font-bold text-black max-sm:text-3xl">
              Contact Us
            </h1>
            <p className="text-lg black text-neutral-500 max-sm:text-base">
              Any question or remarks? Just write us a message!
            </p>
          </header>
          <div className="flex overflow-hidden mx-auto my-0 bg-white rounded-xl shadow-2xl max-w-[1196px] max-md:flex-col">
            <ContactInfo />
            <ContactForm />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default ContactPage;
