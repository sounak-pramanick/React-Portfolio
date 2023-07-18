import React from 'react';

const About = () => {
  return (
    <div 
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
        <div className="flex flex-col justify-center max-w-screen-lg w-full h-full mx-auto p-4">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            
            <p className="text-xl mt-20">
                Hi, I'm Sounak Pramanick, a detail-oriented Frontend Developer with a serious love for JavaScript, React and other frontend technologies. I'm a Computer Science & Engineering graduate from the batch of 2021. I've worked on several projects both professionally and personal projects where I had worked on complex logic involving the design and development UI of the applications with a focus on clean code. I love my work since I get to create something out of nothing and also get a chance to solve real world problems.
            </p>

            <br />

            <p className="text-xl">
                In my free time, I try to keep myself updated with the latest trends and technologies in the world of web. When I'm not coding, you can find me exploring different places and food or reading books.
            </p>
        </div>
    </div>
  )
}

export default About;