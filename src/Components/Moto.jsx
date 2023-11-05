import React from 'react'
import ait from "../assets/aitb.png"
import ecell_logo from "../assets/ecell.png";

const Moto = () => {
    return (
        <div className='bg-[#0F1322] moto h-[90vh] md:h-[47vh] w-[100%] '>
            <div className='flex  top-10 flex-col md:flex-row gap-28 md:gap-16 gap justify-center relative mx-auto'>
                <div className='w-[21em] relative mx-auto md:mx-0 md:w-[27em] lg:w-[30em] h-[10em] rounded-2xl bg-[#D2AD93]'>

                    <div className='absolute flex flex-row gap-2 left-[72%] md:left-[76%] top-1 justify-end'>
                        <img className='w-9 h-6' src={ait} alt="" />
                        <img className='w-10 h-6' src={ecell_logo} alt="" />
                    </div>

                    <div className='absolute mx-[3.1em] md:mx-[3.5em]  top-9 lg:mx-[4.6em] font-semibold z-10 text-4xl'>

                        <h1>Vision</h1>
                        <div className='w-[95%] h-[1.4px] rounded-full relative mx-auto bg-black'>

                        </div>
                    </div>

                    <div className='w-[76%] relative top-12 h-[10em] rounded-2xl bg-[#D2AD93]'>
                        <h1 className='max-w-[10 0%] text-center text-sm left-[15%] z-10 top-12 relative'>
                        To be an important part of Government 's dream of 5 trillion economy, by contributing through startups of AIT students.
                        </h1>
                        <div className='w-[32%] h-[40%] bg-[#D2AD93] relative top-[1.3%]  md:top-[12.3%]  -skew-x-12 left-[80%]'>

                        </div>
                    </div>
                    <div className='w-[28%] left-[76%] relative  z-10  h-[4.5em] border-[13px] border-[#0F1322] rounded-full bg-[#D2AD93]'>

                    </div>
                </div>
                <div className='w-[21em] relative top-12 mx-auto md:mx-0 md:w-[27em] lg:w-[30em] h-[10em] rounded-2xl bg-[#A1A6DC]'>
                    <div className='w-[76%] relative left-[24%] -top-12 h-[10em] rounded-2xl bg-[#A1A6DC]'>
                        <div className='absolute flex flex-row gap-2 left-[63%]  md:left-[70%] top-1 justify-end'>
                            <img className='w-9 h-6' src={ait} alt="" />
                            <img className='w-10 h-6' src={ecell_logo} alt="" />
                        </div>
                        <div className='absolute top-9 mx-[0.7em] md:mx-[1em]  lg:mx-[2em] font-semibold z-10 text-4xl'>

                            <h1>Mission</h1>
                            <div className='w-[95%] h-[1.4px] rounded-full relative mx-auto bg-black'>

                            </div>
                        </div>
                        <div className='w-[32%] h-[40%] bg-[#A1A6DC] relative top-[13px]   -skew-x-12 -left-[26px]'>

                        </div>
                        <div className='relative min-w-[115%] text-sm -left-[22%] z-10 top-7  text-center'>
                            <h1>
                            To build an ecosystem to identify, nurture innovation and entrepreneurship skills amongst students and to generate successful commercial enterprise contributing towards significant job creations.
                            </h1>
                        </div>
                    </div>
                    
                    <div className='w-[28%] -top-[144.7%] -left-[13.5px] md:-left-[18px] relative  z-10  h-[4.5em] border-[13px] border-[#0F1322] rounded-full bg-[#A1A6DC]'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moto