import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-black text-white fixed z-10">
        <Link to="home" smooth duration={500}><div className="flex justify-center items-center cursor-pointer">
            <span className="text-3xl text-gray-500">&lt;</span>
            <h1 className="text-5xl font-signature ml-2">    
                Sounak
            </h1>
            <span className="text-3xl ml-2 text-gray-500">/&gt;</span>
        </div></Link>
        
        <ul className="hidden md:flex">
            <Link to="home" smooth duration={500}><li className="hidden md:flex px-4 text-gray-400 font-medium cursor-pointer capitalize hover:scale-105 duration-200">home</li></Link>
            <Link to="about" smooth duration={500}><li className="hidden md:flex px-4 text-gray-400 font-medium cursor-pointer capitalize hover:scale-105 duration-200">about</li></Link>
            <Link to="experience" smooth duration={500}><li className="hidden md:flex px-4 text-gray-400 font-medium cursor-pointer capitalize hover:scale-105 duration-200">experience</li></Link>
            <Link to="portfolio" smooth duration={500}><li className="hidden md:flex px-4 text-gray-400 font-medium cursor-pointer capitalize hover:scale-105 duration-200">portfolio</li></Link>
            <Link to="technologies" smooth duration={500}><li className="hidden md:flex px-4 text-gray-400 font-medium cursor-pointer capitalize hover:scale-105 duration-200">technologies</li></Link>
            <Link to="contact" smooth duration={500}><li className="hidden md:flex px-4 text-gray-400 font-medium cursor-pointer capitalize hover:scale-105 duration-200">contact</li></Link>
        </ul>
        
        <div 
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            onClick={() => setNav(prevNav => !prevNav)}
        >
            {nav ? <FaTimes size={30} className="" /> : <FaBars size={30} className="" />}            
        </div>

        {nav && (
            <ul className="flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 absolute top-0 left-0 w-full h-screen text-gray-500">
                <Link onClick={() => setNav(prevNav => !prevNav)} to="home" smooth duration={500}><li className="px-4 py-6 text-gray-400 cursor-pointer capitalize text-4xl">home</li></Link>
                <Link onClick={() => setNav(prevNav => !prevNav)} to="about" smooth duration={500}><li className="px-4 py-6 text-gray-400 cursor-pointer capitalize text-4xl">about</li></Link>
                <Link onClick={() => setNav(prevNav => !prevNav)} to="experience" smooth duration={500}><li className="px-4 py-6 text-gray-400 cursor-pointer capitalize text-4xl">experience</li></Link>
                <Link onClick={() => setNav(prevNav => !prevNav)} to="portfolio" smooth duration={500}><li className="px-4 py-6 text-gray-400 cursor-pointer capitalize text-4xl">portfolio</li></Link>
                <Link onClick={() => setNav(prevNav => !prevNav)} to="technologies" smooth duration={500}><li className="px-4 py-6 text-gray-400 cursor-pointer capitalize text-4xl">technologies</li></Link>
                <Link onClick={() => setNav(prevNav => !prevNav)} to="contact" smooth duration={500}><li className="px-4 py-6 text-gray-400 cursor-pointer capitalize text-4xl">contact</li></Link>
            </ul>
        )}

        
    </div>
  )
}

export default Navbar;