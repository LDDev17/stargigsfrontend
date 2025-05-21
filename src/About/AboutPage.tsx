import React from "react";
import Navbar from "../pages-general/general-components/Navbar";
import { Hero } from "./Hero";
import { Features } from "./Features";
import Footer2 from "../pages-general/general-components/Footer2";

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
