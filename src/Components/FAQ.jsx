import React, { useState } from "react";
import { SiGit } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";



function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in Java, Spring Boot, React, MySQL, and PostgreSQL. I focus on building secure, scalable full-stack applications with clean architecture and REST API integration.",
    },
    {
      question: "Are you open to job opportunities?",
      answer:
        "Yes, I am currently open to full-time SDE roles and internships where I can contribute and grow as a backend or full-stack developer.",
    },
    {
      question: "What kind of projects have you worked on?",
      answer:
        "I have built full-stack web applications including authentication systems, REST APIs, database-driven applications, and responsive UI interfaces.",
    },
    {
      question: "How do you approach backend development?",
      answer:
        "I focus on writing clean, modular code, implementing proper security practices, and designing scalable database structures with efficient API communication.",
    },
    {
      question: "How can someone contact you?",
      answer:
        "You can reach me through the contact form on this portfolio or via LinkedIn and email mentioned in my contact section.",
    },
  ];

  return (
    <div className="w-full md:w-3/4 max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="w-full text-left p-4 bg-gray-800 hover:bg-gray-700 transition duration-300"
            >
              <span className="font-semibold">{faq.question}</span>
            </button>

            {activeIndex === index && (
              <div className="p-4 bg-gray-900 text-gray-300 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-col gap-3 justify-center items-center">
        <p className="text-2xl font-bold text-center mt-6">Follow Me</p>
        <div className="flex flex-row gap-5">
          <a href="https://github.com/subhashis-sahu">
            <SiGit className="text-2xl text-red-500" />
          </a>
          <a href="https://www.linkedin.com/in/subhashis01/">
            <FaLinkedinIn className="text-2xl text-blue-100 font-bold"/>
          </a>
          <a href="https://www.instagram.com/iamsubh.a">
            <FaInstagram className="text-2xl text-pink-700 font-bold"/>
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default FAQ;
