import React from "react";


function Nav() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-3/4">
      <div className="h-[56px]  bg-[rgba(34,43,54,0.8)] text-white   backdrop-blur-md rounded px-6 flex items-center justify-center shadow-lg border border-white/10">

        {/* Logo */}
        <div className="w-3/4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Subhashis Sahu</h1>

        <nav className="flex space-x-8 text-sm text-gray-400 mx-6">
          <a href="#" className="border-hover text-white">Home</a>
          <a href="#about" className="border-hover text-white">About</a>
          <a href="#works" className="border-hover text-white">Works</a>
          <a href="#contact" className="border-hover text-white">Contact</a>
        </nav>
      </div>

      </div>
    </div>
  );
}

export default Nav;
