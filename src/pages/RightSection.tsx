
import { LoadingDots } from "./LoadingDots";

export function RightSection() {
  return (
    <section className="flex flex-1 justify-center items-center p-5 right-[section] max-md:px-5 max-md:py-10">
      <div className="flex flex-col gap-5 items-center text-center max-w-[388px] max-sm:px-5 max-sm:py-0">
        <h2 className="text-4xl font-bold text-gray-900 leading-[52.2px] max-sm:text-3xl">
          You're All Set!
        </h2>
        <p className="text-xl leading-8 text-slate-700 max-sm:text-base">
          Verification complete. Redirecting to your dashboard...
        </p>
        <LoadingDots />
      </div>
    </section>
  );
}
