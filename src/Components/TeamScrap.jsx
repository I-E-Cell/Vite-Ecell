import React from 'react'
import Card from './CardEcell';

import Nav from "./Nav";
import tanumam from '../assets/Team/tanumam.png';
import gulshan from '../assets/Team/gulshan.jpeg'
import mitesh from '../assets/Team/mitesh.jpeg'
import govardhan from '../assets/Team/gobardan.jpg'
import tanishk from '../assets/Team/tanishk.jpg'
import navjot from '../assets/Team/navjot.jpg'
import abhinav from '../assets/Team/abhinav.jpg'
import neha from '../assets/Team/neha.jpeg'
import ashi from '../assets/Team/ashi.png'
import sumit from '../assets/Team/sumit.jpg'
import taniya from '../assets/Team/taniya.jpg'
import arshia from '../assets/Team/arshia.jpg'


const TeamScrap = () => {
  return (
    <div >
            <Nav />
            <div className='relative w-[100%]   pb-32  bg-[#0F1322]'>
                <div className='relative mx-auto justify-center align-middle top-[95px]  w-[94%]  rounded-3xl bg-[#86C8D3]'>
                    <div className=' relative w-[28%]  h-[10em] rounded-3xl left-[72%] -top-[75px]  bg-[#86C8D3]'>
                        <h1 className='absolute text-[#0F1322]  z-10 font-bold text-3xl md:text-4xl hidden md:flex justify-center text-center md:left-[25%] lg:left-[34%] top-5'>Team</h1>
                        <div className='s_box rounded-sm w-[68%] lg:-left-[26.5px] -left-[28px] top-[6px]  h-[60%] bg-[#86C8D3]'>

                        </div>
                    </div>


                    <div className=' py-4 relative mx-auto rounded-lg -top-28  max-w-[95%]'>

                        <div className=' relative flex flex-col max-w-[98%] gap-28 mx-auto'>
                            <div className='-mb-14'>
                                <h1 className='mx-auto text-[#0F1322] text-center textt text-3xl sm:text-4xl  py-4 font-semibold'>Mentors</h1>

                            </div>
                            <div className='flex flex-col lg:flex-row relative gap-20 nextline mx-auto '>
                                <div className='flex flex-col mr-4 relative mx-auto  md:flex-row gap-20  md:gap-12'>
                                    <Card name="Samik Choudhury" branch="BE ENTC" img={tanumam} />
                                    <Card name="Ayush Singh" branch="BE ENTC" img={tanumam} />

                                </div>
                                <div className='flex flex-col ml-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>

                                    <Card name="Sandeep Mishra" branch="BE ENTC" img={tanumam} />
                                    <Card name="Abhinaw Gupta" branch="BE ENTC" img={tanumam} />
                                </div>
                            </div>
                            <div className='flex flex-col   relative mx-auto  md:flex-row justify-center gap-20 md:gap-12'>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                    <Card name="Tanu Sharma" branch="BE Mech" img={tanumam} />
                                </div>
                            </div>
                        </div>
                        <div className='relative max-w-[98%] mx-auto'>
                            <div className='mb-10 mt-10'>
                                <h1 className='mx-auto text-[#0F1322] text-center text-3xl sm:text-4xl  textt py-4 font-semibold'>Secretary</h1>

                            </div>
                            <div className='flex flex-col   relative mx-auto  md:flex-row justify-center gap-20 md:gap-12'>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                    <Card name="Ayush Kumar" branch="TE ENTC" img={tanumam} />
                                    <Card name="Jyoti Yadav" branch="TE ENTC" img={tanumam} />
                                </div>



                            </div>
                        </div>
                        <div className='relative max-w-[98%] mx-auto '>
                            <div className='mb-10 mt-10'>
                                <h1 className='mx-auto text-[#0F1322] text-center text-3xl textt sm:text-4xl pt-9  py-4 font-semibold'>Domain Heads</h1>

                            </div>
                            <div className='flex flex-col lg:flex-row relative gap-20 nextline mx-auto  justify-center'>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                    <Card name="Gulshan Singh" branch="SE COMP" img={tanumam} />
                                    <Card name="Gulshan Singh" branch="SE COMP" img={tanumam} />
                                </div>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                    <Card name="Gulshan Singh" branch="SE COMP" img={tanumam} />
                                    <Card name="Gulshan Singh" branch="SE COMP" img={tanumam} />
                                </div>
                            </div>
                        </div>
                        <div className='relative max-w-[98%] mx-auto  pb-6'>
                            <div className='mb-10 mt-10'>
                                <h1 className='mx-auto text-[#0F1322] text-center text-3xl textt sm:text-4xl pt-9  py-4 font-semibold'>Joint Secretaries</h1>

                            </div>
                            <div className='flex flex-col gap-28 '>
                                <div className='flex flex-col lg:flex-row relative gap-20  nextline mx-auto   '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Gulshan Singh" branch="SE COMP" img={gulshan} insta={"https://www.instagram.com/gulshansingh___/"} domain="Webdev, Graphics" />
                                        <Card name="Mitesh Maity" branch="SE ENTC" img={mitesh} domain="Webdev, Content" />
                                    </div>
                                    <div className='flex flex-col lg:ml-4 md:flex-row relative mx-auto  gap-20 md:gap-12'>
                                        <Card name="Gobardan Reddy" branch="SE ENTC" img={govardhan} domain="Webdev, Graphics" />
                                        <Card name="Tanishk Soam" branch="SE COMP" img={tanishk} domain="Sponsorship, Graphics"/>
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row relative gap-20 nextline mx-auto   '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Navjot Singh" branch="SE COMP" img={navjot} domain="Video, Graphics" />
                                        <Card name="Abninav Shinde" branch="SE COMP" img={abhinav} domain="Content, Graphics"/>
                                    </div>
                                    <div className='flex flex-col lg:ml-4 relative mx-auto md:flex-row gap-20 md:gap-12'>
                                        <Card name="Neha Sharma" branch="SE ENTC" img={neha} domain=" Graphics, PR"/>
                                        <Card name="Ashi Singh" branch="SE ENTC" img={ashi} domain="Content, Social Media"/>
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row relative  gap-20 nextline mx-auto  '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Sumit Nath" branch="SE ENTC" img={sumit} domain="Sponsorship, Graphics"/>
                                        <Card name="Taniya Singh" branch="SE Mech" img={taniya} domain="Content, PR"/>
                                    </div>
                                    <div className='flex flex-col lg:ml-4 relative mx-auto md:flex-row gap-20 md:gap-12'>
                                        <Card name="Arshia Garg" branch="SE ENTC" img={arshia} domain="Content, PR"/>
                                        <Card name="Gulshan Singh" branch="SE COMP" img={tanumam} />
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>



                </div>
            </div>


        </div>
  )
}

export default TeamScrap