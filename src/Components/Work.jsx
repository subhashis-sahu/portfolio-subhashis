import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
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
    <div className="min-h-screen px-6 scroll-mt-20 w-full" id="works">
      <h3 className="text-4xl font-bold leading-tight mb-6">MY RECENT WORKS</h3>

      {/* ✅ Loading State */}
      {loading && (
        <div
          className="grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="
          bg-[#1c222a]
          rounded-lg
          p-6
          border
          min-h-[180px]
        "
            >
              <Skeleton height={28} sx={{ bgcolor: "#2a2f36", mb: 2 }} />
              <Skeleton height={20} sx={{ bgcolor: "#2a2f36", mb: 1 }} />
              <Skeleton
                height={20}
                width="70%"
                sx={{ bgcolor: "#2a2f36", mb: 2 }}
              />
              <Skeleton height={16} width="50%" sx={{ bgcolor: "#2a2f36" }} />
            </div>
          ))}
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
                hover:scale-110
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
