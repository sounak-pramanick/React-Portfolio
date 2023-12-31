import React from 'react';

const Contact = () => {
  return (
    <div 
        name="contact"
        className="pt-80 md:pt-0 w-full h-full bg-gradient-to-b from-gray-800 to-black p-4 text-white"
    >
        <div 
            className="flex flex-col justify-center mx-auto p-4 max-w-screen-lg h-full"
        >
            <div className="pb-8">
                <p 
                    className="text-4xl font-bold inline border-b-4 border-gray-500"
                >
                    Contact
                </p>
                <p className="py-6">Submit the form below if you have an exciting job opportunity for me</p>
            </div>

            <div className="flex justify-center items-center">
                <form 
                    action="https://formcarry.com/s/xw0QbjD9XB"
                    method="POST"
                    className="flex flex-col w-full md:w-1/2"
                >
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <input 
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <textarea 
                        name="message"
                        placeholder="Enter your message"
                        rows="10"
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    ></textarea>
                    <button 
                        className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto my-8 rounded-md flex items-center hover:scale-110 duration-300"
                    >
                        Let's Talk
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;