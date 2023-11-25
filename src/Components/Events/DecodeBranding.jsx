import React from 'react'
import dblogo from "../../assets/decode.png"

const DecodeBranding = () => {
  return (
    <div className='absolute flex flex-col  gap-5  w-[80%] top-[45px] md:top-[60px] mx-auto'>
    <div className='relative left-[5%] lg:left-[13%] flex gap-4 md:gap-16'>
        <img className='relative logo_inni h-[6em] top-4 md:top-0 md:h-[7em] w-[6em] lg:w-[8em]' src={dblogo} alt="" />
        <div className='flex flex-col gap-5'>


            <h1 className='text_inni text-3xl lg:text-4xl my-auto font-bold'>Decode Branding</h1>
            <a href="https://www.instagram.com/p/CzONKkzM8Jk/?img_index=1" target='_blank'>
                <button className='btn_inni bg-[#264248] marker: text-white font-semibold rounded-lg  relative flex justify-center items-center  w-24 border-white border-1 h-9'>
                Explore
                </button></a>
        </div>
    </div>


    <div>
        <h3 className='text_inni_main text-center min-w-[115%] md:min-w-[110%] relative left-4 md:left-[28px] text-[15px] lg:text:lg'>To build an ecosystem to identify, nurture innovation and entrepreneurship skills amongst students and to generate successful commercial enterprise contributing towards significant overall growth.</h3>

    </div>

</div>
  )
}

export default DecodeBranding