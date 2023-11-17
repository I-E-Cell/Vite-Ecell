import React, { useState } from 'react'
import Nav from './Nav'

import cv from '../assets/CV.png'
import { motion } from 'framer-motion'

const Startups = () => {
    const [send, setSend] = useState("Send")

    function pressed() {
        setSend("Sent!")
    }


    return (
        <div >

            <Nav />

            <div className='relative w-[100%]   bg-[#0F1322]'>
                <div className='relative mx-auto justify-center align-middle top-[95px] pb-1 mb-3   w-[94%]  rounded-3xl bg-[#86C8D3]'>
                    <div className=' relative w-[28%]  h-[10em] rounded-3xl left-[72%] -top-[75px]  bg-[#86C8D3]'>
                        <div className='s_box rounded-sm w-[68%] lg:-left-[26.5px] -left-[28px] top-[6px]  h-[60%] bg-[#86C8D3]'>

                        </div>



                    </div>

                    <div className='relative  -top-28 flex flex-col max-w-[98%] gap-28 mx-auto'>
                        <h1 className='relative  text-[#0F1322]  font-bold text-3xl  md:text-4xl flex justify-center text-center w-[100%] '>Startup Initiatives</h1>
                        <hr className='relative -mb-20 -top-24 w-[90%] mx-auto bg-slate-800 border-none rounded-3xl h-[2.5px]' />

                    </div>
                    <div>
                        {/* <div className='py-16 w-[91%] md:w-[87.4%] lg:w-[78.4%] justify-center gap-6  lg:gap-32 flex flex-col-reverse md:flex-row bg-[#1C1F2B] rounded-2xl mx-auto absolute '>

                            <div className='relative flex items-center '>
                                <img className='mx-auto  relative flex items-center' src={cv} alt="" />
                            </div>
                            <div className=' max-w-md relative mx-auto md:mx-0 text-center md:text-start'>
                                <h1 className='lg:text-[37px] text-[30px] mx-auto w-[95%] md:w-[100%]  font-bold text-[#86C8D3]'>Drop us your e-mail and We’ll Contact you with an Opportunity !!</h1>
                                <hr className='max-w-[80%] mx-auto md:mx-0 bg-[#86C8D3] realtive px-4' />

                                <input className='mt-6 shadow-xl mb-6 rounded-lg bg-[#B8D9DE] border-[1.5px] md:w-[70%] w-[90%] h-[40px] border-[#3E3126]' type="email" placeholder='Enter your E-mail' />

                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={pressed} className='  shadow-xl mx-auto md:mx-0  bg-[#96D0DA] rounded-full px-8 py-[6px]  my-3 font-medium text-[#3E3126] flex relative '>{send}</motion.button>
                            </div>

                        </div> */}

                    </div>



                </div>
            </div>


        </div>
    )
}

export default Startups