import React from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center  bg-[#1c222a] text-gray-200 font-sans m-auto" >
      {/* Navbar */}
      <Nav/>
      <Home/>

      {/* Hero Section */}
      <Hero/>

      {/* About Section */}
      

      {/* Works Section */}
      <Work/>
      <About/>
      {/* Contact Section */}
      <Contact/>
      
      {/* Footer */}
      <Footer/>
     
    </div>
  );
}
