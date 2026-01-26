import { useState } from "react";

function AddWork() {
  const [work, setWork] = useState({
    id: "",
    tittle: "",
    describtion: "",
    techStack: ""
  });

  const handleChange = (e) => {
    setWork({
      ...work,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://subhashissahu.onrender.com/admin/works", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include", // 🔥 IMPORTANT (session)
      body: JSON.stringify(work)
    });

    if (res.ok) {
      alert("Work added successfully ✅");
      setWork({ id: "", tittle: "", describtion: "", techStack: "" });
    } else {
      alert("Failed to add work ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="number"
        name="id"
        placeholder="Work ID"
        value={work.id}
        onChange={handleChange}
        
      />

      <input
        type="text"
        name="tittle"
        placeholder="Title"
        value={work.tittle}
        onChange={handleChange}
        required
      />

      <textarea
        name="describtion"
        placeholder="Description"
        value={work.describtion}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="techStack"
        placeholder="Tech Stack (React, Spring Boot, MySQL)"
        value={work.techStack}
        onChange={handleChange}
        required
      />

      <button type="submit">Add Work</button>
    </form>
  );
}

export default AddWork;
