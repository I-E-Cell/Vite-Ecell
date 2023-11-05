import React from 'react'
import gulshan from "../assets/gulshann.png"
import { FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter, FaYoutube, FaHeart } from "react-icons/fa";

function TeamCard(props) {
    return (
        <div className='w-[17em] lg:w-[16em] h-[19em]  mt-6 mb-6'>
            <div className='h-[42%]  ' >
                <div className='photo relative top-5 mx-auto  overflow-hidden h-[145%] w-[70%] rounded-full'>
                    <img className='people scale-[240%] relative -left-8' src={props.img} alt="" />
                </div>
            </div>

            <div className='w-[17em] lg:w-[16em] h-[11em] bg-[#A1A6DC] rounded-2xl'>
                <div className='h-[82%]'>
                    <div className='h-[53%]'>

                    </div>
                    <div className=''>
                        <h1 className='text-xl py-1 font-semibold text-[#201f1f] text-center'>
                            {props.name}
                        </h1>
                        <h1 className='text-sm font-semibold text-[#201f1f] text-center'>
                            {props.branch}
                        </h1>
                    </div>
                </div>

                <div className=' flex justify-center gap-4'>
                    <a href={props.fb} target='_blank'><FaFacebook size={18} className='icon' /></a>
                    <a href={props.insta} target='_blank'><FaInstagram size={20} className='icon'/></a>
                    <a href={props.linkedin} target='_blank'><FaLinkedinIn size={20} className='icon'/></a>
                    <a href={props.twitter} target='_blank'><FaTwitter size={20} className='icon'/></a>

                </div>
            </div >




        </div >
    )
}

export default TeamCard