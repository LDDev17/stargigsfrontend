"use client";

import React from "react";
import Navbar from "../pages-general/general-components/Navbar"; // Updated import
import { ContactForm } from "../Contact/ContactForm"; // Updated import
import { ContactInfo } from "../Contact/ContactInfo"; // Updated import
import Footer2 from "../pages-general/general-components/Footer2";

export const ContactPage = () => {
  return (
    <>
      <Navbar />
      <section className="px-32 py-12 mt-[86px] bg-[#fbfbfb]">
        <header className="mb-14 text-center font-inter">
          <h1 className="mb-6 text-4xl font-bold text-black">
            Contact Us
          </h1>
          <p className="text-lg text-neutral-500">
            Any question or remarks? Just write us a message!
          </p>
        </header>
        <div className="flex overflow-hidden mx-auto my-0 bg-white rounded-xl shadow-2xl max-w-[1196px] max-md:flex-col">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <Footer2 />
    </>
  );
};

export default ContactPage;
