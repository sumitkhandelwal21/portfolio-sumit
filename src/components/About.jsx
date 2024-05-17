import React from 'react';
import { useTheme } from '@mui/material/styles';

const About = () => {
  
  const theme = useTheme();
  
  return (
    <div name="about" className={`w-full h-fit bg-${theme.palette.background.default2} text-${theme.palette.text.primary}`}>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 mt-16'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-600'>About</p>
            </div>
            <p className='text-xl mt-6'>
                My name is Sumit Khandelwal, I am a Computer Science graduate from Global Institute of Technology, Jaipur. 
                Currently working as a Software Engineer at InfoObjects Software Pvt. Ltd. 
                My expertise lies in implementing diverse functionalities for the Banana University project, a secure global peer-learning platform for children with parental engagement. 
                Proficient in React.js, Next.js, Node.js, Nest.js and MySQL, etc. 
            </p>
            <br />
            <p className='text-xl'>
                I have a track record of success in competitive programming, achieving notable rankings 
                such as AIR-662 in Innovate India Coding Championship and AIR-499 in Meta Hacker Cup-2022. 
            </p>
        </div>
    </div>
  )
}

export default About