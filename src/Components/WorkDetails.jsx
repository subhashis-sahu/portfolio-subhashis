import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function WorkDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [work, setWork] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://subhashissahu.onrender.com/api/public/works/${id}`)
      .then((res) => res.json())
      .then((data) => setWork(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f141a] text-gray-400">
        Loading project details...
      </div>
    );
  }

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f141a] text-red-400">
        Work not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f141a] to-[#1c222a] flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full bg-[#1c222a] rounded-3xl shadow-2xl p-10 border border-gray-700 transition-all duration-300">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-sm text-gray-400 hover:text-white transition"
        >
          ← Go Back
        </button>

        {/* Title */}
        <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
          {work.tittle}
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          {work.describtion}
        </p>

        {/* Tech Stack */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
            Tech Stack
          </h4>

          <div className="flex flex-wrap gap-3">
            {work.techStack?.split(",").map((tech, index) => (
              <span
                key={index}
                className="px-4 py-1.5 bg-gray-800 text-gray-200 text-sm rounded-full border border-gray-600 hover:bg-gray-700 transition"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default WorkDetails;