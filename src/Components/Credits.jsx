import React from 'react'
import Nav from './Nav'
import splash from '../assets/splash.png'
import photo from '../assets/creator.png'
import brush from '../assets/brush.png'
import boxright from '../assets/boxright.png'
import boxleft from '../assets/boxleft.png'
import boxcenter from '../assets/boxcenter.png'


const Credits = () => {
    return (
        <div >
            <Nav />
            <div className='relative w-[100%]   bg-[#0F1322]'>
                <div className='relative mx-auto justify-center align-middle top-[95px] lg:h-[45em] md:h-[45em] h-[34em] mb-4   w-[94%]  rounded-3xl bg-[#545A88]'>
                    <div className=' relative w-[28%]  h-[10em] rounded-3xl left-[72%] -top-[75px]  bg-[#545A88]'>
                        <div className='s_box rounded-sm w-[68%] lg:-left-[26.5px] -left-[28px] top-[6px]  h-[60%] bg-[#545A88]'>

                        </div>



                    </div>
                    <div className='absolute top-[4em] mx-auto flex justify-center w-[100%]'>
                        <img className='w-[85%] top-3 absolute h-[20em] md:h-[42em] flex align-middle justify-center items-center' src={splash} alt="" />
                        <div className='flex flex-col justify-center relative mx-auto'>
                            <img className='absolute hidden lg:flex w-[17em] top-6 -right-[6.5em]' src={boxright} alt="" />
                            <img className='absolute hidden lg:flex w-[17em] top-6 -left-[6.5em]' src={boxleft} alt="" />
                            <img className='absolute hidden lg:flex w-[17em] -top-10 left-[17em]' src={boxcenter} alt="" />
                            
                            
                            <img className='flex justify-center relative top-[4.5em] z-10 w-[44em] mx-auto' src={photo} alt="" />
                            <img className='z-20 relative top-6 md:top-3' src={brush} alt="" />
                            <h1 className='text-2xl md:text-5xl text-center relative z-[40] font-bold -top-8 md:-top-[2.1em]'>THE BATCH OF 2K26</h1>
                        </div>
                    </div>



                </div>
            </div>


        </div>
    )
}

export default Credits