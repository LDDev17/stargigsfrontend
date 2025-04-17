import React from "react";
import Navbar from "../layout components/Navbar";
import { Hero } from "./Hero";
import { Features } from "./Features";
import Footer from "../footer/Footer";

export const AboutPage: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
};
