import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col gap-6 items-center max-sm:w-full">
      <div className="w-[109px] h-[100px]">{icon}</div>
      <div className="flex flex-col gap-2.5 items-center text-center">
        <h3 className="text-2xl font-semibold text-black">{title}</h3>
        <p className="text-lg text-black w-[334px] max-sm:w-full">
          {description}
        </p>
      </div>
    </article>
  );
};
