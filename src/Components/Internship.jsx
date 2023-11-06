import React from 'react'
import Nav from './Nav'
import cv from '../assets/CV.png'

const Internship = () => {
    return (
        <div >
            <Nav />
            <div className='relative w-[100%]   bg-[#0F1322]'>
                <div className='relative mx-auto justify-center align-middle top-[95px] lg:h-[39em] h-[56em] mb-4   w-[94%]  rounded-3xl bg-[#86C8D3]'>
                    <div className=' relative w-[28%]  h-[10em] rounded-3xl left-[72%] -top-[75px]  bg-[#86C8D3]'>
                        <div className='s_box rounded-sm w-[68%] lg:-left-[26.5px] -left-[28px] top-[6px]  h-[60%] bg-[#86C8D3]'>

                        </div>



                    </div>
                    
                        <h1 className='absolute  text-[#0F1322] z-10 font-bold text-3xl md:text-4xl flex justify-center text-center w-[100%] top-9'>Internship</h1>
                       

                    {/* //-------- */}
                    <div className='flex justify-center relative -top-[60px]'>
                        
                        <div className='py-16 w-[91%] md:w-[78.4%] justify-center gap-6  lg:gap-32 flex flex-col-reverse md:flex-row bg-[#1C1F2B] rounded-2xl mx-auto absolute '>

                            <div className='relative flex items-center '>
                                <img className='mx-auto  relative flex items-center' src={cv} alt="" />
                            </div>
                            <div className=' max-w-md relative mx-auto md:mx-0 text-center md:text-start'>
                                <h1 className='lg:text-[37px] text-[30px]   font-bold text-[#86C8D3]'>Drop us your CV and We’ll Contact you with and Opportunity !!</h1>
                                <hr className='max-w-[80%] mx-auto md:mx-0 bg-[#86C8D3] realtive px-4' />

                                <input className='mt-6 shadow-xl mb-6 rounded-lg bg-[#B8D9DE] border-[1.5px] md:w-[70%] w-[90%] h-[40px] border-[#3E3126]' type="email" placeholder='Enter your E-mail' />

                                <button className='  shadow-xl mx-auto md:mx-0  bg-[#96D0DA] rounded-full px-8 py-[6px]  my-3 font-medium text-[#3E3126] flex relative '>Send</button>
                            </div>

                        </div>

                    </div>


                    {/* //-------- */}
                </div>
            </div>


        </div>
    )
}

export default Internship