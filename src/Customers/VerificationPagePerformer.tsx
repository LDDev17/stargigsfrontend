"use client";
import "./verification.module.css";
import { useNavigate } from "react-router-dom";
import { CodeInput } from "./CodeInput";
import { Timer } from "./Timer";
import rock_concert from '../assets/photos/stage_spotlight.jpg'
import PerformerIcon from "../design components/PerformerIcon";
import BackButton from "../design components/buttons/BackButton";
import { signUp } from "aws-amplify/auth";

export default function VerificationPagePerformer() {
  const navigate = useNavigate();

  const handleSubmit = (code: string) => {
    console.log("Submitting code:", code);
    // Handle submission logic here
    navigate("/successmessage1");
  };

 

  return (
    <main className="flex relative w-full min-h-screen bg-white font-inter">
      <section className="relative w-1/2 bg-black">
        <img
          src={rock_concert}
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
        <footer className="absolute bottom-[100px] left-[63px] text-tertiary">
          <h1 className="mb-28 text-4xl font-bold leading-[62px] max-w-[314px] max-sm:text-3xl">
            Discover & Get Discovered!
          </h1>
          <p className="text-base leading-7">
            STAR GIGS © 2025 ALL RIGHTS RESERVED
          </p>
        </footer>
      </section>

      <section className="flex flex-col space-y-12 md:space-y-18 lg:space-y-24  p-10 w-1/2">
        <header className="flex justify-end w-full">
          <BackButton />
        </header>

        <div className="mx-auto max-w-[388px]">
          <PerformerIcon />

          <div className="flex flex-col gap-8">
            <header className="mb-5">
              <h2 className="mb-5 text-4xl font-bold text-text_primary">
                One More Step!
              </h2>
              <p className="text-xl leading-8 text-secondary">
                Verify Your Account! We've sent a code to johndoe123@gmail.com
              </p>
            </header>

            <CodeInput onComplete={handleSubmit} />

            <button
              type="submit"
              className="text-white rounded-xl py-3"
              style={{ backgroundColor: "black"}}
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
