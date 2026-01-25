import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/public/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong ❌");
    }
  };

  return (
    <div id="contact" className="px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-3xl font-semibold mb-4">Got a project in mind?</h3>
        <p className="text-gray-400">Let’s work together to create something amazing.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-[#232a33] p-6 rounded-lg space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded"
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded h-28"
          required
        />

        <button className="bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded text-black font-medium">
          Send message
        </button>
      </form>
    </div>
  );
}

export default Contact;
