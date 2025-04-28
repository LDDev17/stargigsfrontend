"use client";
import React from "react";
import { SearchBar } from "./SearchBar";
import { NotificationBell } from "./NotificationBell";
import { UserProfile } from "./UserProfile";

const Header: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <header className="flex justify-center items-center px-32 py-5 w-full bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.15)] max-md:px-16 max-md:py-5 max-sm:px-5 max-sm:py-5">
        <nav className="flex justify-between items-center w-full">
          <SearchBar />
          <div className="flex gap-2.5 items-center max-md:gap-1.5 max-sm:gap-1.5">
            <NotificationBell />
            <UserProfile />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
