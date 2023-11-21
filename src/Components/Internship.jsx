import React, { useState } from 'react'
import Nav from './Nav'
import cv from '../assets/CV.png'
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

    function pressed() {
        setSend("Sent!");
        setPopup2(!popup2);
        // alert("Your e-mail has been registered!!");
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
                    {forcompany ? <div className='flex justify-center w-[100%] absolute top-[120px]'>

                        <div className='py-6 w-[91%] md:w-[87.4%] lg:w-[78.4%] justify-center gap-6  lg:gap-32 flex flex-col-reverse md:flex-row bg-[#1C1F2B] rounded-2xl mx-auto relative '>


                            <div className=' w-[90%] relative mx-auto md:mx-0 text-center md:text-start'>
                                <h1 className='lg:text-[37px] text-[30px] mx-auto w-[95%] md:w-[100%]  font-bold text-[#86C8D3]'>Drop us your Details if you have any Opportunity for us !!</h1>
                                <hr className='max-w-[80%] mx-auto md:mx-0 bg-[#86C8D3] realtive px-4' />
                                <div className='w-[90%] md:w-[80%] mx-auto md:mx-10 '>
                                    <label className='text-base font-semibold text-white mr-[85px]' htmlFor="fname">Name :</label>
                                    <input id='fname' className='mt-5 shadow-xl mb-3 rounded-lg  bg-[#B8D9DE] border-[1.5px] md:w-[70%] w-[90%] h-[40px] border-[#3E3126]' name='Name' type="name" placeholder='Enter your Name' /> <br />
                                    <label className='text-base mr-3 font-semibold text-white' htmlFor="Cname">Company Name :</label>
                                    <input id='Cname' className='mt-2 shadow-xl mb-3 rounded-lg bg-[#B8D9DE] border-[1.5px] md:w-[70%] w-[90%] h-[40px] border-[#3E3126]' type="name" placeholder='Enter Company Name' /> <br />
                                    <label className='text-base mr-[96px] font-semibold text-white' htmlFor="">Role :</label>
                                    <input className='mt-2 shadow-xl mb-3 rounded-lg bg-[#B8D9DE] border-[1.5px] md:w-[70%] w-[90%] h-[40px] border-[#3E3126]' type="name" placeholder='Enter the Role' /><br />
                                    <label className='text-base  mr-[98px] font-semibold text-white' htmlFor="">Link :</label>
                                    <input className='mt-2 shadow-xl mb-3 rounded-lg bg-[#B8D9DE] border-[1.5px] md:w-[70%] w-[90%] h-[40px] border-[#3E3126]' type="link" placeholder='Enter the link' /><br />
                                    <label className='text-base mr-[89px] font-semibold text-white' htmlFor="">Email :</label>
                                    <input className='mt-2 shadow-xl mb-3 rounded-lg bg-[#B8D9DE] border-[1.5px] md:w-[70%] w-[90%] h-[40px] border-[#3E3126]' type="email" placeholder='Enter your E-mail' /><br />

                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={pressed} className=' shadow-xl md:mx-0  bg-[#96D0DA] rounded-full px-8 py-[6px]  my-3 font-medium text-[#3E3126] flex relative '>{send}</motion.button>
                                </div>
                            </div>

                        </div>

                    </div> : null}


                    {/* //-------- */}
                    {/* //-------- */}

                    {forstudents ? <div className='flex justify-center w-[100%] absolute top-[120px]'>

                        <div className='py-16 w-[91%] md:w-[87.4%] lg:w-[78.4%] justify-center gap-6  lg:gap-32 flex flex-col-reverse md:flex-row bg-[#1C1F2B] rounded-2xl mx-auto relative '>

                            <div className='relative flex items-center '>
                                <img className='mx-auto  relative flex items-center' src={cv} alt="" />
                            </div>
                            <div className=' max-w-md relative mx-auto md:mx-0 text-center md:text-start'>
                                <h1 className='lg:text-[37px] text-[30px] mx-auto w-[95%] md:w-[100%]  font-bold text-[#86C8D3]'>Drop us your e-mail and We’ll Contact you with an Opportunity !!</h1>
                                <hr className='max-w-[80%] mx-auto md:mx-0 bg-[#86C8D3] realtive px-4' />

                                <input className='mt-6 shadow-xl mb-6 rounded-lg bg-[#B8D9DE] border-[1.5px] md:w-[70%] w-[90%] h-[40px] border-[#3E3126]' type="email" placeholder='Enter your E-mail' />

                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={pressed} className='  shadow-xl mx-auto md:mx-0  bg-[#96D0DA] rounded-full px-8 py-[6px]  my-3 font-medium text-[#3E3126] flex relative '>{send}</motion.button>
                            </div>

                        </div>

                    </div> : null}


                    {/* //-------- */}



                </div>
            </div>
            {popup2 ? <Popup /> : null}

        </div>
    )
}

export default Internship