import React from 'react'
import impression from '../../assets/Event/impression.png' 

const Impression = () => {
  return (
    <div className='absolute flex flex-col  gap-5  w-[80%] top-[30px] mx-auto'>
    <div className='relative left-[5%] lg:left-[13%] flex gap-4 md:gap-10 lg:gap-16'>
        <img className='relative left-10 logo_inni h-[11em] lg:w-[3.5em]' src={impression} alt="" />
        <div className='flex flex-col gap-5'>


            <h1 className='text_inni text-3xl lg:text-4xl left-11 my-auto font-bold'>Impression</h1>
            <a href="https://www.instagram.com/p/CwRwuv_xs8Q/?img_index=2" target='_blank'>
                <button className=' btn_inni left-11 border-black bg-[#B8BFFF] rounded-lg flex justify-center items-center font-semibold relative    w-24 border-[1px] border-1 h-9'>
                    Explore
                </button>
            </a>
        </div>
    </div>


    <div>
        <h3 className='text_inni_main text-center min-w-[110%] relative left-[28px] text-sm lg:text:lg'>"Lend a hand , to save a brand!" Initiate your intellect and creative side to present some out of the box ideas for the problems  faced by some sinking startups.
 </h3>

    </div>

</div>
  )
}

export default Impression