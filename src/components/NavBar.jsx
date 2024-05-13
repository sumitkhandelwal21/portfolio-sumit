import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import portfolio from '../assets/portfolio.png'

const NavBar = () => {

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
    <div className="flex justify-between items-center w-full h-16 px-4 text-white bg-black fixed">
        <div className='flex flex-row justify-center items-center'>
            {/* <ImAddressBook size={27} color='#FF8C00'/> */}
            <img src={portfolio} alt="" style={{height:'26px', width:'26px'}}/>
            <h1 className='text-3xl md:text-4xl font-signature ml-2 mb-2' style={{color:'#FF8C00'}}>PortFolio</h1>
        </div>
        <ul className='hidden md:flex'>
            {links.map(({id, link}) => (
            <li key={id} className='px-4 cursor-pointer capitalize font-medium 
              text-gray-400 hover:scale-105 hover:text-orange-500 duration-200'>
                <Link to={link} smooth duration={500}>{link}</Link>
            </li>
            ))}
        </ul>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>
        
        {nav && 
        <ul className='flex flex-col justify-center items-center
            absolute top-0 left-0 w-full h-screen bg-gradient-to-b 
            from-black to-gray-800 text-gray-400 md:hidden'>
            {links.map(({id, link}) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-3xl'>
                <Link to={link} smooth duration={500} onClick={()=>setNav(!nav)}>{link}</Link>
            </li>
            ))}
        </ul>
        }
    </div>
  )
}

export default NavBar