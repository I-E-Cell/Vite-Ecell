// ------------------------------Footer----------------------------------//

import React from 'react'
import { FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter, FaYoutube, FaHeart, } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (<>
        <div>
            <hr className='w-[95%] mx-auto  my-12'/>
            <div id='top' className='bg-[#0F1322]  w-[100%] h-[30em] sm:h-[34em] md:h-[20em] flex  flex-col md:flex-row'>

                <div className='w-[100%] align-centre justify-center md:w-[30%]'>
                    <div className='text-white  mx-auto w-[80%] justify-center rounded-xl'>

                        <div className="mx-auto rounded-xl overflow-x-hidden justigy-center">
                            <iframe className='rounded-xl  mb-10 mx-auto ' src="https://maps.google.com/maps?q=ait pune&t=k&z=16&ie=UTF8&iwloc=&output=embed"></iframe>

                        </div>
                        <h1 className='w-[80%]  mx-auto text-center textt '>Army Institute of Technology,Pune
                            Dighi Hills Pune 411015</h1>
                    </div>
                    <div className='flex  justify-evenly lg:px-16 my-5 '>
                        <a target='_blank' href='https://www.facebook.com/ecellait' className='w-[38px] h-[38px] bg-white rounded-full'>
                            <FaFacebook size={22} className='mx-auto my-[20%]' />
                        </a>
                        <a target='_blank' href='https://www.instagram.com/ecell_ait/' className='w-[38px] h-[38px] bg-white rounded-full'>
                            <FaInstagram size={22} className='mx-auto my-[20%]' />
                        </a>
                        <a target='_blank' href='https://twitter.com/ecell_aitpune' className='w-[38px] h-[38px] bg-white rounded-full'>
                            <FaTwitter size={22} className='mx-auto my-[20%]' />
                        </a>
                        <a target='_blank' href='https://www.linkedin.com/company/innovation-entrepreneurship-cell/' className='w-[38px] h-[38px] bg-white rounded-full'>
                            <FaLinkedinIn size={22} className='mx-auto my-[20%]' />
                        </a>
                        <a target='_blank' href='https://www.youtube.com/@aitecell' className='w-[38px] h-[38px] bg-white rounded-full'>
                            <FaYoutube size={22} className='mx-auto my-[20%]' />
                        </a>

                    </div>

                </div>
                <div className='w-[100%] flex-col relative mx-auto right-0 md:w-[70%]'>
                    <div className='flex    md:gap-16 md:justify-end relative mx-auto  md:-left-32'>
                        <div className='textt hidden mx-auto md:mx-0 text-white relative lg:flex flex-col top-4' >
                            <a className='font-semibold mb-3'>QUICK LINKS</a>
                            <a href='' className='text-xs mb-2  font-thin'>Our Team</a>
                            <a href='' className='text-xs mb-2  font-thin'>Gallery</a>
                            <a href='' className='text-xs mb-2  font-thin'>Startup Initiatives </a>
                            <a href='' className='text-xs mb-2  font-thin'>AIT Pune</a>


                        </div>
                        <div className='textt text-white mx-auto md:mx-0 relative flex flex-col top-4' >
                            <a className='font-semibold mb-3'>QUICK LINKS</a>
                            <a href='' className='text-xs mb-2  font-thin'>Our Team</a>
                            <a href='' className='text-xs mb-2  font-thin'>Gallery</a>
                            <Link to='/credits'>
                            <a href='' className='text-xs mb-3 bottom-1 relative  font-thin'>Credits </a>
                            </Link>
                            <a href='' className='text-xs mb-2  font-thin'>AIT Pune</a>


                        </div>
                        <div className='textt text-white mx-auto md:mx-0 relative rounded-xl p-2 px-2 border-white border-[1px] top-4 px-1' >

                            <p className='text-xs mb-2 max-w-[180px] '>“If you look at history, innovation doesn’t come just from giving people incentives; it comes from creating environments where their ideas can connect.“</p>

                            <a href='/' className='flex justify-end gap-2 text-[#B8BFFF]'  >I & E Cell <BsArrowUpRight color='#B8BFFF' size={15} /></a>

                        </div>


                    </div>
                    <div className='text-[60px]   textt sm:text-[85px] md:text-[90px] lg:text-[113px] mx-[10%]   top-[40px]   text-[#414141] hidden sm:flex justify-center md:justify-start font-bold'>
                        <h1 className=' my-0'>I&E CELL</h1>
                    </div>

                </div>
                {/* FOOTER  */}
            </div>
            <div className='h-6 mx-aua  bg-[#B8BFFF]'>
                <h1 className='flex text-[sm] mx-auto justify-center '> Made with  <FaHeart color='red' className=' mt-1 mx-2' />   by I&E Cell</h1>
            </div>
        </div>
    </>)
}

export default Footer