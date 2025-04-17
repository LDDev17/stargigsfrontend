"use client";
import * as React from "react";
import { FormInput } from "./FormInput";

interface PasswordInputProps {
  label: string;
  placeholder: string;
}

export function PasswordInput({ label, placeholder }: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <FormInput
      label={label}
      type={showPassword ? "text" : "password"}
      placeholder={placeholder}
    >
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="cursor-pointer"
      >
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.97712 2.83398L1.87793 3.91524L16.0226 17.834L17.1218 16.7524L2.97712 2.83398Z"
            fill="black"
            fillOpacity="0.6"
          />
          <path
            d="M4.20032 6.20018L5.23492 7.21823C4.10236 8.16712 3.20051 9.34826 2.61773 10.3817L2.61595 10.3852C4.23901 13.0555 6.81431 15.5791 10.0647 15.1963C10.942 15.093 11.7605 14.7979 12.5083 14.3756L13.5557 15.4059C12.098 16.3265 10.4271 16.814 8.6166 16.5731C5.35204 16.1386 2.68268 13.5039 1 10.4096C1.79005 8.84535 2.87079 7.34884 4.20032 6.20018ZM6.55345 4.69145C7.4663 4.29122 8.45405 4.05583 9.50887 4.03907C9.56744 4.03872 10.2627 4.0712 10.5779 4.12219C10.7756 4.15432 10.9726 4.19448 11.1667 4.24442C14.2634 5.03825 16.5576 7.61427 18 10.2682C17.3949 11.4706 16.6023 12.6441 15.6572 13.6495L14.6538 12.6622C15.3519 11.9218 15.934 11.0976 16.3823 10.2982C16.3823 10.2982 15.9315 9.58505 15.5897 9.13732C15.37 8.84954 15.139 8.57015 14.8962 8.30088C14.7046 8.08854 13.9603 7.36735 13.7832 7.21718C12.5949 6.21171 11.1997 5.42277 9.52626 5.43604C8.87818 5.44617 8.25494 5.57189 7.66328 5.78354L6.55345 4.69145Z"
            fill="black"
            fillOpacity="0.6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.0168 8.97201L7.81548 9.75758L10.8897 12.7826C10.4787 13.0096 10.0045 13.1388 9.50019 13.1388C7.92966 13.1388 6.65479 11.8843 6.65479 10.3389C6.65479 9.84267 6.78646 9.37643 7.0168 8.97201ZM9.44766 7.53976C9.46505 7.53941 9.48279 7.53906 9.50019 7.53906C11.0707 7.53906 12.3456 8.79389 12.3456 10.3389C12.3456 10.3564 12.3456 10.3735 12.3452 10.3906L9.44766 7.53976Z"
            fill="black"
            fillOpacity="0.6"
          />
        </svg>
      </button>
    </FormInput>
  );
}
