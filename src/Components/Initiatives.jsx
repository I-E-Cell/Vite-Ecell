import React from 'react';
import oo from '../assets/oo.png';
import back from '../assets/Rectangle.png';
import Carousel from './Carousell';



const Initiatives = () => {
  return (
    <div>
        <div className='flex my-auto mx-auto  justify-center '>
            <img className='w-[40px] h-[40px] my-auto sm:w-[60px] sm:h-[60px]' src={oo} alt="" />
            <h1 className='my-auto text-[#935CFF] text-4xl sm:text-5xl  py-20 font-bold'>UR INITIATIVES</h1>
        </div>
        <div className="py-[10%] pb-10 init">
           
            <Carousel />
            
        </div>
    </div>
  )
}

export default Initiatives