import React from 'react'
import cover from '../assets/udyamita/cover.png'
import name from '../assets/udyamita/name.png'

import udaymita2 from '../assets/udyamita/udaymita2.0.pdf'
import udaymitaedition3 from '../assets/udyamita/Udaymita.pdf'

import udyamita2cover from '../assets/udyamita/Udyamita3.png'

const Udyamita = () => {
  return (
    <div>
      <h1 className='relative mx-auto text-center text-white mt-20 font-semibold sm:text-5xl text-3xl   '>Udyamita</h1>
      <div className='w-[91%] overflow-hidden md:w-[84.4%] mt-8  justify-center  gap-10 lg:gap-2 relative flex flex-col md:flex-row   mx-auto  rounded-2xl bg-[#1C1F2B] md:px-16 py-5' >
        <div className='w-[84%] relative top-7 lg:top-14 mx-auto md:w-[42%]  flex flex-col text-center md:text-left text-white '>
          <h1 className='text-[13px] font-semibold text-[#86C8D3]'>MORE THAN JUST A NEWSLETTER</h1>
          <img className='w-[20em] mx-auto md:mx-0 z-10  top-6 md:top-1 lg:top-6 relative' src={name} alt="" />
          <div className='flex relative top-2 md:top-0 lg:top-2 mx-auto w-[100%] left-6  md:left-2 gap-4 items-center'>
            <hr className='h-[3px] relative  border-none w-[45%] bg-[#86C8D3]' />
            <h1 className='text-[13px] font-semibold text-[#86C8D3]'>EDITION - III </h1>

          </div>
          <h1 className='  md:max-w-[31em] md:left-2 top-9 md:top-3 lg:top-9 relative font-thin text-gray-400 text-[13px]'>We the Innovation and entrepreneurship cell of Army Institute Of Technology are delighted to present second edition of our newsletter "Udyamita". </h1>
          <h1 className=' md:max-w-[31em] md:left-2 top-12 md:top-5 lg:top-12 relative font-thin text-gray-400 text-[13px]'>This newsletter includes all event details occurred in e-cell this year. (2022-2023) </h1>
          <a target='_blank' href={udaymita2}><button className='w-[70%] md:w-[60%] mt-7 md:mt-1 lg:mt-10 bg-[#86C8D3] text-black border-none hover:scale-105 duration-200 h-8 text-sm lg:text-base top-8 left-2 relative rounded-xl mx-auto pt'>Udyamita Previous</button></a>
          <a target='_blank' href={udaymitaedition3}><button className='w-[70%] md:w-[60%] mt-4 md:mt-1 lg:mt-4 bg-[#86C8D3] text-black border-none hover:scale-105 duration-200 h-8 text-sm lg:text-base top-8 left-2 relative rounded-xl mx-auto pt'>Udyamita Current</button></a>
        
        </div>
        <div className='w-[84%] pb-10 relative top-10 md:top-4 lg:top-6 lg:10  mx-auto md:w-[40%] lg:w-[48%]'>
          <div className='relative flex justify-center mx-auto'>

            <div className='absolute  top-[3.5em] z-0 w-[18em] h-[18em] lg:w-[24em] lg:h-[24em] rounded-full bg-[#86C8D3] '>

            </div>
            <a className='z-10 relative' target='_blank' href={udaymitaedition3}><img className='rounded-2xl w-[17em]  lg:w-[21em] hover:scale-95 duration-200' src={udyamita2cover} alt="" srcset="" /></a>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Udyamita

// contains udyamita 

