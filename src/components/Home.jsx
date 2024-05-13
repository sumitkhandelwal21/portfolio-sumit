import React from 'react'
import myImage from '../assets/sumit.png';
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b
        from-black via-black to-gray-800 pb-12 md:pb-0'>
      <div className='max-w-screen-lg mx-auto flex flex-col
         items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full mt-72 md:mt-8'>
          <p className='text-4xl font-hello text-blue-500 mb-2'>Hello !!!</p>
          <p className='text-4xl sm:text-7xl font-namefont text-white'>I'm Sumit Khandelwal</p>
          <p className='bg-blue-500 text-black w-fit py-1 px-6 mt-6 font-hello text-2xl font-extrabold hover:scale-110 duration-200'>Full Stack Developer</p>
          <p className='text-gray-400 py-4 max-w-md my-4'>
            I have 1.3 years of experience building
            and designing software.
            Currently, I love to work on Web application
            using technologies like
            React.js, Next.js, Node.js, MongoDB, MySQl, Tailwind.
          </p>
          <div className='mb-8 md:mb-0'>
           <a href='/Sumit_Resume.pdf' download >
            <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-green-800 cursor-pointer hover:scale-110 duration-200' >
                  Resume 
                  {/* <span className='group-hover:rotate-180 duration-300'> */}
                  <FiDownload size={25} className='ml-2'/>
                  {/* </span> */}
            </button>
           </a>
          </div>
        </div>
        <div className='md:mt-8'>
          <img src={myImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home