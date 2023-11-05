// ------------------------------Navbar----------------------------------//

import React, { useState } from 'react';
import ait_logo from "../assets/AIT LOGO 7 (1).svg";
import ait from "../assets/AIT.png"
import ecell_logo from "../assets/ecell.png";
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
                    <a className='hover:text-[#7ABDB1] md:text-[16px] lg:text-[17.5px] duration-300' href="">Events</a>
                    <Link to="/gallery">
                    <a className='hover:text-[#7ABDB1] md:text-[16px] lg:text-[17.5px] duration-300' href="">Gallary</a>
                    </Link>
                    <a className='hover:text-[#7ABDB1] md:text-[16px] lg:text-[17.5px] duration-300' href="">Initiatives</a>

                    <a className='hover:text-[#7ABDB1] md:text-[16px] lg:text-[17.5px] duration-300' href="#contact">Contact</a>

                </div>
                
                <div onClick={haldleNav} className='block md:hidden my-auto relative -left-4'>
                    {!nav? <AiOutlineClose size={25} color='#906ED6'/> : <AiOutlineMenu size={25} color='0F1322'/>}
                    
                </div>
                <div className={!nav? 'fixed left-0 top-0 w-[60%] h-[100%] border-r border-r-gray-900  bg-[#76bbc8] ease-in-out duration-500' : 'fixed left-[-100%]'}>

                    <img className='h-[60px]  my-8 mx-8' src={ait_logo} alt="ait_logo" />
                    <div className=' gap-10 pt-10 '>

                        <a className='p-4 border-gray-600 ' href="">HOME<br /> <hr className='w-[90%]  rounded-xl my-2 bg-[#906ED6] mx-auto'/><br /></a>
                        <a className='p-4 border-gray-600' href="">TEAM<br /><hr className='w-[90%]  rounded-xl my-2 bg-[#906ED6] mx-auto'/><br /></a>

                        <a className='p-4 border-gray-600' href="">EVENTS<br /><hr className='w-[90%]  rounded-xl my-2 bg-[#906ED6] mx-auto'/><br /></a>

                        <a className='p-4 border-gray-600' href="">ALUMNI<br /><hr className='w-[90%]  rounded-xl my-2 bg-[#906ED6] mx-auto'/><br /></a>

                        <a className='p-4 border-gray-600' href="">STARTUP INITIATIVES<br /><hr className='w-[90%]  rounded-xl my-2 bg-[#906ED6] mx-auto'/><br /></a>

                        <a className='p-4 border-gray-600' href="">CONTACT US<br /><hr className='w-[90%]  rounded-xl my-2 bg-[#906ED6] mx-auto'/><br /></a>

                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default Navbar