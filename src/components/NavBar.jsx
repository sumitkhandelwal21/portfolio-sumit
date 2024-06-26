import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from 'react-scroll';
import portfolio from '../assets/portfolio.png';
import { useTheme } from '@mui/material/styles';

const NavBar = ({setIsDarkMode}) => {

  const theme = useTheme();

  const [nav, setNav] = useState(false);

  const links = [
    {id:1, link:'home'},
    {id:2, link:'about'},
    {id:3, link:'experience'},
    {id:4, link:'projects'},
    {id:5, link:'skills'},
    {id:6, link:'contact'}
  ];
  return (
    <div className={`flex justify-between items-center w-full h-16 px-4 text-${theme.palette.text.primary} fixed`} style={{backgroundColor: `${theme.palette.navbg}`}}>
        <div className='flex flex-row justify-center items-center'>
            {/* <ImAddressBook size={27} color='#FF8C00'/> */}
            <img src={portfolio} alt="" style={{height:'26px', width:'26px'}}/>
            <h1 className='text-3xl md:text-4xl font-signature ml-2 mb-2' style={{color:'#FF8C00'}}>PortFolio</h1>
        </div>
        <ul className='hidden md:flex justify-center items-center'>
            { theme.palette.mode === 'light' ? 
                <MdDarkMode size={22} onClick={() => setIsDarkMode((prevMode) => !prevMode)} className='cursor-pointer hover:scale-125 duration-200'/>
                : <MdOutlineLightMode size={22} onClick={() => setIsDarkMode((prevMode) => !prevMode)} className='cursor-pointer hover:scale-125 duration-200'/>
            }
            &nbsp; &nbsp; &nbsp;
            {links.map(({id, link}) => (
            <li key={id} className='px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-orange-500 duration-200'>
                <Link to={link} smooth duration={500}>{link}</Link>
            </li>
            ))}
        </ul>
        <div className='flex justify-center items-center md:hidden'>
        {!nav ? 
            theme.palette.mode === 'light' ?
                <MdDarkMode size={22} onClick={() => setIsDarkMode((prevMode) => !prevMode)} className='cursor-pointer mr-6' />
                : <MdOutlineLightMode size={22} onClick={() => setIsDarkMode((prevMode) => !prevMode)} className='cursor-pointer mr-6' />
        : null}
        <div onClick={()=> setNav(!nav)} className={`cursor-pointer pr-4 z-10 text-${theme.palette.text.primary}`}>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>
        </div>
        
        {nav && 
        <ul className={`flex flex-col items-center absolute top-0 right-0 w-3/4 h-screen text-${theme.palette.text.primary} md:hidden pt-20`} style={{ boxShadow: '5px 0 5px 12px rgba(209, 213, 219, 0.7)', backgroundColor: `${theme.palette.navbg}` }}>
            {links.map(({id, link}) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-2xl'>
                <Link to={link} smooth duration={500} onClick={()=>setNav(!nav)}>{link}</Link>
            </li>
            ))}
        </ul>
        }
    </div>
  )
}

export default NavBar