import { useState } from "react";

function AddWork() {
  const [work, setWork] = useState({
    tittle: "",
    describtion: "",
    techStack: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setWork({
      ...work,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(
        "https://subhashissahu.onrender.com/api/admin/works",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
          body: JSON.stringify(work),
        }
      );

      if (!res.ok) throw new Error();

      setMessage("Work added successfully ✅");
      setWork({ tittle: "", describtion: "", techStack: "" });
    } catch {
      setMessage("Failed to add work ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Add New Work
        </h2>

        {message && (
          <div className="mb-4 text-center text-sm font-medium text-gray-600">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tittle */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Tittle
            </label>
            <input
              type="text"
              name="tittle"
              value={work.tittle}
              onChange={handleChange}
              required
              placeholder="Enter project tittle"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          {/* Describtion */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Describtion
            </label>
            <textarea
              name="describtion"
              value={work.describtion}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Enter project describtion"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          {/* Tech Stack */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Tech Stack
            </label>
            <input
              type="text"
              name="techStack"
              value={work.techStack}
              onChange={handleChange}
              required
              placeholder="React, Spring Boot, PostgreSQL"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl text-white font-medium transition duration-200
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black hover:bg-gray-800"
              }`}
          >
            {loading ? "Adding..." : "Add Work"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddWork;