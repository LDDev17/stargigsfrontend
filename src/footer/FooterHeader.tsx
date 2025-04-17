import * as React from "react";

export const FooterHeader: React.FC = () => {
  return (
    <header className="flex gap-2.5 w-full text-6xl font-semibold whitespace-nowrap text-zinc-900 max-md:max-w-full max-md:text-4xl">
      <div className="flex overflow-hidden flex-col flex-1 shrink justify-center p-16 w-full bg-rose-100 border-l-8 border-orange-600 basis-0 min-w-60 max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <h1 className="w-full max-md:max-w-full max-md:text-4xl">
       
        </h1>
      </div>
    </header>
  );
};
export default FooterHeader;