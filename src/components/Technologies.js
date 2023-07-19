import React from 'react';
import { technologies } from './data/technologies';

const Technologies = () => {
  return (
    <div
      name="technologies"
      className="pt-80 md:pt-0 bg-gradient-to-b from-black to-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl inline font-bold border-b-4 border-gray-500">Technologies</p>
          <p className="py-6">These are some of the technologies I've worked with:-</p>
        </div>

        <div 
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
        >
          {technologies.map(({id, src, alt, title, style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img 
                src={src}
                alt={alt} 
                title={title}
                className="w-20 mx-auto"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Technologies;