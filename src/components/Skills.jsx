import React from 'react';
import html from '../assets/skills/html.png';
import css from '../assets/skills/css.png';
import javascript from '../assets/skills/javascript.png';
import typescript from '../assets/skills/typescript.png'
import nextjs from '../assets/skills/nextjs.png';
import reactImage from '../assets/skills/react.png';
import node from '../assets/skills/node.png';
import nest from '../assets/skills/nestjs.png';
import mongo from '../assets/skills/mongo.png';
import github from '../assets/skills/github.png';
import github2 from '../assets/skills/github2.png';
import mysql from '../assets/skills/mysql.png';
import tailwind from '../assets/skills/tailwind.png';
import { useTheme } from '@mui/material/styles';

const Skills = () => {

  const theme = useTheme();
  
  const techs = [
    {id: 1, src: html, title: 'HTML', style:'shadow-orange-500'},
    {id: 2, src: css, title: 'CSS', style:'shadow-blue-500'},
    {id: 3, src: javascript, title: 'JavaScript', style:'shadow-yellow-500'},
    {id: 4, src: typescript, title: 'TypeScript', style:'shadow-sky-800'},
    {id: 5, src: nextjs, title: 'Next Js', style:'shadow-gray-400'},
    {id: 6, src: reactImage, title: 'React Js', style:'shadow-sky-400'},
    {id: 7, src: node, title: 'Node Js', style:'shadow-green-500'},
    {id: 8, src: nest, title: 'Nest Js', style:'shadow-pink-700'},
    {id: 9, src: mongo, title: 'MongoDB', style:'shadow-green-800'},
    {id: 10, src: theme.palette.mode==='dark' ? github : github2, title: 'GitHub', style:'shadow-gray-600'},
    {id: 11, src: mysql, title: 'MySQL', style:'shadow-blue-500'},
    {id: 12, src: tailwind, title: 'Tailwind', style:'shadow-green-300'},
    
  ];
  
  return (
    <div name="skills" className={`bg-${theme.palette.background.default1} w-full h-fit text-${theme.palette.text.primary}`}>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-ful'>
            <div className='pb-8 mt-16'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-600'>Skills</p>
                <p className='py-6'>There are the technologies I'have worked with</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center px-2 sm:px-0'>
            {techs.map(({id, src, title, style}) => (
                <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg ' + style}>
                    <img src={src} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  );

}

export default Skills