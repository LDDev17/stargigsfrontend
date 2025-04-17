"use client";
import * as React from "react";

export const FooterContact: React.FC = () => {
  return (
    <div className="mt-2.5 flex flex-col items-center text-center text-white mb-5">
      <div className="max-w-full leading-loose w-[106px]">
        <a href="tel:+1234567890" className="block hover:text-orange-600 transition-colors">
          (123) 456-7890
        </a>
        <div className="w-full bg-orange-600 border border-orange-600 border-solid min-h-px" />
      </div>
      <div className="mt-3 max-w-full leading-loose whitespace-nowrap w-[161px]">
        <a href="mailto:contact@stargigs.com" className="block hover:text-orange-600 transition-colors">
          contact@stargigs.com
        </a>
        <div className="w-full bg-orange-600 border border-orange-600 border-solid min-h-px" />
      </div>
    </div>
  );
};

export default FooterContact;