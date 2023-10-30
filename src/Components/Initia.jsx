import React, { useState } from 'react'
import circle from '../assets/circle.png'
import ait from "../assets/AIT.png"
import aitb from "../assets/aitb.png"
import sslogo from "../assets/sslogo.png"



import ecell_logo from "../assets/Copy of logo 6.png";
import StartupSaga from './Events/StartupSaga';
import Unnati from './Events/Unnati';
import DecodeBranding from './Events/DecodeBranding'


const Initia = () => {

  const [show,setShow]=useState(true)
  const [showU,setShowU]=useState(false)
  const [showdb,setShowdb]=useState(false)

  const dbranding = () => {
    setShowdb(true)
    setShowU(false)
    setShow(false)
  }
  // const StartupSaga = () => {
  //   setShowdb(false)
  //   setShowU(false)
  //   setShow(true)
  // }
  const unnati = () => {
    setShowdb(false)
    setShowU(true)
    setShow(false)
  }


  return (
    <div className=''>
      <div className='flex gap-3 md:gap-28 lg:gap-[300px] ml-[15%] lg:ml-[25%] justify-center'>
        <h1 className='textt font-semibold flex  items-center  text-[45px] text-center text-white'>Initiatives</h1>
        <img className='md:w-24 w-20 rotate ' src={circle} alt="" />

      </div>
      <div className='flex  top-10 flex-col md:flex-row  gap-10 md:gap-16 gap justify-center relative mx-auto '>

        <div className=' relative mx-auto md:mx-0 w-[92%] md:w-[40%] h-[20em] rounded-2xl bg-[#21242E]'>

          <div className='  relative flex flex-row gap-2 top-1 '>
            <h1 className='rounded-full top-1 left-2 relative shadow-white shadow-sm xl border-[0.5px] p-1 px-3 text-sm border-[#656565] text-white font-thin'>Event Timeline </h1>
          </div>
          <div className='absolute h-[20%] md:h-[23.5%] min-w-[60px] w-[17.5%]  md:w-[12.5%] top-[1%] left-[82%] md:left-[87%] border-[8px] border-[#0F1322] bg-[#21242E] rounded-2xl'>
            <img className='w-[70%] h-[50%] relative mx-auto my-[9px]' src={ait} alt="" />

          </div>

          <div className='top-[60%] relative mx-auto flex ' >
            <button onClick={() => (!show)} className='px-3 py-[3px] text-[#c0c0c0] relative mx-auto rounded-md bg-[#373737]'>
              April
            </button>
            <button onClick={unnati} className='px-3 py-[3px] text-[#c0c0c0] relative mx-auto rounded-md bg-[#373737]'>
              Sept
            </button>
            <button onClick={dbranding} className='px-3 py-[3px] text-[#c0c0c0] relative mx-auto rounded-md bg-[#373737]'>
              Nov
            </button>
            
          </div>


        </div>


        <div className='relative mx-auto md:mx-0 w-[92%] md:w-[40%] h-[20em]  rounded-2xl bg-[#86C8D3]'>

          <div className='  relative flex flex-row gap-2 top-1 '>
            <h1 className='rounded-full top-1 left-2 relative shadow-[#323232] shadow-sm xl border-[0.5px] p-1 px-3 text-sm border-[#323232] text-[#000000] font-thin'>Event Details </h1>
          </div>
          <div className='absolute h-[20%] md:h-[23.5%] min-w-[60px] w-[17.5%]  md:w-[12.5%] top-[1%] left-[82%] md:left-[87%] border-[8px] border-[#0F1322] bg-[#86C8D3] rounded-2xl'>
            <img className='w-[70%] h-[50%] relative mx-auto my-[9px]' src={aitb} alt="" />
          </div>

          {
            show? <StartupSaga /> :null
          }
          { showU? <Unnati /> :null}
          { showdb? <DecodeBranding /> : null}

        </div>
      </div>



    </div>

  )
}

export default Initia