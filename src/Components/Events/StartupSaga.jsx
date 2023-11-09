import React from 'react'
import sslogo from "../../assets/sslogo.png"



const StartupSaga = () => {
    return (


        <div className='absolute flex flex-col  gap-5  w-[80%] top-[60px] mx-auto'>
            <div className='relative left-[5%] lg:left-[13%] flex gap-4 md:gap-16'>
                <img className='relative logo_inni w-[9em] lg:w-[11em]' src={sslogo} alt="" />
                <div className='flex flex-col gap-5'>


                    <h1 className='text_inni text-3xl lg:text-4xl my-auto font-bold'>StartUP Saga</h1>
                    <a href="https://www.startupsaga.in/" target='_blank'>
                        <button className=' btn_inni bg-[#27096D] rounded-xl  relative   w-24 border-white border-1 h-8'>
                            <h1 className=' text-white  text-center relative justify-center text-sm mx-auto '>Explore</h1>
                        </button>
                    </a>
                </div>
            </div>


            <div>
                <h3 className='text_inni_main text-center min-w-[110%] relative left-[28px] text-sm lg:text:lg'>To build an ecosystem to identify, nurture innovation and entrepreneurship skills amongst students and to generate successful commercial enterprise contributing towards significant </h3>

            </div>

        </div>

    )
}

export default StartupSaga