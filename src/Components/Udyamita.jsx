import React from 'react'
import cover from '../assets/udyamita/cover.png'
const Udyamita = () => {
  return (
    <div>
        <h1 className='relative mx-auto text-center text-white mt-20 font-semibold sm:text-5xl text-3xl   '>Udyamita</h1>
    <div className='w-[91%] md:w-[84.4%] mt-8  justify-center gap-24 relative flex  mx-auto  rounded-2xl bg-[#1C1F2B] px-16 py-5' >
       <div className='w-[42%] flex flex-col text-white '>
          <h1 className='text-4xl pt-20 font-semibold text-center py-5'>Yearly Newsletter</h1>
          <h1 className='text-4xl pt-4 font-semibold text-center py-5'>Udyamita</h1>
          <a target='_blank' href="https://drive.google.com/file/d/1iLH0kXLrt1ds8f0gSPliAQ6pZvBfRpBW/view"><button className='w-[60%] mt-20 bg-[#86C8D3] text-black border-none hover:scale-105 duration-200 h-10 flex justify-center items-center rounded-xl mx-auto pt'>View Udyamita</button></a>
       </div>
       <div className='w-[40%]'>
        <div className=''>
          <a target='_blank' href="https://drive.google.com/file/d/1iLH0kXLrt1ds8f0gSPliAQ6pZvBfRpBW/view"><img className='rounded-2xl hover:scale-95 duration-200' src={cover} alt="" srcset="" /></a>

        </div>

       </div>
    </div>
    
    </div>
  )
}

export default Udyamita