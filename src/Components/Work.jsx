import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router-dom";


function Work() {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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
    <div className=" px-6 scroll-mt-20  md:w-3/4" id="works">
      <h3 className="text-4xl font-bold leading-tight mb-6">MY RECENT WORKS</h3>

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-[#1c222a] rounded-lg p-6 border border-gray-700 min-h-[180px]"
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

      {error && <p className="text-red-500 mb-6">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {works.map((work) => (
            <div
              key={work.id}
              onClick={() => navigate(`/work/${work.id}`)}
              className="
                cursor-pointer
                bg-[#1c222a]
                rounded-lg
                p-6
                transition-all
                duration-300
                transform
                hover:scale-105
                hover:z-20
                group
                border
                border-gray-700
              "
            >
              <p className="text-lg text-white font-medium mb-2 line-clamp-1">
                {work.tittle}
              </p>

              <p className="text-sm text-gray-400 mb-2 line-clamp-2 ">
                {work.describtion}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {work.techStack
                  ?.split(",")
                  .slice(0, 4)
                  .map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2.5 py-1 bg-gray-800/70 text-gray-300 rounded-md border border-gray-700"
                    >
                      {tech.trim()}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Work;
