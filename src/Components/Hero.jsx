import React from "react";
import subh from "../assets/subhashis.png";

function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-20 items-center align-center">
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            BACKEND <br />
            <span className="text-teal-400">DEVELOPER</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-md">
            I design clean, modern, and user‑friendly interfaces for web and
            mobile applications.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-teal-500 zoom-hover  px-6 py-2 rounded text-black font-medium">
              Hire me
            </button>
            <button className="border border-gray-600 px-6 py-2 rounded hover:bg-gray-800 zoom-hover">
              Download CV
            </button>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          {/* Radial Gradient */}
          <div
            className="absolute w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.7)_0%,rgba(45,212,191,0.35)_35%,rgba(45,212,191,0.15)_55%,transparent_75%)] "
          ></div>

          {/* Image */}
          <img
            src={subh}
            alt="Designer"
            className="relative w-80 h-80 rounded-full grayscale z-10 hover:transform"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
