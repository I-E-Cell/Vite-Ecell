import React from 'react'
import gulshan from "../assets/gulshann.png"
import { FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter, FaYoutube, FaHeart } from "react-icons/fa";


function Card(props){
  return (
    <div className='w-[15em] h-[19em]'>
                        <div className='h-[42%]  ' >
                            <div className='photo relative top-8 left-9 overflow-hidden h-[130%] w-[70%] rounded-full'>
                                <img className=' scale-[240%] relative -left-8' src={props.img} alt="" />
                            </div>
                        </div>

                        <div className='w-[15em] h-[11em] bg-[#E7DCFF] rounded-2xl'>
                            <div className='h-[82%]'>
                                <div className='h-[53%]'>

                                </div>
                                <div>
                                    <h1 className='text-xl py-1 font-semibold text-[#444444] text-center'>
                                        {props.name}
                                    </h1>
                                    <h1 className='text-sm font-semibold text-[#444444] text-center'>
                                        {props.branch}
                                    </h1>
                                </div>
                            </div>

                            <div className=' flex justify-center gap-3'>
                                <FaFacebook size={18} />
                                <FaInstagram size={20} />
                                <FaLinkedinIn size={20} />

                            </div>
                        </div>




                    </div>
  )
}

export default Card