import React from 'react'
import Nav from './Nav'
import AlumniCard from './AlumniCard'

const Alumni = () => {
    return (
        <div >
            <Nav />
            <div className='relative w-[100%]   bg-[#0F1322]'>
                <div className='relative mx-auto justify-center align-middle top-[95px] pb-1 mb-3   w-[94%]  rounded-3xl bg-[#86C8D3]'>
                    <div className=' relative w-[28%]  h-[10em] rounded-3xl left-[72%] -top-[75px]  bg-[#86C8D3]'>
                        <div className='s_box rounded-sm w-[68%] lg:-left-[26.5px] -left-[28px] top-[6px]  h-[60%] bg-[#86C8D3]'>

                        </div>



                    </div>

                    <div className='relative -top-28 flex flex-col max-w-[98%] gap-28 mx-auto'>



                        <h1 className='absolute  text-[#0F1322]  font-bold text-3xl  md:text-4xl flex justify-center text-center w-[100%] '>Alumni</h1>
                        <div className='relative  mt-24 mx-auto w-[98%]'>
                            <div className='flex flex-col nextline relative justify-center mb-28 gap-28  nextline  '>
                                <div className='flex flex-col relative justify-center md:flex-row'>
                                    <div className='flex mr-4  flex-col relative mx-auto   md:flex-row gap-28 md:gap-16'>
                                        <AlumniCard /><AlumniCard />
                                    </div>
                                    <div className='flex ml-4 flex-col relative mx-auto  md:flex-row gap-28 md:gap-16'>
                                        <AlumniCard /><AlumniCard />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col nextline relative justify-center mb-28 gap-28  nextline  '>
                                <div className='flex flex-col relative justify-center md:flex-row'>
                                    <div className='flex mr-4  flex-col relative mx-auto   md:flex-row gap-28 md:gap-16'>
                                        <AlumniCard /><AlumniCard />
                                    </div>
                                    <div className='flex ml-4 flex-col relative mx-auto  md:flex-row gap-28 md:gap-16'>
                                        <AlumniCard /><AlumniCard />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>


        </div>
    )
}

export default Alumni