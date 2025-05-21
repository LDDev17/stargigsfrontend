"use client";
import { useRef } from "react";

interface CodeInputProps {
  // onComplete: (code: string) => void;
  code: string[];
  setCode: React.Dispatch<React.SetStateAction<string[]>>;
}

export const CodeInput = ({ code, setCode }: CodeInputProps) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input if value is entered
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }

    // // Check if code is complete
    // if (newCode.every((digit) => digit) && newCode.join("").length === 5) {
    //   onComplete(newCode.join(""));
    // }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 5);
    if (!/^\d+$/.test(pastedData)) return;

    const newCode = [...code];
    pastedData.split("").forEach((char, index) => {
      if (index < 5) newCode[index] = char;
    });
    setCode(newCode);

    // Focus last input or first empty input
    const lastFilledIndex = newCode.findIndex((digit) => !digit);
    const focusIndex = lastFilledIndex === -1 ? 4 : lastFilledIndex;
    inputRefs.current[focusIndex]?.focus();
  };

  return (
    <div
      className="flex gap-5 mb-8 max-sm:gap-2.5"
      role="group"
      aria-label="Verification code input"
    >
      {[0, 1, 2, 3, 4].map((index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={code[index]}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="rounded-2xl border border-solid border-zinc-300 h-[72px] w-[63px] max-sm:h-[65px] max-sm:w-[55px] text-center text-2xl"
          aria-label={`Digit ${index + 1}`}
        />
      ))}
    </div>
  );
};
