import Nav from "./Nav";
import Hero from "./Hero";
import Work from "./Work";

import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import AllSkill from "./AllSkill";
import FAQ from "./FAQ";

function Home() {
  return (
    <div className="min-h-screen  w-fit md:w-3/4 flex flex-col justify-center items-center  bg-[#1c222a] text-gray-200 font-sans m-auto">
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}

      {/* Works Section */}
      <Work />
      <AllSkill />
      <About />
      <FAQ/>
      {/* Contact Section */}
      <Contact />
      
      

      {/* Footer */}
      <Footer />
    </div>
  );
}
export default Home;
