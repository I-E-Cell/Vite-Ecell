import React from 'react'
import dev from '../assets/Startups/dev.jpeg'

import { motion } from 'framer-motion'

function StartupCard (props) {
  return (
    <div className='py-8 w-[19em] md:w-[20em] lg:w-[22em]  justify-center gap-5 flex flex-col  bg-[#1C1F2B] rounded-3xl mx-auto  '>
                            <div className='relative flex items-center w-[69%] top-3 mx-auto'>
                                <img className='mx-auto rounded-2xl  relative flex items-center' src={props.img} alt="" />
                            </div>
                            <div className='  relative mx-auto md:mx-0 text-center md:text-start'>
                                <h1 className=' text-[30px] mx-auto w-[95%] md:w-[100%] justify-center flex  font-bold text-[#86C8D3]'>{props.name}</h1>
                                <hr className='w-[60%] border-none rounded-3xl mx-auto h-[1.7px]  bg-[#86C8D3] realtive px-4 ' />
                                <h1 className=' text-[15px] mx-auto text-white w-[100%] justify-center flex  mt-2 '>Founder : {props.founder}</h1>
                                <h1 className=' text-[12px] mx-auto text-white text-center w-[80%] justify-center flex  mt-3 '>{props.discription}</h1>

                                <div className='flex  md:gap-4 mt-5 justify-center'>
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}  className='  shadow-xl mx-auto md:mx-0  bg-[#96D0DA] rounded-full px-5 py-[5px]   font-sm text-[#3E3126] flex relative '>Linkedin</motion.button>
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}  className='  shadow-xl mx-auto md:mx-0  bg-[#96D0DA] rounded-full px-5 py-[5px]   font-sm text-[#3E3126] flex relative '>Instagram</motion.button>

                                </div>

                            </div>

                        </div>
  )
}

export default StartupCard
