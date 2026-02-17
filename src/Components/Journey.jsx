import React from "react";

function Journey() {
  const journeyData = [
    {
      image: "/images/child1.jpg",
      text: "This was my early childhood. A time filled with innocence, curiosity, and imagination."
    },
    {
      image: "/images/child2.jpg",
      text: "During my school days, I began exploring computers and developed interest in technology."
    },
    {
      image: "/images/child3.jpg",
      text: "In high school, I discovered programming and slowly started loving coding."
    },
    {
      image: "/images/child4.jpg",
      text: "College shaped my technical skills and strengthened my passion for development."
    },
    {
      image: "/images/child5.jpg",
      text: "Today, I continue learning and building projects with the same curiosity I had as a child."
    }
  ];

  return (
    <section className="mt-5 px-6 py-20 bg-[#1c222a] text-gray-200">
      <div className="max-w-5xl mx-auto space-y-24">

        {journeyData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >

            {/* IMAGE */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={item.image}
                alt="Journey"
                className="
                  w-full
                  max-w-md
                  h-72
                  object-cover
                  rounded-xl
                  shadow-lg
                  transition duration-500
                  hover:scale-105
                "
              />
            </div>

            {/* TEXT */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-lg leading-relaxed text-gray-300">
                {item.text}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Journey;
