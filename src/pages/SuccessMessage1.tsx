import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessMessage.css';
import { LoadingDots } from "../pages/LoadingDots";

export function SuccessMessage1() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard-performer');
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  return (
    <React.Fragment>
      <main className="flex relative w-full min-h-screen bg-white max-md:flex-col">
        <section className="relative w-3/5 bg-black max-md:w-full max-md:h-[50vh] max-sm:h-[40vh]">
          <img
            src="Login3.jpg"
            className="object-cover size-full"
            alt="Concert background"
          />
          <header className="absolute left-[63px] top-[66px]">
            <img
              src="logo2-sm-light.png"
              className="h-[42px] w-[183px]"
              alt="Star Gigs Logo"
            />
          </header>
          <footer className="absolute bottom-[100px] left-[63px] text-stone-50">
            <h1 className="mb-28 text-4xl font-bold leading-[62px] max-w-[314px] max-sm:text-3xl">
              Discover & Get Discovered!
            </h1>
            <p className="text-base leading-7">
              STAR GIGS © 2025 ALL RIGHTS RESERVED
            </p>
          </footer>
        </section>

        <section className="relative px-20 py-10 w-2/5 max-md:px-5 max-md:py-10 max-md:w-full">
          <div className="mx-auto mt-52 mb-0 max-w-[388px] max-md:mt-16 max-sm:mt-10">
            <span className="inline-block px-3.5 py-1.5 mb-7 text-sm text-black rounded-3xl border border-black">
              Planning Events/Shopping for Performances
            </span>
            <section className="flex flex-1 justify-center items-center p-5 max-md:px-5 max-md:py-10">
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
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
