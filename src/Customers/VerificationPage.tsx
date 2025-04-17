"use client";
import "./verification.css";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../Customers/BackButton";
import { CodeInput } from "../Customers/CodeInput";
import { Timer } from "../Customers/Timer";

export default function VerificationPage1() {
  const navigate = useNavigate();

  const handleSubmit = (code: string) => {
    console.log("Submitting code:", code);
    // Handle submission logic here
    navigate("/verification-success"); // Redirect to the verification success page
  };

  return (
    <main className="flex relative w-full min-h-screen bg-white max-md:flex-col">
      <section className="relative w-3/5 bg-black max-md:w-full max-md:h-[50vh] max-sm:h-[40vh]">
        <img
          src="Login2.jpg"
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
        <BackButton />

        <div className="mx-auto mt-52 mb-0 max-w-[388px] max-md:mt-16 max-sm:mt-10">
          <span className="inline-block px-3.5 py-1.5 mb-7 text-sm text-black rounded-3xl border border-black">
            Planning Events/Shopping for Performances
          </span>

          <div className="flex flex-col gap-8">
            <header className="mb-5">
              <h2 className="mb-5 text-4xl font-bold text-gray-900">
                One More Step!
              </h2>
              <p className="text-xl leading-8 text-neutral-600">
                Verify Your Account! We've sent a code to johndoe123@gmail.com
              </p>
            </header>

            <CodeInput onComplete={handleSubmit} />

            <button
              type="submit"
              className="buttonblack"
              onClick={() => handleSubmit("")}
            >
              Submit
            </button>

            <div className="flex gap-2.5 justify-center text-base text-black text-opacity-70">
              <button className="cursor-pointer">Send code again</button>
              <Timer initialSeconds={20} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
