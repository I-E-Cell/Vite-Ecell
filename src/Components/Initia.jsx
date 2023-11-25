import React, { useState } from 'react'
import circle from '../assets/circle.png'
import ait from "../assets/AIT.png"
import aitb from "../assets/aitb.png"
import arrow from '../assets/Arrow.png'
import sslogo from "../assets/sslogo.png"

import { motion } from 'framer-motion'
import Graph from './Graph'
import ecell_logo from "../assets/ecell.png";
import StartupSaga from './Events/StartupSaga';
import Unnati from './Events/Unnati';
import DecodeBranding from './Events/DecodeBranding'
import Impression from './Events/Impression'
import { BsArrowUpRight } from "react-icons/bs";
import mixpanel from 'mixpanel-browser';
mixpanel.init('b2ff7ac9e3348a34108ce514efef85ce', {debug: true, track_pageview: true, persistence: 'localStorage'});




const Initia = () => {

  const [show, setShow] = useState(true)
  const [showU, setShowU] = useState(false)
  
  const [showdb, setShowdb] = useState(false)
  const [showI, setShowI] = useState(false)

  const dbranding = () => {
    setShowdb(true)
    setShowU(false)
    setShow(false)
    setShowI(false)
  }
  const StartupSagaa = () => {
    setShowdb(false)
    setShowU(false)
    setShow(true)
    setShowI(false)

  }
  const unnati = () => {
    setShowdb(false)
    setShowU(true)
    setShow(false)
    setShowI(false)

  }
  const impression = () => {
    setShowdb(false)
    setShowI(true)
    setShowU(false)
    setShow(false)
  }


  return (
    <div className=''>
      <div className='flex gap-3 md:gap-28 lg:gap-[300px] item-center justify-center'>
        <h1 className='textt font-semibold pt-[15px] md:pt-[30px] mb-3 flex   items-center  text-[45px] text-center text-white'>Initiatives</h1>
        <img className='absolute md:w-28 right-1 md:right-[20%] w-20 rotate ' src={circle} alt="" />

      </div>
      <div className='flex  top-5 md:top-7 flex-col md:flex-row gap-24 md:gap-[4.4%]  justify-center relative mx-auto '>
      
        <div className='relative mx-auto rounded-2xl h-[15.5em] top-[4.5em]  md:mx-0 w-[92%] md:w-[40%] bg-[#1C1F2B]'>
          <div className='lg:w-[86%] md:w-[80%] w-[82%] h-[6em] relative bg-[#1C1F2B] rounded-2xl -top-[4.5em]'>
            <div className='h-[60%] top-5 absolute skew-x-12 w-[30%] bg-[#1C1F2B] left-[75%]'>

            </div>
            <div className='  relative flex flex-row gap-2 top-1 '>
              <h1 className='rounded-full top-1 left-2 relative shadow-white shadow-sm xl border-[0.5px] p-1 px-3 text-sm border-[#656565] text-white font-thin'>Event Timeline </h1>
            </div>

          </div>
          <div className='absolute lg:left-[86%] left-[82%] md:left-[80%]   border-[12px] border-[#0F1322] lg:w-[15.5%] w-[23%] h-[5.5em] -top-[5.5em] bg-[#1C1F2B] rounded-3xl'>
          <BsArrowUpRight color='white' className='relative mx-auto top-3' size={40} />
            
          </div>

         <Graph />



          <div className=' relative z-20 -top-[9em] md:-top-[8.6em] left-3 lg:left-3 w-[98%] sm:w-[86%]  lg:w-[85%] mx-auto flex ' >
            <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}}  onClick={()=>{impression()}} className='px-2 py-[3px] text-xs text-[#c0c0c0] relative mx-auto rounded-md bg-[#373737]'>
              August
            </motion.button>
            <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}}  onClick={unnati} className='px-4 py-[3px] text-xs text-[#c0c0c0] relative mx-auto rounded-md bg-[#373737]'>
              Sept
            </motion.button>
            <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}}  onClick={dbranding} className='px-4 py-[3px] text-xs text-[#c0c0c0] relative mx-auto rounded-md bg-[#373737]'>
              Nov
            </motion.button>
            <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}}   onClick={StartupSagaa} className='px-3 py-[3px] text-xs text-[#c0c0c0] relative mx-auto rounded-md bg-[#373737]'>
              April
            </motion.button>

          </div>
        </div>

        <div className='relative mx-auto md:mx-0 w-[92%] md:w-[40%] h-[20em]  rounded-2xl bg-[#86C8D3]'>

          <div className='  relative flex flex-row gap-2 top-1 '>
            <h1 className='rounded-full top-1 left-2 relative shadow-[#323232] shadow-sm xl border-[0.5px] p-1 px-3 text-sm border-[#323232] text-[#000000] font-thin'>Event Details </h1>
          </div>
          <div className='absolute h-[20%] md:h-[23.5%] min-w-[60px] w-[17.5%]  md:w-[12.5%] top-[1%] left-[82%] md:left-[87%] '>
            <BsArrowUpRight className='relative mx-auto top-3' size={40} />
          </div>

          {
            show ? <StartupSaga /> : null
          }
          {showU ? <Unnati /> : null}
          {showdb ? <DecodeBranding /> : null}
          {showI? <Impression /> : null}

        </div>
      </div>









    </div>

  )
}

export default Initia