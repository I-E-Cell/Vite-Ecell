// ------------------------------Navbar----------------------------------//

import React, { useState } from 'react';
import ait_logo from "../assets/AIT LOGO 7 (1).svg";
import ait from "../assets/AIT.png"
import ecell from "../assets/ecell.png"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoIosContacts } from "react-icons/io";
import { RiGalleryLine } from "react-icons/ri";
import { IoIosLaptop } from "react-icons/io";
import { PiTargetBold } from "react-icons/pi";

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
                    <Link to="/" >
                        <a className='hover:text-[#86C8D3]  md:text-[16px]  lg:text-[17.5px] duration-300 ' href="#home">Home</a>
                    </Link>
                    <Link to="/team" >
                        <a className='hover:text-[#86C8D3] md:text-[16px] lg:text-[17.5px] duration-300' href="">Team</a>
                    </Link>
                    <Link to='/alumni'>
                        <a className='hover:text-[#86C8D3] md:text-[16px] lg:text-[17.5px] duration-300' href="">Alumni</a>
                    </Link>
                    <Link to="/gallery">
                        <a className='hover:text-[#86C8D3] md:text-[16px] lg:text-[17.5px] duration-300' href="">Gallery</a>
                    </Link>
                    <Link to="/startups">
                    <a className='hover:text-[#86C8D3] md:text-[16px] lg:text-[17.5px] duration-300' href="">Initiatives</a>
                    </Link>
                    <Link to="/internship">
                        <a className='hover:text-[#86C8D3] md:text-[16px] lg:text-[17.5px] duration-300' href="#contact">Internship</a>
                    </Link>
                </div>

                <div onClick={haldleNav} className='block md:hidden my-auto relative -left-4'>
                    {!nav ? <AiOutlineClose size={25} color='#906ED6' /> : <AiOutlineMenu size={25} color='0F1322' />}

                </div>
                <div className={!nav ? 'fixed rounded-tr-2xl rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg left-2 top-2 w-[55%] h-[100%] border-r border-r-gray-900   bg-gray-700/80  ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <div className='flex w-[4.7em] border border-gray-400 rounded-full my-10 mx-auto h-[4.7em]'>
                        <img className='h-[40px] m-4 rounded-full  relative  border-grey mx-auto' src={ecell} alt="ait_logo" />
                    </div>
                    <div className='mx-auto relative -top-8  text-gray-300 text-center '>
                        <h1 className=' font-semibold text-md'>I & E Cell </h1>
                        <h1 className=' font-normal text-xs'>AIT Pune </h1>

                    </div>
                    <div className=' gap-8 text-white font-normal text-base flex flex-col '>
                        <Link to="/" >
                            <div className='flex pl-4 items-center flex-row '>
                                <FaHome size={23}/><a className='pl-4  flex  ' href="">Home<br /> </a>
                            </div>
                        </Link>
                        <Link to="/team" >
                            <div className='flex pl-4 items-center flex-row gap-'>

                                <RiTeamFill size={23}/><a className='pl-4 ' href="">Team<br /></a>
                            </div>
                        </Link>
                        <Link to='/alumni'>
                            <div className='flex pl-4 items-center flex-row gap-'>

                                <IoIosContacts size={23}/><a className='pl-4 ' href="">Alumni<br /></a>
                            </div>
                        </Link>
                        <Link to="/gallery">
                            <div className='flex pl-4 items-center flex-row gap-'>

                                <RiGalleryLine size={23}/><a className='pl-4' href="">Gallery<br /></a>
                            </div>
                        </Link>
                        <Link to="/startups">
                        <div className='flex pl-4 items-center flex-row gap-'>

                            <PiTargetBold size={23}/><a className='pl-4 b' href="">Initiatives<br /></a>
                        </div>
                        </Link>

                        <Link to="/internship">
                            <div className='flex pl-4 items-center flex-row gap-'>

                                <IoIosLaptop size={23}/><a className='pl-4' href="">Internship<br /></a>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Navbar