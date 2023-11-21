import React from 'react'
import gobi from '../assets/gobi.png'


function Card_blue (props) {
  return (
    <div className='flex justify-center  text-center'>
            <div className='bg-[#86C8D3] overflow-hidden h-[20em] rounded-2xl flex-col flex gap-6  w-[18em]'>
            <div className='rounded-full relative top-3  flex'>
                    <img src={props.img} className='rounded-full w-11 h-11 relative left-4 shadow-md shadow-black' alt="" />
                </div>
                <h2 className='max-w-[83%]  text-justify text-[11px] review relative mx-auto  '>"{props.msg}"<br /><br /><span  className=' text-[15px] font-semibold'>~ {props.name} </span>
                    <br /></h2>

               

            </div>
        </div>
  )
}

export default Card_blue