import React from 'react'
import gobi from '../assets/gobi.png'

const Card_M = () => {
    return (
        <div className='flex  text-center'>
            <div className='bg-[#FFCFCF] h-[18em] rounded-2xl flex-col flex gap-6  w-[17em]'>
                <div className='rounded-full relative top-3  flex'>
                    <img src={gobi} className='rounded-full w-12 relative left-2' alt="" />
                </div>
                <h2 className='max-w-[92%] review relative mx-auto  text-left '>Ab na Pampar, na Huggi
                    Bache sirf pahene gay Snuggy
                    <br /></h2>

                <h1 className='font-semibold'>
                    ~ Kolli Goverdhan Durga Reddy
                </h1>

            </div>
        </div>
    )
}

export default Card_M