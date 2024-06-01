import React from 'react'
import myImage from '../assets/sumit_img.png';
import { FiDownload } from "react-icons/fi";
import { useTheme } from '@mui/material/styles';

const Home = () => {
  
    const yearsBetween = (startDate) => {
      const start = new Date(startDate);
      const now = new Date();

      const diffInMilliseconds = now - start;
      
      const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
      const diffInYears = diffInMilliseconds / millisecondsPerYear;

      return diffInYears;
  }

  const startingDate = "2023-01-18"; // YYYY-MM-DD format
  const exp_years = yearsBetween(startingDate).toFixed(1);

  const theme = useTheme();
  
  return (
    <div name="home" className={`h-fit md:h-screen w-full bg-${theme.palette.background.default1}`}>
      <div className='max-w-screen-lg mx-auto flex flex-col
         items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full mt-24 md:mt-8'>
          <p className='text-4xl font-hello text-blue-500 mb-2'>Hello !!!</p>
          <p className={`text-4xl sm:text-7xl font-namefont text-${theme.palette.text.primary}`}>I'm Sumit Khandelwal</p>
          <p className='bg-blue-500 text-black w-fit py-1 px-6 mt-6 font-hello text-2xl font-extrabold md:hover:scale-110 duration-200'>Full Stack Developer</p>
          <p className='text-gray-400 py-4 max-w-md my-4'>
            {`I have ${exp_years} years of experience building
            and designing software.
            Currently, I love to work on Web application
            using technologies like
            React.js, Next.js, Node.js, MongoDB, MySQl, Tailwind.`}
          </p>
          <div className='mb-8 md:mb-0'>
           <a href='/Sumit_Resume.pdf' download >
            <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-green-800 cursor-pointer md:hover:scale-110 duration-200' >
                  Resume 
                  {/* <span className='group-hover:rotate-180 duration-300'> */}
                  <FiDownload size={25} className='ml-2'/>
                  {/* </span> */}
            </button>
           </a>
          </div>
        </div>
        <div className='md:mt-8'>
          <img src={myImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full md:hover:scale-105 md:duration-300' style={{border:'2px solid gray', backgroundColor:'transparent'}}/>
        </div>
      </div>
    </div>
  )
}

export default Home