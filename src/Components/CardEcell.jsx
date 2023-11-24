import React from 'react'
import { FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter, FaYoutube, FaHeart } from "react-icons/fa";
import tanumam from '../assets/Team/tanumam.jpg';


function CardEcell(props){
  return (
    <div className='w-[18em] z-10 relative  h-[15em] bg-[#1C1F2B] rounded-3xl'>
            <div className='flex absolute  w-[12.55em] h-[4.5em] -top-[2em] rounded-2xl bg-[#1C1F2B]'>
                <div className='absolute left-[11em] w-[2em] top-2 skew-x-[30deg] h-[2em] flex  bg-[#1C1F2B] '>

                </div>
                <div className='relative text-2xl font-semibold left-[7px] top-[3px] text-[#86C8D3]'>
                    <h1>{props.name}</h1>
                </div>
            </div>
            <div className='flex absolute left-[6.5em] top-[13em]  w-[11.5em] h-[4em]  justify-end rounded-2xl bg-[#1C1F2B]'>
                <div className='absolute w-[1em] h-[1.2em] flex right-[11.5em] bg-[#1C1F2B] top-[2em]'>
                    <div className='relative w-[1em] h-[1.2em] flex bg-[#D9D9D9] border-none  rounded-tr-3xl '>
                    <a target='_blank' href={props.linkedin}><FaLinkedinIn  size={19} className='relative icon -left-4 top-2 '/></a>

                    </div>

                </div>
                <div className='text-white text-sm relative w-[100%] h-[70%]  flex font-medium top-4 flex-col justify-center text-center'><h1>{props.domain}</h1> <h1> {props.branch}</h1></div>
                <div className='absolute w-[8.2em] bottom-[1em] h-[2em] rounded-bl-3xl rounded-tl-sm a_card  -z-10 flex right-[8.8em] bg-[#D9D9D9] top-[2em]'>
                    <div className='flex gap-4 left-6 relative top-[9px]'>
                    <a target='_blank' href={props.insta}><FaInstagram className='icon' size={18}/></a>
                    {/* <a target='_blank' href={props.fb}><FaFacebook className='icon' size={18}/></a> */}
                    </div>
                </div>

            </div>
            <div className='w-[13em] bg-slate-500 relative h-[11.5em] mx-auto top-[1.5em] rounded-2xl'>
                <img target="_blank" className='w-[100%] h-[100%] relative rounded-2xl' src={props.img} alt="" />
            </div>
        </div>
  )
}

export default CardEcell