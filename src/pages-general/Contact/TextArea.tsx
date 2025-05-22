import React from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2.5 text-xs text-neutral-400 block">{label}</label>
      )}
      <textarea
        className={`px-0 py-2.5 w-full text-sm border-b border-solid resize-none border-b-neutral-400 ${className}`}
        {...props}
      />
    </div>
  );
};
