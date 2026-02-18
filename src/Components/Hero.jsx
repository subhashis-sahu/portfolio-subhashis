import React from "react";
import subh from "../assets/subhashis.png";


function Hero() {
  return (
    <section className="w-full flex items-center justify-center" id="hero">
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
            <button
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=sahusubha371@gmail.com&su=Hiring%20Inquiry",
                  "_blank",
                )
              }
              className="bg-teal-500 zoom-hover  px-6 py-2 rounded text-black font-medium"
            >
              Hire me
            </button>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "subhashis_resume.pdf";
                link.download = "subhashis_resume.pdf";
                link.click();
              }}
              className="border border-gray-600 px-6 py-2 rounded hover:bg-gray-800 zoom-hover"
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          {/* Radial Gradient */}
          <div className="absolute w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.7)_0%,rgba(45,212,191,0.35)_35%,rgba(45,212,191,0.15)_55%,transparent_75%)] hidden md:block"></div>

          {/* Image */}
          <img
            src={subh}
            alt="Designer"
            className="relative w-72 h-72 rounded-full grayscale z-10 hover:transform hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
