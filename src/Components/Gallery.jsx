import React from 'react'
import Nav from './Nav'
const Gallery = () => {
    return (
        <div >
            <Nav />
            <div className='relative w-[100%]   bg-[#0F1322]'>
                <div className='relative mx-auto justify-center align-middle top-[95px] h-[40em]  w-[94%]  rounded-3xl bg-[#1C1F2B]'>
                    <div className=' relative w-[28%]  h-[10em] rounded-3xl left-[72%] -top-[75px]  bg-[#1C1F2B]'>
                        <h1 className='absolute  text-[#e6e6e6] z-10 font-semibold text-3xl md:text-4xl hidden md:flex justify-center text-center md:left-[25%] lg:left-[34%] top-3'>Gallery</h1>
                        <div className='s_box rounded-sm w-[68%] lg:-left-[26.5px] -left-[28px] top-[6px]  h-[60%] bg-[#1C1F2B]'>

                        </div>
                    </div>

                    <div className='absolute w-[100%] top-10 text-white font-thin nav flex flex-row gap-4 justify-center'>
                        <a href="">Unnati</a>
                        <a href=""> StartupSaga</a>
                        <a href="">Us_Bhai_Us</a>
                    </div>
                    <div className='absolute top-[85px]  w-[100%]'>
                        <hr className='relative w-[93%]  mx-auto' />
                    </div>

                    <div className='absolute flex flex-col gap-4 top-[140px] w-[100%]'>
                        <div className='flex flex-row justify-center gap-4'>
                            <div className='w-[18em] rounded-xl h-[13em] bg-slate-600'>
                                
                            </div>
                            <div className='w-[22em] rounded-xl h-[13em] bg-slate-600'>

                            </div>
                            <div className='w-[16em] rounded-xl h-[13em] bg-slate-600'>

                            </div>
                        </div>
                        <div className='flex flex-row justify-center gap-4'>
                            <div className='w-[21em] rounded-xl h-[13em] bg-slate-600'>

                            </div>
                            <div className='w-[17em] rounded-xl h-[13em] bg-slate-600'>

                            </div>
                            <div className='w-[18em] rounded-xl h-[13em] bg-slate-600'>

                            </div>
                        </div>
                        
                    </div>





                </div>
            </div>


        </div>
    )
}

export default Gallery