import React from 'react'

import gulshan from "../assets/gulshann.png"
import Card from './TeamCard';
import ecell_logo from "../assets/ecell.png";
import Nav from "./Nav";


const Team = () => {
    return (
        <div >
            <Nav />
            <div className='relative w-[100%]   pb-32  bg-[#0F1322]'>
                <div className='relative mx-auto justify-center align-middle top-[95px]  w-[94%]  rounded-3xl bg-[#1C1F2B]'>
                    <div className=' relative w-[28%]  h-[10em] rounded-3xl left-[72%] -top-[75px]  bg-[#1C1F2B]'>
                        <h1 className='absolute text-[#e6e6e6] z-10 font-semibold text-3xl md:text-4xl hidden md:flex justify-center text-center md:left-[25%] lg:left-[34%] top-5'>Team</h1>
                        <div className='s_box rounded-sm w-[68%] lg:-left-[26.5px] -left-[28px] top-[6px]  h-[60%] bg-[#1C1F2B]'>

                        </div>
                    </div>


                    <div className=' py-4 relative mx-auto rounded-lg -top-28  max-w-[95%]'>
                        
                        <div className=' relative max-w-[98%] mx-auto overflow-hidden'>
                            <div>
                                <h1 className='mx-auto text-[#e6e6e6] text-center textt text-3xl sm:text-4xl  py-4 font-bold'>Mentors</h1>

                            </div>
                            <div className='flex flex-col lg:flex-row relative nextline mx-auto '>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-16'>
                                    <Card name="Samik Chaudhary" branch="SE COMP" img={gulshan} />
                                    <Card name="Ayush Singh" branch="SE COMP" img={gulshan} />

                                </div>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-16'>

                                    <Card name="Sandeep Mishra" branch="SE COMP" img={gulshan} />
                                    <Card name="Abhinaw Gupta" branch="SE COMP" img={gulshan} />
                                </div>





                            </div>
                        </div>
                        <div className='relative max-w-[98%] mx-auto overflow-hidden'>
                            <div>
                                <h1 className='mx-auto text-[#e6e6e6] text-center text-3xl sm:text-4xl  textt py-4 font-bold'>Secretary</h1>

                            </div>
                            <div className='flex flex-col   relative mx-auto  md:flex-row justify-center gap-16'>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-16'>
                                    <Card name="Ayush Kumar" branch="SE COMP" img={gulshan} />
                                    <Card name="Jyoti Yadav" branch="SE COMP" img={gulshan} />
                                </div>



                            </div>
                        </div>
                        <div className='relative max-w-[98%] mx-auto overflow-hidden'>
                            <div>
                                <h1 className='mx-auto text-[#e6e6e6] text-center text-3xl textt sm:text-4xl pt-9  py-4 font-bold'>Domain Heads</h1>

                            </div>
                            <div className='flex flex-col lg:flex-row relative nextline mx-auto  justify-center'>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-16'>
                                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan} />
                                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan} />
                                </div>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-16'>
                                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan} />
                                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan} />
                                </div>
                            </div>
                        </div>
                        <div className='relative max-w-[98%] mx-auto overflow-hidden pb-6'>
                            <div>
                                <h1 className='mx-auto text-[#e6e6e6] text-center text-3xl textt sm:text-4xl pt-9  py-4 font-bold'>Joint Secretaries</h1>

                            </div>
                            <div className='flex flex-col lg:flex-row relative nextline mx-auto  justify-center '>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-16'>
                                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan} insta={"https://www.instagram.com/gulshansingh___/"} />
                                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan} />
                                </div>
                                <div className='flex flex-col md:flex-row relative mx-auto  gap-16'>
                                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan} />
                                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan} />
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row relative nextline mx-auto  justify-center'>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-16'>
                                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan} />
                                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan} />
                                </div>
                                <div className='flex flex-col relative mx-auto md:flex-row gap-16'>
                                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan} />
                                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan} />
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row relative nextline mx-auto  justify-center '>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-16'>
                                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan} />
                                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan} />
                                </div>
                                <div className='flex flex-col relative mx-auto md:flex-row gap-16'>
                                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan} />
                                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan} />
                                </div>
                            </div>


                        </div>


                    </div>



                </div>
            </div>


        </div>
    )
}

export default Team