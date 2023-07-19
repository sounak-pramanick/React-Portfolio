import React from 'react';

const Experience = () => {
  return (
    <div
        name="experience"
        className="py-[30rem] pt-[36rem] md:py-0 md:pt-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Work Experience</p>
            </div>
            <div className="pb-8">
                <p className="text-2xl font-medium">Cognizant Technology Solutions</p>
                <p className="mb-[-10px]">Frontend Developer (Programmer Analyst)</p>
                <p>Aug 2021 - Present</p>
            </div>
            <div>
                <ul>
                    <li className='py-1'>• Collaborated with the development team to design and develop responsive user interfaces and ensure cross-browser compatibility using React.js for a prominent US-based client.</li>
                    <li className='py-1'>• Successfully migrated class-based to functional components, improving overall efficiency and maintainability.</li>
                    <li className='py-1'>• Implemented key features such as listing sections, custom categories, listing cards, and rent and sell pages using HTML5, CSS3, Bootstrap5 and React, resulting in a 45% increase in client satisfaction.</li>
                    <li className='py-1'>• Demonstrated expertise in utilizing ReactJS Forms, Events, Router & Hooks to enhancing website's functionality.</li>
                    <li className='py-1'>• Employed Redux Toolkit for efficient state management of the application, ensuring seamless user experiences.</li>
                    <li className='py-1'>• Fixed bugs and conducted thorough testing by writing test cases using Jest, achieving code coverage of over 75%.</li>
                    <li className='py-1'>• Created UI components with VS Code IDE, while seamlessly integrating with REST APIs through Fetch & Axios.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Experience;