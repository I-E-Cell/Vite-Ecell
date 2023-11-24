import React, { useState } from 'react'
import Nav from './Nav'
import cv from '../assets/CV.png'
import StuIntern from './StuIntern'
import ComIntern from './ComIntern'
import { motion } from 'framer-motion'
import Popup from './Popup'
import { BsArrowUpRight } from "react-icons/bs";


const Internship = () => {
    const [send, setSend] = useState("Send")
    const [popup2, setPopup2] = useState(false)
    const [forstudents, setForstudents] = useState(true)
    const [forcompany, setForcomapny] = useState(false)

    const students = () => {
        setForstudents(true)
        setForcomapny(false)
    }
    const company = () => {
        setForstudents(false)
        setForcomapny(true)
    }

   
  
    return (
        <div >
            <Nav />
            <div className='relative w-[100%]   bg-[#0F1322]'>
                <div className='relative mx-auto justify-center align-middle top-[95px] md:h-[41em]  h-[56em] mb-4   w-[94%]  rounded-3xl bg-[#86C8D3]'>
                    <div className=' relative w-[28%]  h-[10em] rounded-3xl left-[72%] -top-[75px]  bg-[#86C8D3]'>
                        <h1 className='absolute  ] z-10 text-3xl md:text-4xl hidden md:flex justify-center text-center md:left-[16%] lg:left-[28%] font-bold top-3'>Internship</h1>

                        <div className='s_box rounded-sm w-[68%] lg:-left-[26.5px] -left-[28px] top-[6px]  h-[60%] bg-[#86C8D3]'>

                        </div>



                    </div>

                    {/* <h1 className='absolute  text-[#0F1322] z-10 font-bold text-3xl md:text-4xl flex justify-center text-center w-[100%] top-9'>Internship</h1> */}
                    <div className='absolute w-[100%] flex flex-row gap-5  md:gap-16 top-10 justify-center '>

                        <button onClick={students} id='kuchbhe' className='explore btn  items-center bg-[#0F1322] flex rounded-3xl  relative   w-[160px]  h-10'>
                            <div className='haikuch absolute w-[2em] h-[2em] bg-[#86C8D3] left-1 rounded-full'>
                                <BsArrowUpRight size={22} className=' relative left-1 top-1' />
                            </div>
                            <h1 className='yebhe text-white  text-center relative justify-center left-2  mx-auto '>For Students</h1>
                        </button>
                        <button onClick={company} id='kuchbhe' className='explore btn  items-center bg-[#0F1322] flex rounded-3xl  relative   w-[160px]  h-10'>
                            <div className='haikuch absolute w-[2em] h-[2em] bg-[#86C8D3] left-1 rounded-full'>
                                <BsArrowUpRight size={22} className=' relative left-1 top-1' />
                            </div>
                            <h1 className='yebhe text-white  text-center relative justify-center left-2 text-md mx-auto '>For Startups</h1>
                        </button>



                    </div>
                    <div className='absolute top-[90px]   w-[100%]'>
                        <hr className='relative w-[93%] h-[1.5px] bg-[#0F1322] border-none  mx-auto' />
                    </div>
                    {/* //-------- */}
                    {forcompany ? <ComIntern /> : null}


                    {/* //-------- */}
                    {/* //-------- */}

                    {forstudents ? <StuIntern /> : null}


                    {/* //-------- */}



                </div>
            </div>
            {(popup2 && input.value!='') ? <Popup /> : null}

        </div>
    )
}

export default Internship