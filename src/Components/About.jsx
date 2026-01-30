import React from "react";

function About() {
  return (
    <section id="about" className="min-h-screen scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-20">
        <div className="flex justify-center">
          <img src="/illustrations/about.png" alt="About" className="w-72" />
        </div>
        <div>
          <h3 className="text-3xl font-semibold mb-4">About me</h3>
          <p className="text-gray-400 leading-relaxed">
            Hi, I’m Subhashis Sahu, a passionate full-stack developer and MCA
            student at ITER, SOA University, Bhubaneswar. I enjoy building
            real-world applications with clean architecture, secure
            authentication, and modern UI/UX. I’ve worked across both frontend
            and backend—developing responsive web interfaces using React and
            Tailwind CSS, and robust backend services with Spring Boot, JWT
            authentication, and PostgreSQL. I started my journey with Android
            and gradually transitioned into web development, where I now focus
            on building scalable, production-ready applications. I’m
            particularly interested in backend security, REST APIs, and system
            design, and I enjoy debugging complex issues and optimizing
            performance. I’m always eager to learn new technologies and turn
            ideas into reliable software solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
