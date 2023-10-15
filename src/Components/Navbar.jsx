// ------------------------------Navbar----------------------------------//

import React, { useState } from 'react';
import ait_logo from "../assets/AIT LOGO 7 (1).svg";
import ecell_logo from "../assets/Copy of logo 6.png";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
    const [nav, setNav] = useState(true)

    const haldleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='mx-auto shadow-lg shadow-gray-600 fixed w-[100%] z-50'>
            <div className='bg-[#FEF7D8] z-30 h-5 justify-center text-center'>
                <h1 className='text-xs my-auto'>CREATING SYNERGY</h1>
            </div>
            <div className='bg-[#1E1E1E] my-auto flex text sticky z-50 justify-between px-8'>
                <img className='h-[60px]  my-2' src={ait_logo} alt="ait_logo" />
                <div className='hidden text-white  md:flex my-auto lg:gap-14 md:gap-5'>
                    <a className='hover:text-[#906ED6]  md:text-sm  lg:text-[15px] duration-300 ' href="#home">HOME</a>
                    <a className='hover:text-[#906ED6] md:text-sm lg:text-[15px] duration-300' href="">TEAM</a>

                    <a className='hover:text-[#906ED6] md:text-sm lg:text-[15px] duration-300' href="">EVENTS</a>

                    <a className='hover:text-[#906ED6] md:text-sm lg:text-[15px] duration-300' href="">ALUMNI</a>
 
                    <a className='hover:text-[#906ED6] md:text-sm lg:text-[15px] duration-300' href="">STARTUP INITIATIVES</a>

                    <a className='hover:text-[#906ED6] md:text-sm lg:text-[15px] duration-300' href="#contact">CONTACT US</a>

                </div>
                <img className='h-[60px] hidden md:flex my-2' src={ecell_logo} alt="ecell_logo" />
                <div onClick={haldleNav} className='block md:hidden my-auto'>
                    {!nav? <AiOutlineClose size={20} color='#906ED6'/> : <AiOutlineMenu size={20} color='#906ED6'/>}
                    
                </div>
                <div className={!nav? 'fixed left-0 top-0 w-[60%] h-[100%] border-r border-r-gray-900  bg-[#bf9fff] ease-in-out duration-500' : 'fixed left-[-100%]'}>

                    <img className='h-[60px]  my-8 mx-8' src={ait_logo} alt="ait_logo" />
                    <div className=' gap-10 pt-10 '>

                        <a className='p-4 border-gray-600 ' href="">HOME<br /> <hr className='w-[90%] h-1 rounded-xl my-2 bg-[#906ED6] mx-auto'/><br /></a>
                        <a className='p-4 border-gray-600' href="">TEAM<br /><hr className='w-[90%] h-1 rounded-xl my-2 bg-[#906ED6] mx-auto'/><br /></a>

                        <a className='p-4 border-gray-600' href="">EVENTS<br /><hr className='w-[90%] h-1 rounded-xl my-2 bg-[#906ED6] mx-auto'/><br /></a>

                        <a className='p-4 border-gray-600' href="">ALUMNI<br /><hr className='w-[90%] h-1 rounded-xl my-2 bg-[#906ED6] mx-auto'/><br /></a>

                        <a className='p-4 border-gray-600' href="">STARTUP INITIATIVES<br /><hr className='w-[90%] h-1 rounded-xl my-2 bg-[#906ED6] mx-auto'/><br /></a>

                        <a className='p-4 border-gray-600' href="">CONTACT US<br /><hr className='w-[90%] h-1 rounded-xl my-2 bg-[#906ED6] mx-auto'/><br /></a>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar