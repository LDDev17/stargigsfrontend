import React from "react";
import Navbar from "../layout components/Navbar";
import { Hero } from "./Hero";
import { Features } from "./Features";
import Footer2 from "../layout components/Footer2";

export const AboutPage: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Footer2 />
    </main>
  );
};
