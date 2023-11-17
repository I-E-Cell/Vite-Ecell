import React, { useState } from 'react'

function Images(props) {
    const [click, setClick] =useState(false)

    function clicked() {
        setClick(true)
    }


  return (
    <div className='absolute flex flex-col gap-4 md:top-[75px] align-middle justify-center items-center h-[90%] w-[100%]'>
                        <div className='flex flex-col relative mx-auto lg:flex-row justify-center gap-4'>
                            <div onDoubleClick={clicked} className='upp w-[20em]  md:w-[24em] lg:w-[18em] rounded-xl h-[13em] bg-slate-600'>
                                <img className='rounded-xl w-[100%] h-[100%]' src={props.img1} alt="" />
                            </div>
                            <div className='upp lg:w-[22em] w-[20em] md:w-[24em]  rounded-xl h-[13em] bg-slate-600'>
                                <img className='w-[100%] rounded-xl h-[100%]' src={props.img2} alt="" />

                            </div>
                            <div className='upp w-[20em] md:w-[24em] lg:w-[16em] rounded-xl h-[13em] bg-slate-600'>
                                <img className='rounded-xl w-[100%] h-[100%]' src={props.img3} alt="" />

                            </div>
                        </div>
                        <div className='up flex flex-col mx-auto lg:flex-row justify-center gap-4'>
                            <div className='upp w-[20em] md:w-[24em] lg:w-[21em] rounded-xl h-[13em] bg-slate-600'>
                                <img className='rounded-xl w-[100%] h-[100%]' src={props.img4} alt="" />

                            </div>
                            <div className='upp w-[20em] md:w-[24em] lg:w-[17em] rounded-xl h-[13em] bg-slate-600'>
                                <img className='rounded-xl w-[100%] h-[100%]' src={props.img5} alt="" />

                            </div>
                            <div className='upp w-[20em] md:w-[24em] lg:w-[18em] rounded-xl h-[13em] bg-slate-600'>
                                <img className='rounded-xl w-[100%] h-[100%]' src={props.img6} alt="" />

                            </div>
                        </div>

                    </div>
  )
}

export default Images