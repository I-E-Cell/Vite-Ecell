import React, { useRef } from 'react'
import { animate, motion } from "framer-motion";

import puzzel from '../assets/puzzle.png'
import youtube from '../assets/youtube.png'
import x from '../assets/x.png'
import fb from '../assets/fb.png'

import insta from '../assets/insta.png'
import linkedin from '../assets/linkedin.png'



const Hero = () => {


    const clientCount = useRef(null);
    const projectCount = useRef(null);
    const reachCount = useRef(null);




    const animationClientsCount = () => {
        animate(0, 1200, {
            duration: 2,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
        });
    }

    const animationProjectCount = () => {
        animate(0, 7000, {
            duration: 2,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
        });
    }
    const animationReachCount = () => {
        animate(0, 100, {
            duration: 2,
            onUpdate: (v) => (reachCount.current.textContent = v.toFixed()),
        });
    }





    return (
        <div className='relative w-[100%] pb-32 h-[100%] bg-[#0F1322]'>
            <div className='relative mx-auto justify-center align-middle  top-[95px]  w-[94%] h-[42em] md:h-[39em] rounded-bl-xl rounded-br-xl rounded-tl-xl md:rounded-3xl bg-[#86C8D3]'>
                <div className=' relative w-[28%]  h-[10em] rounded-3xl left-[72%] -top-[75px]  bg-[#86C8D3]'>
                    <div className='s_box rounded-sm w-[68%] lg:-left-[26.5px] -left-[28px] top-[6px]  h-[60%] bg-[#86C8D3]'>

                    </div>

                </div>
                <div className='flex text-[#0F1322]  flex-col lg:flex-row relative top-5 lg:-top-16  justify-around'>
                    <div className='mx-auto lg:mx-0 -top-12 lg:top-0 relative'>
                        <h1 className='textt font-semibold  text-center lg:text-start md:text-[60px] text-[40px] sm:text-[50px] lg:text-[70px]'>
                            Innovation & <br />
                            Entrepreneurship <br />
                            Cell
                        </h1>
                        <div className='relative top-3 w-[97%] h-[2.3px] mx-auto bg-black rounded-xl'>

                        </div>

                        <div className='relative mx-auto  pt-16 left-0 overflow-hidden  lg:left-2'>
                            <button className='btn bg-[#0F1322]  rounded-lg  relative   w-36 border-white border-2 h-10'>
                                <h1 className=' text-white  text-center relative justify-center text-lg mx-auto '>Explore</h1>
                            </button>


                        </div>
                        <div className='flex top-28 md:top-16 justify-between md:mx-3 text-3xl font-bold relative'>
                            <div >
                                <motion.span whileInView={animationClientsCount} ref={clientCount}>1200

                                </motion.span>+
                                <h1 className='text-lg font-semibold relative left-1 mt-1'>Visitors</h1>

                            </div>
                            <div>
                                <motion.span ref={projectCount} whileInView={animationProjectCount}>7000</motion.span>+
                                <h1 className='text-lg font-semibold relative left-1 mt-1'>Reach</h1>

                            </div>
                            <div>
                                <motion.span ref={reachCount} whileInView={animationReachCount}>100</motion.span>+
                                <h1 className='text-lg font-semibold relative left-1 mt-1'>StartUps</h1>

                            </div>
                        </div>

                    </div>
                    <div className=' hidden lg:flex relative -top-20 max-w-md mx-auto lg:mx-0'>

                        <div className='relative top-10'>
                            <div className='py-3 -top-3 relative' >
                                <a href="https://www.instagram.com/ecell_ait/" target='_blank'>
                                    <img className='icons  w-10 relative left-[60%]' src={insta} alt="" />
                                </a>
                                <a href="https://www.youtube.com/@aitecell" target='_blank'>
                                    <img className='icons w-12 relative left-[40%]' src={youtube} alt="" />
                                </a>
                                <a href="https://www.facebook.com/ecellait" target='_blank'>
                                    <img className='icons w-12  -top-[10px] relative left-[16.5%]' src={fb} alt="" />
                                </a>
                                <a href="https://www.linkedin.com/company/innovation-entrepreneurship-cell/" target='_blank'>
                                    <img className='icons w-14 relative -top-9  left-[67%]' src={linkedin} alt="" />
                                </a>
                                <a href="https://twitter.com/ecell_aitpune" target='_blank'>
                                    <img className='icons w-11 -top-9  relative left-[27%]' src={x} alt="" />
                                </a>
                            </div>
                            <img className='lg:w-[28em] -top-9 w-[22em] relative mx-auto' src={puzzel} alt="" />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero