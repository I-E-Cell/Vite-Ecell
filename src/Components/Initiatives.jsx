import React from 'react';
import oo from '../assets/oo.png';
import back from '../assets/Rectangle 18.png';


const Initiatives = () => {
  return (
    <div>
        <div className='flex my-auto mx-auto justify-center'>
            <img className='w-[60px] h-[60px]' src={oo} alt="" />
            <h1 className='my-auto text-[#935CFF] text-5xl  font-bold'>UR INITIATIVES</h1>
        </div>
        <div>
            <img className='py-10 w-[100%]' src={back} alt="" />
            
        </div>
    </div>
  )
}

export default Initiatives