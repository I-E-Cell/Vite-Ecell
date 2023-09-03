import React from 'react'
import { FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter, FaYoutube, FaHeart} from "react-icons/fa";

const Footer = () => {
    return (<>
        <div id='top' className='bg-[#1E1E1E]  w-[100%] h-[100vh] md:h-[55vh] flex  flex-col md:flex-row'>
            <div className='w-[100%] align-centre justify-center md:w-[30%]'>
                <div className='text-white  mx-auto w-[80%] justify-center rounded-xl'>

                    <div className="mx-auto rounded-xl overflow-x-hidden justigy-center">
                        <iframe className='rounded-xl my-10 mx-auto ' src="https://maps.google.com/maps?q=ait pune&t=k&z=16&ie=UTF8&iwloc=&output=embed"></iframe>

                    </div>
                    <h1 className='w-[80%]  mx-auto text-center  my-1'>Army Institute of Technology,Pune
                        Dighi Hills Pune 411015</h1>
                </div>
                <div className='flex gap-1  justify-evenly px-16 my-12 '>
                    <div className='w-[45px] h-[45px] bg-white rounded-full'>
                        <FaFacebook size={25} className='mx-auto my-[20%]'/>
                    </div>
                    <div className='w-[45px] h-[45px] bg-white rounded-full'>
                        <FaInstagram size={25} className='mx-auto my-[20%]'/>
                    </div>
                    <div className='w-[45px] h-[45px] bg-white rounded-full'>
                        <FaTwitter size={25} className='mx-auto my-[20%]'/>
                    </div>
                    <div className='w-[45px] h-[45px] bg-white rounded-full'>
                        <FaLinkedinIn size={25} className='mx-auto my-[20%]'/>
                    </div>
                    <div className='w-[45px] h-[45px] bg-white rounded-full'>
                        <FaYoutube size={25} className='mx-auto my-[20%]'/>
                    </div>

                </div>

            </div>
            <div className='w-[100%] flex-col right-0 md:w-[70%]'>
                <div>
                    

                </div>
                <div className='text-[70px] sm:text-[95px] md:text-[100px] lg:text-[133px] mx-[10%]   top-[210px]   text-[#414141] font-bold'>
                    <h1 className=' my-0'>I&E CELL</h1>
                </div>

            </div>
            {/* FOOTER  */}
        </div>
        <div className='h-6 mx-auto  bg-[#FEF7D8]'>
                <h1 className='flex text-[sm] mx-auto justify-center '> Made without  <FaHeart color='red' className=' mt-1 mx-2'/>   by I&E Cell</h1>
        </div>
        </>)
}

export default Footer