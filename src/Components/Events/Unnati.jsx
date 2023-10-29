import React from 'react'
import unnati from "../../assets/Unnati.svg"


const Unnati = () => {
  return (
    <div className='absolute flex flex-col  gap-5  w-[80%] top-[70px] mx-auto'>
            <div className='relative left-[5%] lg:left-[13%] flex gap-4 md:gap-10'>
              <img className='relative w-[6em] lg:w-[8em]' src={unnati} alt="" />
              <div className='flex flex-col gap-5'>


                <h1 className='textt text-3xl lg:text-4xl my-auto font-bold'>Unnati</h1>
                <a href="https://www.unnati3.in/" target='_blank'>
                <button  className=' bg-[#31ABD4] rounded-xl  relative   w-24 border-white border-1 h-8'>
                  <h1 className=' text-white  text-center relative justify-center text-sm mx-auto '>Explore</h1>
                </button></a>
              </div>
            </div>


            <div>
              <h3 className='text-center min-w-[110%] relative left-[28px] text-sm lg:text:lg'>To build an ecosystem to identify, nurture innovation and entrepreneurship skills amongst students and to generate successful commercial enterprise contributing towards significant </h3>

            </div>

          </div>
  )
}

export default Unnati