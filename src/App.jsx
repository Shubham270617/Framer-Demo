import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import LatestNews from "./components/LatestNews";
import JoinTheFuture from "./components/JoinTheFuture";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="space-y-10">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <TestimonialCarousel />
      <Features />
      <Pricing />
      <FAQ />
      <LatestNews />
      <JoinTheFuture />
      <Footer />
    </div>
  );
};

export default App;
