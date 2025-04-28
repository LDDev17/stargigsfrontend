import React from "react";
import { ChevronIcon } from "./Icon1";

export const UserProfile: React.FC = () => (
  <div className="flex gap-2.5 items-center max-md:gap-1.5 max-sm:gap-1.5">
    <div className="flex gap-3 items-center">
      <img
        src="profile4.png"
        className="rounded-full h-[55px] w-[55px]"
      />
      <div className="flex flex-col items-start max-sm:hidden">
        <span className="text-xs text-gray-950">Hello!</span>
        <span className="text-base text-gray-950">Andrew Smith</span>
      </div>
    </div>
    <div>
      <ChevronIcon />
    </div>
  </div>
);
