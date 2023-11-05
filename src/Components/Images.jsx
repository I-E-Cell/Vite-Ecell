import React from 'react'

function Images(props) {
  return (
    <div className='absolute flex flex-col gap-4 top-[140px] w-[100%]'>
                        <div className='flex flex-col relative mx-auto lg:flex-row justify-center gap-4'>
                            <div className='w-[20em] md:w-[24em] lg:w-[18em] rounded-xl h-[13em] bg-slate-600'>
                                <img className='rounded-xl w-[100%] h-[100%]' src={props.img1} alt="" />
                            </div>
                            <div className='lg:w-[22em] w-[20em] md:w-[24em]  rounded-xl h-[13em] bg-slate-600'>
                                <img className='w-[100%] rounded-xl h-[100%]' src={props.img2} alt="" />

                            </div>
                            <div className='w-[20em] md:w-[24em] lg:w-[16em] rounded-xl h-[13em] bg-slate-600'>
                                <img className='rounded-xl w-[100%] h-[100%]' src={props.img3} alt="" />

                            </div>
                        </div>
                        <div className='flex flex-col mx-auto lg:flex-row justify-center gap-4'>
                            <div className='w-[20em] md:w-[24em] lg:w-[21em] rounded-xl h-[13em] bg-slate-600'>
                                <img className='rounded-xl w-[100%] h-[100%]' src={props.img4} alt="" />

                            </div>
                            <div className='w-[20em] md:w-[24em] lg:w-[17em] rounded-xl h-[13em] bg-slate-600'>
                                <img className='rounded-xl w-[100%] h-[100%]' src={props.img5} alt="" />

                            </div>
                            <div className='w-[20em] md:w-[24em] lg:w-[18em] rounded-xl h-[13em] bg-slate-600'>
                                <img className='rounded-xl w-[100%] h-[100%]' src={props.img6} alt="" />

                            </div>
                        </div>

                    </div>
  )
}

export default Images