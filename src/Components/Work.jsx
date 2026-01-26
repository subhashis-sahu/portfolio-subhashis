import React, { useEffect, useState } from "react";

function Work() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetch("https://subhashissahu.onrender.com/public/works")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch works");
        return res.json();
      })
      .then((data) => setWorks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full px-6 mt-4" id="works">
      <h3 className="text-4xl font-bold leading-tight mb-6">MY RECENT WORKS</h3>
      
      <div
        className="
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    gap-6
    overflow-visible

  "
      >
        {works.map((work) => (
          <div
            key={work.id}
            className="
        bg-[#1c222a]
        h-[175px] shadow-white
        rounded-lg
        p-6
        transition-all
        duration-300
        transform
        hover:scale-125
        hover:z-20
        group
      border-[1px]
      "
          >
            {/* TITLE */}
            <p className="text-lg text-white font-medium mb-2 line-clamp-1 group-hover:line-clamp-none">
              {work.tittle}
            </p>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-400 mb-2 line-clamp-2 group-hover:line-clamp-none">
              {work.describtion}
            </p>

            <p className="text-xs text-gray-500">Tech: {work.techStack}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
