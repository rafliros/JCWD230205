// Import React
import React from 'react';

// Import Navbar css
import './navbar.css'

// Import Logo
import Logo from '../supports/assets/logo.png'; 

// Import Link Router-Dom
import {Link} from 'react-router-dom';

// Import Icon Menu
import { FaBars, FaTimes } from "react-icons/fa";

// Import Use State
import { useState } from 'react';


const Navbar = () => {

    const Links =[
        {name:"HOME",link:"/"},
        {name:"ROOMS",link:"/rooms"},
        {name:"BOOKING",link:"/booking"},
        {name:"LOGIN",link:"/login"},
        {name:"SIGNUP",link:"/signup"},
      ];

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <div className='shadow-lg w-full fixed top-0 left-0'>

            <div className='md:flex items-center justify-between bg-white  py-4 md:px-10 px-7'>

                
                <span >
                    <Link to='/'>
                    <img className='w-24' src={Logo} alt='logo'/>
                    </Link>
                </span>
                

                
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto 
                              z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
                              ${click ? 'top-28 ':'top-[-490px]'}`}>
                    {
                    Links.map((link)=>(
                        <li  key={link.name} className='navhov font-bold md:ml-8 text-xl md:my-0 my-7'>
                        <Link to={link.link} className='text-[#09958C] hover:text-[#11BEB3] '>{link.name}</Link>
                        </li>
                    ))
                    }
                </ul>
                

                <div className='absolute right-8 top-12 md:hidden' onClick={handleClick}>
                    {click ? (<FaTimes size={25} style={{ color: 'black' }} />) : (<FaBars size={25} style={{ color: 'black' }} />)}
                </div>

            </div>

        </div>
    )
}

export default Navbar



