import { useState } from "react";

function AddWork() {
  const [work, setWork] = useState({
    tittle: "",
    describtion: "",
    techStack: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setWork({
      ...work,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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

      alert("Work added successfully ✅");
      setWork({ tittle: "", describtion: "", techStack: "" });
    } catch {
      alert("Failed to add work ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-lg">
      <h2 className="text-xl font-semibold mb-4">Add New Work</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="tittle"
            placeholder="Project title"
            value={work.tittle}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="describtion"
            placeholder="Short project description"
            value={work.describtion}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Tech Stack */}
        <div>
          <label className="block text-sm font-medium mb-1">Tech Stack</label>
          <input
            type="text"
            name="techStack"
            placeholder="React, Spring Boot, PostgreSQL"
            value={work.techStack}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg text-white transition
            ${loading ? "bg-gray-400" : "bg-black hover:bg-gray-800"}`}
        >
          {loading ? "Adding..." : "Add Work"}
        </button>
      </form>
    </div>
  );
}

export default AddWork;
