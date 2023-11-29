import React, { useState } from 'react'
import Nav from './Nav'
import { BsArrowUpRight } from "react-icons/bs";
import Images from './Images'
import unnati1 from '../assets/Event/Unnati/unnati1.jpg'
import unnati2 from '../assets/Event/Unnati/unnati2.jpg'
import unnati3 from '../assets/Event/Unnati/unnati3.jpg'
import unnati4 from '../assets/Event/Unnati/unnati4.jpg'
import unnati5 from '../assets/Event/Unnati/unnati5.jpg'
import unnati6 from '../assets/Event/Unnati/unnati6.jpg'
import ss1 from '../assets/Event/SS/SS1.jpg'
import ss2 from '../assets/Event/SS/SS2.jpg'
import ss3 from '../assets/Event/SS/SS3.jpg'
import ss4 from '../assets/Event/SS/SS4.jpg'
import ss5 from '../assets/Event/SS/SS5.jpg'
import ss6 from '../assets/Event/SS/SS6.jpg'
import visit1 from '../assets/Event/Visits/visit1.jpg'
import visit2 from '../assets/Event/Visits/visit2.jpg'
import visit3 from '../assets/Event/Visits/visit3.jpg'
import visit4 from '../assets/Event/Visits/visit4.jpg'
import visit5 from '../assets/Event/Visits/visit5.jpg'
import visit6 from '../assets/Event/Visits/visit6.jpg'
import visit7 from '../assets/Event/Visits/visit7.jpeg'
import moments1 from '../assets/Event/moments/moments1.jpg'
import moments2 from '../assets/Event/moments/moments2.jpg'
import moments3 from '../assets/Event/moments/moments3.jpg'
import moments4 from '../assets/Event/moments/moments4.jpg'
import moments5 from '../assets/Event/moments/moments5.jpg'
import moments6 from '../assets/Event/moments/moments6.jpg'

import mixpanel from 'mixpanel-browser';
mixpanel.init('b2ff7ac9e3348a34108ce514efef85ce', { debug: true, track_pageview: true, persistence: 'localStorage' });








const Gallery = () => {

    const [unnati, setUnnati] = useState(true)
    const [startupsaga, setstartupsaga] = useState(false)
    const [us_bhai_us, setUs_bhai_us] = useState(false)
    const [visits, setVisits] = useState(false)


    const displayUnnati = () => {
        setUnnati(true)
        setstartupsaga(false)
        setUs_bhai_us(false)
        setVisits(false)


    }
    const displayStartupSaga = () => {
        setUnnati(false)
        setstartupsaga(true)
        setUs_bhai_us(false)
        setVisits(false)


    }
    const displayUs_bhai_us = () => {
        setUnnati(false)
        setstartupsaga(false)
        setUs_bhai_us(true)
        setVisits(false)


    }
    const displayVisits = () => {
        setUnnati(false)
        setstartupsaga(false)
        setUs_bhai_us(false)
        setVisits(true)
    }


    mixpanel.track('Gallery loaded');



    return (
        <div >
            <Nav />
            <div className='relative w-[100%]   bg-[#0F1322]'>
                <div className='relative mx-auto justify-center align-middle top-[95px] lg:h-[86vh] h-[95em]   w-[94%]  rounded-3xl bg-[#1C1F2B]'>
                    <div className=' relative w-[28%]  h-[10em] rounded-3xl left-[72%] -top-[75px]  bg-[#1C1F2B]'>
                        <h1 className='absolute  text-[#e6e6e6] z-10 font-semibold text-3xl md:text-4xl hidden md:flex justify-center text-center md:left-[25%] lg:left-[34%] top-3'>Gallery</h1>
                        <div className='s_box rounded-sm w-[68%] lg:-left-[26.5px] -left-[28px] top-[6px]  h-[60%] bg-[#1C1F2B]'>

                        </div>
                    </div>

                    <div className='absolute text-center w-[100%] top-10 text-white font-thin nav flex flex-col md:flex-row  gap-4 md:gap-16  justify-center'>
                        <div className='flex flex-row gap-5  md:gap-16 justify-center '>

                            <button id='kuchbhe' onClick={displayUnnati} className='explore btn  items-center bg-[#0F1322] flex rounded-3xl  relative   w-36  h-10'>
                                <div className='haikuch absolute w-[2em] h-[2em] bg-[#86C8D3] left-1 rounded-full'>
                                    <BsArrowUpRight size={22} className=' relative left-1 top-1' />
                                </div>
                                <h1 className='yebhe text-white  text-center relative justify-center left-2 text-md mx-auto '>Unnati</h1>
                            </button>
                            <button id='kuchbhe' onClick={displayStartupSaga} className='explore btn  items-center bg-[#0F1322] flex rounded-3xl  relative   w-36  h-10'>
                                <div className='haikuch absolute w-[2em] h-[2em] bg-[#86C8D3] left-1 rounded-full'>
                                    <BsArrowUpRight size={22} className=' relative left-1 top-1' />
                                </div>
                                <h1 className='yebhe text-white  text-center relative justify-center left-2  mx-auto '>StartupSaga</h1>
                            </button>



                        </div>
                        <div className='flex flex-row gap-5  md:gap-16 justify-center'>
                            <button id='kuchbhe' onClick={displayVisits} className='explore btn  items-center bg-[#0F1322] flex rounded-3xl  relative   w-36  h-10'>
                                <div className='haikuch absolute w-[2em] h-[2em] bg-[#86C8D3] left-1 rounded-full'>
                                    <BsArrowUpRight size={22} className=' relative left-1 top-1' />
                                </div>
                                <h1 className='yebhe text-white  text-center relative justify-center left-2  mx-auto '>Visits</h1>
                            </button>
                            <button id='kuchbhe' onClick={displayUs_bhai_us} className='explore btn  items-center bg-[#0F1322] flex rounded-3xl  relative   w-36  h-10'>
                                <div className='haikuch absolute w-[2em] h-[2em] bg-[#86C8D3] left-1 rounded-full'>
                                    <BsArrowUpRight size={22} className=' relative left-1 top-1' />
                                </div>
                                <h1 className='yebhe text-white  text-center relative justify-center left-2  mx-auto '>Moments</h1>
                            </button>

                        </div>


                    </div>
                    <div className='absolute  md:top-[85px]   w-[100%]'>
                        <hr className='relative w-[93%]  mx-auto' />
                    </div>


                    {unnati ? <Images
                        img1={unnati1}
                        img2={unnati2}
                        img3={unnati3}
                        img4={unnati4}
                        img5={unnati5}
                        img6={unnati6}
                    /> : null}
                    {startupsaga ? <Images
                        img1={ss1}
                        img2={ss2}
                        img3={ss3}
                        img4={ss4}
                        img5={ss5}
                        img6={ss6}



                    /> : null}
                    {us_bhai_us ? <Images

                    /> : null}

                    {visits ? <Images

                        img2={visit1}
                        img1={visit5}
                        img3={visit3}
                        img4={visit4}
                        img5={visit2}
                        img6={visit6}

                    /> : null}

                    {us_bhai_us ? <Images

                        img2={moments1}
                        img1={moments2}
                        img3={moments3}
                        img4={moments4}
                        img5={moments5}
                        img6={moments6}

                    /> : null}





                </div>
            </div>


        </div>
    )
}

export default Gallery