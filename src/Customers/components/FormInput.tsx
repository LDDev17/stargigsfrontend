import * as React from "react";

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  children?: React.ReactNode;
}

export function FormInput({
  label,
  type,
  placeholder,
  children,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm leading-5 text-black">{label}</label>
      <div className="flex items-center px-4 py-4 bg-white rounded-xl border border-solid border-zinc-300">
        <input
          type={type}
          placeholder={placeholder}
          className="flex-1 text-base leading-7 border-[none] text-black text-opacity-50"
        />
        {children}
      </div>
    </div>
  );
}
