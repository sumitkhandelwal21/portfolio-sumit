import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import { TbBrandLeetcode } from "react-icons/tb";

const SocialLinks = () => {

  const mob_social_links = [
    {
        id: 1,
        child: (<><FaLinkedin size={25} color='blue'/></>),
        link_name:"LinkedIn",
        href: 'https://www.linkedin.com/in/sumit-khandelwal-4aa514191/'
    },
    {
        id: 2,
        child: (<><FaGithub size={25} color='black'/></>),
        link_name:"GitHub",
        href: 'https://github.com/sumitkhandelwal21'
    },
    {
        id: 3,
        child: (<><HiOutlineMail size={25} color='red'/></>),
        link_name:"Mail",
        href: "mailto:sumitguptadsa21@gmail.com"
    },
    {
        id: 4,
        child: (<><TbBrandLeetcode size={25} color='orange'/></>),
        link_name:"LeetCode",
        href: 'https://leetcode.com/u/spaceHack/' 
    },
  ]

  const social_links = [
    {
        id: 1,
        child: (<><span style={{fontWeight:'bold'}}>LinkedIn</span> <FaLinkedin size={25} color='blue'/></>),
        href: 'https://www.linkedin.com/in/sumit-khandelwal-4aa514191/',
        style: 'rounded-tr-md'
    },
    {
        id: 2,
        child: (<><span style={{fontWeight:'bold'}}>GitHub</span> <FaGithub size={25} color='black'/></>),
        href: 'https://github.com/sumitkhandelwal21'
    },
    {
        id: 3,
        child: (<><span style={{fontWeight:'bold'}}>Mail</span> <HiOutlineMail size={25} color='red'/></>),
        href: "mailto:sumitguptadsa21@gmail.com"
    },
    {
        id: 4,
        child: (<><span style={{fontWeight:'bold'}}>LeetCode</span> <TbBrandLeetcode size={25} color='orange'/></>),
        href: 'https://leetcode.com/u/spaceHack/',
        style: 'rounded-br-md'
    },
  ];
  return (
    <>
    <div className='xl:hidden flex flex-row justify-center items-center fixed bottom-0 left-0 w-full bg-black'>
    <ul className="flex justify-center items-center py-2">
       {mob_social_links.map(({ id, child, link_name, href, download, style }) => (
        <li key={id} className="px-4 py-2 mx-2 bg-gray-200 rounded-md flex flex-col justify-center items-center w-16">
            <a href={href} className='text-black' target='__blank' download={download} rel="noreferrer">
                {child}
            </a>
            <p style={{fontSize:'10px', marginTop:'2px', color:'black', fontWeight:'bold'}}>{link_name}</p>
        </li>
        ))}
    </ul>
    </div> 
    <div className='hidden xl:flex flex-col top-[35%] left-0 fixed'>
        <ul>
           {social_links.map(({id, child, href, download, style}) => (
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-200 hover:rounded-md duration-300 hover:ml-[-10px] "+ style}> 
                <a href={href} className='flex justify-between items-center w-full text-black' target='__blank' download={download} rel="noreferrer">
                    {child}
                </a> 
            </li>
            ))}
        </ul>
    </div>
    </> 
  )
}

export default SocialLinks