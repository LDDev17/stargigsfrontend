interface NavigationItemProps {
  icon: string;
  label: string;
  badge?: number;
  isActive?: boolean;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  label,
  badge,
  isActive = false,
}) => {
  return (
    <button
      className={`flex gap-3 items-center px-6 py-2.5 w-full text-base font-medium leading-loose min-h-[46px] text-neutral-600 ${
        isActive ? "bg-rose-100" : ""
      }`}
    >
      <img
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
      />
      <span className="flex-1 shrink self-stretch my-auto basis-0">
        {label}
      </span>
      {badge && (
        <span className="self-stretch px-1.5 my-auto w-5 h-5 text-xs leading-none text-center text-white bg-orange-600 rounded-[2000px]">
          {badge}
        </span>
      )}
    </button>
  );
};
