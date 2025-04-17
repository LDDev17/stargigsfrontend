import * as React from "react";

export const FooterNav: React.FC = () => {
  return (
    <nav className="flex flex-col items-center gap-10 mt-2 leading-8 text-white mb-5">
      <ul className="flex gap-10">
        <li>Home</li>
        <li>About</li>
        <li>Booking</li>
      </ul>
      <ul className="flex gap-10">
        <li>Contact</li>
        <li>Reviews</li>
        <li>Talent Acts</li>
      </ul>
    </nav>
  );
};