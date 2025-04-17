interface RadioOptionProps {
  selected: boolean;
  label: string;
  onClick: () => void;
}

export function RadioOption({ selected, label, onClick }: RadioOptionProps) {
  return (
    <button
      onClick={onClick}
      className="radio-option"
    >
      <div>
        {selected ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="radio-icon"
          >
            <circle
              cx="9"
              cy="9"
              r="8.25"
              fill="white"
              stroke="#F45E00"
              strokeWidth="1.5"
            />
            <circle cx="9" cy="9" r="4.5" fill="#F45E00" />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="radio-icon"
          >
            <circle cx="9" cy="9" r="8.25" stroke="#505156" strokeWidth="1.5" />
          </svg>
        )}
      </div>
      <span
        className={`radio-label ${selected ? "radio-label-selected" : "radio-label-unselected"}`}
      >
        {label}
      </span>
    </button>
  );
}
