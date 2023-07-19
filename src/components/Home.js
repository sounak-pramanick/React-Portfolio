import React from 'react';
import HeroImage from '../assets/hero-image.svg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll'

const Home = ({showLinks, setShowLinks}) => {
  return (
    <div 
        name="home"
        className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
        <div className="flex flex-col justify-center items-center max-w-screen-lg h-full mx-auto px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 
                    className="text-white text-3xl sm:text-6xl font-bold"
                >
                    I'm a 
                    <Typewriter 
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(" Frontend Developer")
                                .pauseFor(3000)
                                .deleteAll()
                                .typeString(" React JS Developer")
                                .pauseFor(3000)
                                .deleteAll()
                                .typeString(" Tech Enthusiast")
                                .pauseFor(3000)
                                .start();
                        }}
                        options={{
                            autoStart: true,
                            loop: true
                        }}
                    />
                </h2>
                <p 
                    className="text-gray-500 py-4 max-w-md"
                >
                    I have 2 years of experience building and designing software. I love to work on web applications using technologies like HTML, CSS, JavaScript, React and Tailwind
                </p>

                <div className="flex">
                    <Link to="portfolio" smooth duration={500} className="mx-3 group flex items-center text-white w-fit px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Projects
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                    </Link>

                    <button onClick={() => setShowLinks(!showLinks)} className="lg:hidden mx-3 group flex items-center text-white w-fit px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        My Links
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                    </button>
                </div>
            </div>

            <img src={HeroImage} alt="profile" className="rounded-2xl mx-auto h-[50%] w-2/3 md:w-2/5" />
        </div>
    </div>
  )
}

export default Home;