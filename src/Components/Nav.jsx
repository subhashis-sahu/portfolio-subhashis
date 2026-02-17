import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (id) => {
    setOpen(false);
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-3/4 rounded-full">
      <div className="h-[56px] rounded-full text-white backdrop-blur-lg px-6 flex items-center justify-center shadow-lg border border-white/10">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-xl font-semibold">Subhashis Sahu</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm text-gray-400 mx-6">

            <button
              onClick={() => handleScroll("hero")}
              className="text-white border-hover"
            >
              Home
            </button>

            <button
              onClick={() => handleScroll("works")}
              className="text-white border-hover"
            >
              Works
            </button>

            <button
              onClick={() => handleScroll("about")}
              className="text-white border-hover"
            >
              About
            </button>

            <button
              onClick={() => handleScroll("contact")}
              className="text-white border-hover"
            >
              Contact
            </button>

            <Link to="/journey" className="text-white border-hover">
              Journey
            </Link>

          </nav>

          <button
            className="md:hidden text-white border-hover"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="mt-3 rounded-2xl bg-[#1c222a]/10 backdrop-blur-lg border border-white/10 md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4 text-sm text-white">

            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <button onClick={() => handleScroll("hero")}>
              Home
            </button>

            <button onClick={() => handleScroll("works")}>
              Works
            </button>

            <button onClick={() => handleScroll("about")}>
              About
            </button>

            <button onClick={() => handleScroll("contact")}>
              Contact
            </button>

            <Link to="/journey" onClick={() => setOpen(false)}>
              Journey
            </Link>

          </nav>
        </div>
      )}
    </div>
  );
}

export default Nav;
