import React from 'react';
import { projectData } from './data/projectData';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
  return (
    <div
        name="portfolio"
        className="pt-36 md:pt-0 bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">My Work</p>
                <p className="py-6">Check out some of my projects right here:-</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {
                    projectData.map(({id, src, live, code}) => {
                        return (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
                                <img 
                                    src={src}
                                    alt=""
                                    className="rounded-md"
                                />
                                <div className="flex justify-center items-center">
                                    <a href={live} className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 text-center flex justify-center"><FiExternalLink size={15} className="mr-2 mt-1"></FiExternalLink>Live</a>
                                    <a href={code} className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 text-center flex justify-center"><FaGithub size={15} className='mr-2 mt-1'></FaGithub>Code</a>
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </div>
    </div>
  )
}

export default Portfolio;