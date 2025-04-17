import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  className = "",
  ...props
}) => {
  return (
    <div className="flex-1">
      {label && (
        <label className="mb-2.5 text-xs text-neutral-400 block">{label}</label>
      )}
      <input
        className={`px-0 py-2.5 w-full text-sm border-b border-solid border-b-neutral-400 ${className}`}
        {...props}
      />
    </div>
  );
};
