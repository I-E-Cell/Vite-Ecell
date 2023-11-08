// ------------------------------Navbar----------------------------------//

import React, { useState } from 'react';
import ait_logo from "../assets/AIT LOGO 7 (1).svg";
import ait from "../assets/AIT.png"

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [nav, setNav] = useState(true)

    const haldleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='mx-auto top-6 absolute  w-[100%] '>
            
            <div className=' bg-transparent  top-9 justify-between md:justify-normal mx-0  lg:mx-20 my-auto flex text sticky z-50  gap-20 px-8'>
                <img className='h-[50px]   my-2' src={ait} alt="ait_logo" />
                <div className='hidden text-white font-normal  md:flex my-auto lg:gap-10 md:gap-6'>
                    <Link  to="/" >
                    <a className='hover:text-[#7ABDB1]  md:text-[16px]  lg:text-[17.5px] duration-300 ' href="#home">Home</a>
                    </Link>
                    <Link  to="/team" >
                    <a className='hover:text-[#7ABDB1] md:text-[16px] lg:text-[17.5px] duration-300' href="">Team</a>
                    </Link>
                    <Link to='/alumni'>
                    <a className='hover:text-[#7ABDB1] md:text-[16px] lg:text-[17.5px] duration-300' href="">Alumni</a>
                    </Link>
                    <Link to="/gallery">
                    <a className='hover:text-[#7ABDB1] md:text-[16px] lg:text-[17.5px] duration-300' href="">Gallery</a>
                    </Link>
                    <a className='hover:text-[#7ABDB1] md:text-[16px] lg:text-[17.5px] duration-300' href="">Initiatives</a>
                    <Link to="/internship">
                    <a className='hover:text-[#7ABDB1] md:text-[16px] lg:text-[17.5px] duration-300' href="#contact">Internship</a>
                    </Link>
                </div>
                
                <div onClick={haldleNav} className='block md:hidden my-auto relative -left-4'>
                    {!nav? <AiOutlineClose size={25} color='#906ED6'/> : <AiOutlineMenu size={25} color='0F1322'/>}
                    
                </div>
                <div className={!nav? 'fixed left-0 top-0 w-[60%] h-[100%] border-r border-r-gray-900  bg-[#76bbc8] ease-in-out duration-500' : 'fixed left-[-100%]'}>

                    <img className='h-[60px]  my-8 mx-8' src={ait} alt="ait_logo" />
                    <div className=' gap-10 pt-10 '>
                        <Link  to="/" >
                        <a className='p-4 border-gray-600 ' href="">Home<br /> <hr className='w-[90%]  rounded-xl my-2 bg-[#906ED6] mx-auto'/><br /></a>
                        </Link>
                        <Link  to="/team" >
                        <a className='p-4 border-gray-600' href="">Team<br /><hr className='w-[90%]  rounded-xl my-2 bg-[#906ED6] mx-auto'/><br /></a>
                        </Link>
                        <Link to='/alumni'>
                        <a className='p-4 border-gray-600' href="">Alumni<br /><hr className='w-[90%]  rounded-xl my-2 bg-[#906ED6] mx-auto'/><br /></a>
                        </Link>
                        <Link to="/gallery">
                        <a className='p-4 border-gray-600' href="">Gallery<br /><hr className='w-[90%]  rounded-xl my-2 bg-[#906ED6] mx-auto'/><br /></a>
                        </Link>

                        <a className='p-4 border-gray-600' href="">STARTUP INITIATIVES<br /><hr className='w-[90%]  rounded-xl my-2 bg-[#906ED6] mx-auto'/><br /></a>
                        <Link to="/internship">
                        <a className='p-4 border-gray-600' href="">Internship<br /><hr className='w-[90%]  rounded-xl my-2 bg-[#906ED6] mx-auto'/><br /></a>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default Navbar