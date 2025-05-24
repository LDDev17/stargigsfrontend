interface ChipBadgeProps {
    label: string;
  }
  
  export const ChipBadge: React.FC<ChipBadgeProps> = ({ label }) => {
    return (
      <div className="px-px w-full max-w-[97px]">
        <div className="gap-2.5 self-stretch px-3.5 rounded-3xl bg-[linear-gradient(90deg,#F6BD97_0%,#F5AA79_15%,#F59050_36%,#F45E00_100%)] min-h-[30px]">
          {label}
        </div>
      </div>
    );
  };
  