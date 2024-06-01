import React from 'react';
import { useTheme } from '@mui/material/styles';

const Contact = () => {

  const theme = useTheme();

  return (
    <div name="contact" className={`w-full h-fit bg-${theme.palette.background.default2} text-${theme.palette.text.primary} pb-24`}>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8 mt-16'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-600'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form 
                  action="https://getform.io/f/warkrrqb" 
                  method="POST"
                  className='flex flex-col w-full md:w-1/2'
                >
                    <input 
                      type="text" 
                      name="name" 
                      placeholder='Enter your name' 
                      required
                      className={`p-2 bg-transparent border-2 rounded-md text-${theme.palette.text.primary} focus:outline-none`}
                    />
                    <input 
                      type="text" 
                      name="email" 
                      placeholder='Enter your email' 
                      required
                      className={`p-2 my-4 bg-transparent border-2 rounded-md text-${theme.palette.text.primary} focus:outline-none`}
                    />
                    <textarea 
                      name="message" 
                      rows="10" 
                      placeholder='Enter your message'
                      required
                      className={`p-2 bg-transparent border-2 rounded-md text-${theme.palette.text.primary} focus:outline-none`}>
                    </textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-cente rounded-md md:hover:scale-110 duration-300'>
                    Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact