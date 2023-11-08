import React from 'react'
import { FaLinkedinIn} from "react-icons/fa";
import tanumam from '../assets/Team/tanumam.png';


const AlumniCard = () => {
    return (
        <div className='w-[18em] z-10 relative  h-[15em] bg-[#1C1F2B] rounded-3xl'>
            <div className='flex absolute  w-[10em] h-[4.5em] -top-[2em] rounded-2xl bg-[#1C1F2B]'>
                <div className='absolute left-[8.45em] w-[2em] top-2 skew-x-[30deg] h-[2em] flex  bg-[#1C1F2B] '>

                </div>
                <div className='relative text-2xl font-semibold left-3 top-[3px] text-[#86C8D3]'>
                    <h1>Ravi Kumar</h1>
                </div>
            </div>
            <div className='flex absolute left-[5em] top-[13em]  w-[13em] h-[4em]  justify-end rounded-2xl bg-[#1C1F2B]'>
                <div className='absolute w-[2em] h-[1.2em] flex right-[13em] bg-[#1C1F2B] top-[2em]'>
                    <div className='relative w-[2em] h-[1.2em] flex bg-[#D9D9D9] border-none  rounded-tr-3xl '>
                    <FaLinkedinIn  size={23} className='relative icon -left-3 top-1 '/>

                    </div>

                </div>
                <div className='text-white text-sm relative w-[100%] h-[50%] justify-center flex font-medium top-8 '><h1>Founder and Director, Udchalo</h1></div>
                <div className='absolute w-[6.2em] bottom-[1em] h-[2em] rounded-bl-3xl rounded-tl-sm a_card  -z-10 flex right-[10.8em] bg-[#D9D9D9] top-[2em]'>

                </div>

            </div>
            <div className='w-[13em] bg-slate-500 relative h-[11.5em] mx-auto top-[1.5em] rounded-2xl'>
                <img className='w-[100%] h-[100%] relative rounded-2xl' src={tanumam} alt="" />
            </div>
        </div>
    )
}

export default AlumniCard