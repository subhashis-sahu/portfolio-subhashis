import React, { useState, useEffect } from "react";

function Contact() {
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("");

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

    const res = await fetch(
      "https://subhashissahu.onrender.com/api/public/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    if (res.ok) {
      setAlertType("Success");

      setMessage("Message sent Succesfully");
      setshowAlert(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setAlertType("error");
      setMessage("Something went wrong");
      setshowAlert(true);
    }
  };
  const [showAlert, setshowAlert] = useState(false);
  useEffect(() => {
    if (!showAlert) return;

    const timer = setTimeout(() => {
      setshowAlert(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showAlert]);

  return (
    <div
      id="contact"
      className="px-10 py-20 grid grid-cols-1 w-full md:w-3/4 md:grid-cols-2 gap-10 items-center scroll-mt-20"
    >
      <div>
        <h3 className="text-3xl font-semibold mb-4">Got a project in mind?</h3>
        <p className="text-gray-400">
          Let’s work together to create something amazing.
        </p>
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
      {showAlert && (
        <div
          className={`fixed bottom-5 right-5 ${alertType == "Success" ? "bg-green-600" : "bg-red-600"}  text-white px-4 py-3 rounded-lg shadow-lg`}
        >
          {message}
          <button
            className="ml-3 text-sm underline"
            onClick={() => setshowAlert(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Contact;
