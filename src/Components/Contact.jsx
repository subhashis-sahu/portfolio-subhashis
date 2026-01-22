import React from 'react'

function Contact() {
  return (
    <div id='contact' className='px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center '>  
        <div>
          <h3 className="text-3xl font-semibold mb-4">Got a project in mind?</h3>
          <p className="text-gray-400">Let’s work together to create something amazing.</p>
        </div>
        <form className="bg-[#232a33] p-6 rounded-lg space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded"
          />
          <textarea
            placeholder="Your message"
            className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded h-28"
          ></textarea>
          <button className="bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded text-black font-medium">
            Send message
          </button>
        </form>
      
    </div>
  )
}

export default Contact
