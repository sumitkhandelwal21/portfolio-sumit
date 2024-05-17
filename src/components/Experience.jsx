import React from 'react';
import InfoIcon from '../assets/info_icon.jpg';
import { useTheme } from '@mui/material/styles';

const Experience = () => {

  const theme = useTheme();

  return (
    <div name="experience" className={`w-full h-fit bg-${theme.palette.background.default1} text-${theme.palette.text.primary}`}>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 mt-16'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-600'>Experience</p>
                <p className='py-6'>Check out my work experience here</p>
            </div>
            <div className='px-2 sm:px-0'>
            <div className='flex flex-col md:flex-row p-6 w-full shadow-md shadow-gray-500 rounded-lg h-fit md:hover:scale-105 md:duration-500'>
                <div className={`h-auto w-full md:w-3/4 rounded-t-lg text-${theme.palette.text.primary} md:rounded-tr-none md:rounded-bl-lg flex flex-col justify-center items-center p-4`} style={{backgroundColor: `${theme.palette.navbg}`}}>
                    <img src={InfoIcon} alt="" className='rounded-md duration-200 hover:scale-105 h-24 mb-4'/>
                    <p className='text-1xl font-bold'>InfoObjects Inc. | Software Engineer</p>
                    <p className='text-1xl'>Jan 2023 – Present | Jaipur, Rajasthan</p>
                    <p className='mt-8' style={{fontSize:'15px'}}>Tech Stacks :- HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Nest.js, React-MUI, MySQL, etc.</p>
                </div>
                <div className='h-auto w-full mt-2 md:mt-0 md:ml-12 p-4'>
                    <ul style={{listStyleType: 'disc', fontSize:'15px'}}>
                        <li>
                            Implemented a robust Task Scheduling functionality in a Next.js application,
                            utilizing the cron library and nodemailer module. This functionality was
                            designed to automatically dispatch email notifications at predefined intervals,
                            informing users about newly uploaded work.
                        </li>
                        <li>
                            Designed and implemented a robust video upload functionality that
                            accommodates various formats. Implemented distinct group visibility settings,
                            allowing users to designate videos as either public or private within specific
                            groups.
                        </li>
                        <li>
                            Developed comprehensive stored procedures for each table utilized in the
                            video upload process within the MySQL database, ensuring streamlined and
                            efficient data management.
                        </li>
                        <li>
                            Accountable for the creation and implementation of API endpoints and
                            Handlebars (HBS) email templates.
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
  
}

export default Experience

