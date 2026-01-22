import React from 'react'

function Work() {
  return (
    <div className='px-10 py-20' id='works'>
        <h3 className="text-3xl font-semibold mb-8">My recent works</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-[#232a33] rounded-lg p-4 hover:scale-105 transition">
              <img
                src={`/works/work${item}.png`}
                alt="Work"
                className="rounded mb-4"
              />
              <p className="text-sm text-gray-400">UI Design Project</p>
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default Work
