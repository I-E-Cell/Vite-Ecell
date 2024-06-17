import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import letter from '../assets/letter2.png'
import { IoDocumentAttach } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


const Newsletter = () => {



    return (
        <div className='py-10 w-[91%] overflow-hidden md:w-[84.4%] justify-center gap-6  lg:gap-20  flex flex-col-reverse md:flex-row bg-[#D2AD93] rounded-2xl -mb-10  mt-28 mx-auto relative items-center '>

            <div className='relative flex justify-center items-center '>
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}

                >
                    <img className='mx-auto  w-[12em]  relative flex items-center' src={letter} alt="" />
                </motion.div>
            </div>

            <div className=' max-w-2xl relative mx-auto md:mx-0 text-center md:text-start'>
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}

                >
                    <h1 className='md:text-[33.5px] lg:text-[45px] text-[22px] sm:text-[30px] flex items-center gap-3   font-bold text-[#3E3126]'>Visit Documents Section <IoDocumentAttach /> </h1>
                </motion.div>
                <Link to="/document">
                <a href=""><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='  shadow-xl mx-auto md:mx-0  bg-[#f2dacb] rounded-full px-6 py-[6px]  my-3 font-medium items-center gap-2 text-[#3E3126] flex relative '><IoDocumentAttach />Documents</motion.button></a>
                </Link>

            </div>


        </div>

    )
}

export default Newsletter