import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = ({hiddenLinks}) => {
  return (
    <div className={`${hiddenLinks} lg:flex flex-col top-[35%] left-0 fixed`}>
        <ul>
            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] rounded-tr-md hover:rounded-md duration-300 bg-gray-500">
                <a 
                    href="https://www.linkedin.com/in/sounak-pramanick-714b6819a/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between items-center w-full text-white"
                >
                    <>
                        LinkedIn <FaLinkedin size={30} />
                    </>
                </a>
            </li>

            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
                <a 
                    href="https://github.com/sounak-pramanick"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between items-center w-full text-white"
                >
                    <>
                        Github <FaGithub size={30} />
                    </>
                </a>
            </li>

            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
                <a 
                    href="mailto:sounakmsd7@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between items-center w-full text-white"
                >
                    <>
                        Email <HiOutlineMail size={30} />
                    </>
                </a>
            </li>

            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] rounded-br-md hover:rounded-md duration-300 bg-gray-500">
                <a 
                    href="https://drive.google.com/file/d/1tTvMN7VDv-WMkwALWG2ZZF7GJMdS7jji/view"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between items-center w-full text-white"
                >
                    <>
                        Resume <BsFillPersonLinesFill size={30} />
                    </>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks;