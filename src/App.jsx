import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AuthCards from "./components/AuthCards";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css"; // Import the global CSS
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="relative h-full w-full  flex flex-col items-center justify-center overflow-hidden   ">
        {/* Background lines and crosses - Simplified representation */}
        <div className="hero-lines-grid">
          <div
            className="hero-h-line hero-h-line-1"
            style={{ gridArea: "1/1/2/7" }}
          ></div>
          <div
            className="hero-h-line hero-h-line-2"
            style={{ gridArea: "2/1/3/7" }}
          ></div>
          <div
            className="hero-h-line hero-h-line-3"
            style={{ gridArea: "3/1/4/7" }}
          ></div>
          <div
            className="hero-h-line hero-h-line-4"
            style={{ gridArea: "4/1/5/7" }}
          ></div>
          <div
            className="hero-h-line hero-h-line-5"
            style={{ gridArea: "5/1/6/7" }}
          ></div>
          <div
            className="hero-h-line hero-h-line-6"
            style={{ gridArea: "6/1/7/7" }}
          ></div>

          <div
            className="hero-v-line hero-v-line-1"
            style={{ gridArea: "1/1/7/2" }}
          ></div>
          <div
            className="hero-v-line hero-v-line-2"
            style={{ gridArea: "1/2/7/3" }}
          ></div>
          <div
            className="hero-v-line hero-v-line-3"
            style={{ gridArea: "1/3/7/4" }}
          ></div>
          <div
            className="hero-v-line hero-v-line-4"
            style={{ gridArea: "1/4/7/5" }}
          ></div>
          <div
            className="hero-v-line hero-v-line-5"
            style={{ gridArea: "1/5/7/6" }}
          ></div>
          <div
            className="hero-v-line hero-v-line-6"
            style={{ gridArea: "1/6/7/7" }}
          ></div>
        </div>
        <span
          className="hero-cross cross-1"
          style={{ top: "10%", left: "20%" }}
        ></span>
        <span
          className="hero-cross cross-2"
          style={{ bottom: "15%", right: "25%" }}
        ></span>
        <span className="hero-cross" style={{ top: "30%", left: "50%" }}></span>
        <span
          className="hero-cross"
          style={{ bottom: "5%", left: "10%" }}
        ></span>
        <span
          className="hero-cross"
          style={{ top: "40%", right: "15%" }}
        ></span>
        
        <Header />
        <HeroSection />
        <AuthCards />

        {/* Theme toggle and description */}
        <div className=" flex flex-col items-center justify-center gap-8 space-y-2 my-10">
          <ThemeToggle />
          <p className="text-sm text-gray-400">
            Light and dark modes supported.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
