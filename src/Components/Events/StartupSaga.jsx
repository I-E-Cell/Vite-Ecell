import React from 'react'
import sslogo from "../../assets/sslogo.png"


const StartupSaga = () => {
  return (
    
        
        <div className='absolute flex flex-col  gap-5  w-[80%] top-[70px] mx-auto'>
            <div className='relative left-[5%] lg:left-[13%] flex gap-4 md:gap-10'>
              <img className='relative w-[9em] lg:w-[11em]' src={sslogo} alt="" />
              <div className='flex flex-col gap-5'>


                <h1 className='textt text-3xl lg:text-4xl my-auto font-bold'>StartUP <br /> Saga</h1>
                <button className=' bg-[#27096D] rounded-xl  relative   w-24 border-white border-1 h-8'>
                  <h1 className=' text-white  text-center relative justify-center text-sm mx-auto '>Explore</h1>
                </button>
              </div>
            </div>


            <div>
              <h3 className='text-center min-w-[110%] relative left-[28px] text-sm lg:text:lg'>To build an ecosystem to identify, nurture innovation and entrepreneurship skills amongst students and to generate successful commercial enterprise contributing towards significant </h3>

            </div>

          </div>
    
  )
}

export default StartupSaga