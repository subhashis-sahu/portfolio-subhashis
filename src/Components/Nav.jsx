import { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-3/4 rounded-full">
      <div className="h-[56px] rounded-full text-white backdrop-blur-lg  px-6 flex items-center justify-center shadow-lg border border-white/10">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-xl font-semibold">Subhashis Sahu</h1>

          <nav className="hidden md:flex space-x-8 text-sm text-gray-400 mx-6">
            <a href="#" className="border-hover text-white">
              Home
            </a>
            <a href="#works" className="border-hover text-white">
              Works
            </a>
            <a href="#about" className="border-hover text-white">
              About
            </a>
            
            <a href="#contact" className="border-hover text-white">
              Contact
            </a>
            <a href="#photos" className="border-hover text-white">
              Photos
            </a>
          </nav>
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>
      {open && (<div className="mt-3 rounded-2xl bg-[#1c222a]/10 backdrop-blur-lg border border-white/10 md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4 text-sm text-white">
            <a onClick={() => setOpen(false)} href="#">
              Home
            </a>
            <a onClick={() => setOpen(false)} href="#works">
              Works
            </a>

            <a onClick={() => setOpen(false)} href="#about">
              About
            </a>
            
            <a onClick={() => setOpen(false)} href="#contact">
              Contact
            </a>
            <a onClick={() => setOpen(false)} href="#photos">
              Photos
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Nav;
