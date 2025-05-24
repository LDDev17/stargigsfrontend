interface NavigationSectionProps {
    title: string;
    children: React.ReactNode;
  }
  
  export const NavigationSection: React.FC<NavigationSectionProps> = ({
    title,
    children,
  }) => {
    return (
      <nav className="w-full">
        <h2 className="gap-2 px-6 w-full text-xs font-medium leading-6 text-gray-950">
          {title}
        </h2>
        <div className="mt-2">{children}</div>
      </nav>
    );
  };
  