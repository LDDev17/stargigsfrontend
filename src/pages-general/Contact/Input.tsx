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
        <label className="text-xs text-neutral-400 block">{label}</label>
      )}
      <input
        name={label?.toLowerCase()}
        className={`px-0 pt-2 w-full text-sm border-b border-solid border-b-neutral-400 ${className}`}
        {...props}
      />
    </div>
  );
};
