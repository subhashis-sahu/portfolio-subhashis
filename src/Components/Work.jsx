import React, { useEffect, useState } from "react";

function Work() {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://subhashissahu.onrender.com/api/public/works")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch works");
        return res.json();
      })
      .then((data) => setWorks(data))
      .catch((err) => {
        console.error(err);
        setError("Unable to load works.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen px-6 scroll-mt-20" id="works">
      <h3 className="text-4xl font-bold leading-tight mb-6">MY RECENT WORKS</h3>

      {/* ✅ Loading State */}
      {loading && (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-gray-600 border-t-indigo-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* ❌ Error State */}
      {error && <p className="text-red-500 mb-6">{error}</p>}

      {/* ✅ Works Grid */}
      {!loading && !error && (
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
                h-fit
                shadow-white
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
              <p className="text-lg text-white font-medium mb-2 line-clamp-1 group-hover:line-clamp-none">
                {work.tittle}
              </p>

              <p className="text-sm text-gray-400 mb-2 line-clamp-2 group-hover:line-clamp-none">
                {work.describtion}
              </p>

              <p className="text-xs text-gray-500">Tech: {work.techStack}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Work;
