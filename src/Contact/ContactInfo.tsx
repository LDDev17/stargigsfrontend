import React from "react";

export const ContactInfo: React.FC = () => {
  return (
    <section className="relative p-10 text-white bg-black w-[491px] max-md:w-full">
      <h2 className="mb-5 text-3xl font-semibold">Contact Information</h2>
      <p className="mb-10 text-base">Say something to start a live chat!</p>
      <div className="mb-24">
        <div className="flex gap-5 items-center mb-8">
          <i className="ti ti-phone" />
          <p className="text-base">+1012 3456 789</p>
        </div>
        <div className="flex gap-5 items-center mb-8">
          <i className="ti ti-mail" />
          <p className="text-base">contact@stargigs.com</p>
        </div>
        <div className="flex gap-5 items-center mb-8">
          <i className="ti ti-map-pin" />
          <address className="text-base not-italic">
            5123 Market St. #22B
            <br />
            Charlottesville, California 44635
          </address>
        </div>
      </div>
      <div className="flex gap-5">
        <a
          href="#"
          className="flex justify-center items-center rounded-full bg-white bg-opacity-10 h-[30px] w-[30px]"
        >
          <i className="ti ti-brand-twitter" />
        </a>
        <a
          href="#"
          className="flex justify-center items-center rounded-full bg-white bg-opacity-10 h-[30px] w-[30px]"
        >
          <i className="ti ti-brand-instagram" />
        </a>
        <a
          href="#"
          className="flex justify-center items-center rounded-full bg-white bg-opacity-10 h-[30px] w-[30px]"
        >
          <i className="ti ti-brand-discord" />
        </a>
      </div>
    </section>
  );
};
