import React from 'react'
import { FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter, FaYoutube, FaHeart } from "react-icons/fa";
import gulshan from '../assets/Team/gulshan.jpeg'

const NewCard = () => {
  return (
    <div className='w-[16em] mb-10 ml-10  shadoww rounded-2xl  h-[20em] bg-white'>
        <div className='w-[85%]  rounded-2xl top-4 h-[12.5em] bg-white relative mx-auto shadowin'>
            <img className='w-[97%] mx-auto top-[3px] relative h-[97%] rounded-2xl' src={gulshan} alt="" />
        </div>
        <div className='text-xl flex-col text-center font-semibold flex pt-4  justify-center '>
            <h1>Gulshan Singh</h1>
            <h1 className='text-sm'>SE Comp</h1>
            <hr className='h-[1.3px] bg-black w-[85%] mx-auto'/>
            <h1 className=' text-base'>WebDev, Graphics</h1>
        </div>
        <div className=' flex justify-center gap-4 relative top-2'>
                    <a target='_blank'><FaFacebook size={18} className='icon' /></a>
                    <a  target='_blank'><FaInstagram size={20} className='icon'/></a>
                    <a target='_blank'><FaLinkedinIn size={20} className='icon'/></a>
                    <a  target='_blank'><FaTwitter size={20} className='icon'/></a>

                </div>

    </div>
  )
}

export default NewCard