import React from 'react'

 
function About() {
  return (
    <section id='about' className='min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-20'>
        <div className="flex justify-center">
          <img src="/illustrations/about.png" alt="About" className="w-72" />
        </div>
        <div>
          <h3 className="text-3xl font-semibold mb-4">About me</h3>
          <p className="text-gray-400 leading-relaxed">
            I’m Subhashis Sahu, a web developer and UI designer focused on building clean, modern, and user-friendly digital experiences. Currently pursuing my MCA at ITER, SOA University, I work with React and modern CSS frameworks to create responsive and visually appealing interfaces. I’m passionate about turning ideas into functional products and continuously improving my skills to build impactful web applications.
          </p>
        </div>
      
    </div>
    </section>
  )
}

export default About
