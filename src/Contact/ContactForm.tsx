"use client";

import React from "react";
import "./contactform.css"; // Import the custom CSS file

import { TextArea } from "./TextArea";
import { Input } from "./Input"; // Make sure this import is correct

export const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex-1 px-10 py-12 max-sm:px-5 max-sm:py-8"
      >
        <div className="flex gap-10 mb-10 max-md:flex-col max-md:gap-5">
          <Input label="First Name" type="text" className="custom-text" />
          <Input label="Last Name" type="text" className="custom-text" />
        </div>
        <div className="flex gap-10 mb-10 max-md:flex-col max-md:gap-5">
          <Input label="Email" type="email" className="custom-text" />
          <Input label="Phone Number" type="tel" className="custom-text" />
        </div>
        <div className="mb-10">
          <label className="custom-text">Select Subject?</label>
          <div className="flex gap-5 mt-4">
            {[
              "General Inquiry",
              "General Inquiry",
              "General Inquiry",
              "General Inquiry",
            ].map((text, index) => (
              <div key={index} className="flex gap-2.5 items-center text-xs custom-text">
                <div
                  className={`${index === 0 ? "bg-black" : "bg-neutral-200"} rounded-full h-[13px] w-[13px]`}
                />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <TextArea
            label="Message"
            placeholder="Write your message.."
            className="h-[100px] custom-text"
          />
        </div>
        <button type="submit" className="float-right custom-button">
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactForm;
