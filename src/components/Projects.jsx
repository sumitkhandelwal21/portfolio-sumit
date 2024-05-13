import React from 'react';
import port from '../assets/projects/port.png';
import portMob from '../assets/projects/port-mob.jpeg';
import teevra from '../assets/projects/teevra.png';
import teevraMob from '../assets/projects/teevra-mob.jpeg';
import quiz from '../assets/projects/quiz.png';
import quizMob from '../assets/projects/quiz-mob.jpeg';

const Projects = () => {

  const projs = [
    {id: 1, src1: port, src2: portMob, web_link:'https://portfolio-sumit.netlify.app/', github_link:'https://github.com/sumitkhandelwal21/portfolio-sumit'},
    {id: 2, src1: teevra, src2: teevraMob, web_link:'https://teevra-news.netlify.app/', github_link:'https://github.com/sumitkhandelwal21/teevra-news'},
    {id: 3, src1: quiz, src2: quizMob, web_link:'https://quiz-performance-app.netlify.app/', github_link:'https://github.com/sumitkhandelwal21/quiz-app'}
  ];
  
  
  return (
    <div name="projects" className='w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 mt-16'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-600'>Projects</p>
                <p className='py-6'>Check out some of my work here</p>
            </div>
            
            <div className='grid md:grid-cols-2 gap-8 px-2 sm:px-0'>
              {projs.map(({id, src1, src2, web_link, github_link}) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <div className='flex flex-row w-full'>
                      <img src={src1} alt="" className='rounded-md duration-200 hover:scale-110 w-3/4 cursor-pointer'/>
                      <img src={src2} alt="" className='rounded-md duration-200 hover:scale-110 w-1/4 cursor-pointer'/>
                    </div>
                    <div className='flex items-center justify-center text-center'>
                        <a href={web_link} target='__blank' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                        <a href={github_link} target='__blank' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                    </div>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Projects