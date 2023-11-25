import React, { useState } from 'react'
import Nav from './Nav'
import dev from '../assets/Startups/dev.jpeg'
import cv from '../assets/CV.png'
import { motion } from 'framer-motion'
import StartupCard from './StartupCard'
import electrunmotors from '../assets/Startups/electrunmotors.jpeg'
import virbike from '../assets/Startups/virbike.jpeg'
import deepinfolab from '../assets/Startups/deepinfolab.jpeg'
import skrolcart from '../assets/Startups/skrolcart.png'
import nurserylive from '../assets/Startups/nurserylive.jpeg'
import momentumrobotics from '../assets/Startups/momentumrobotics.jpeg'
import kagazz from '../assets/Startups/kaagazz.jpeg'
import myaimate from '../assets/Startups/myaimate.jpg'
import xefficient from '../assets/Startups/xefficient.webp'


const Startups = () => {
   


    return (
        <div >

            <Nav />

            <div className='relative w-[100%]   bg-[#0F1322]'>
                <div className='relative mx-auto   justify-center align-middle top-[95px] h-[305em]  md:h-[165em]   w-[94%]  rounded-3xl bg-[#86C8D3]'>
                    <div className=' relative w-[28%]  h-[10em] rounded-3xl left-[72%] -top-[75px]  bg-[#86C8D3]'>
                        <div className='s_box rounded-sm w-[68%] lg:-left-[26.5px] -left-[28px] top-[6px]  h-[60%] bg-[#86C8D3]'>

                        </div>



                    </div>

                    <div className='relative  -top-28 flex flex-col max-w-[98%] gap-28 mx-auto'>
                        <h1 className='relative  text-[#0F1322]  font-bold text-3xl  md:text-4xl flex justify-center text-center w-[100%] '>Startup Initiatives</h1>
                        <hr className='relative -mb-20 -top-24 w-[90%] mx-auto bg-slate-800 border-none rounded-3xl h-[2.5px]' />

                    </div>
                    <div className='flex-col  -top-20 flex gap-10 relative  mx-auto '>
                        <div className='flex flex-col md:flex-row  mx-auto relative gap-10  md:gap-20 justify-center'>
                        <StartupCard name="Dev Dynasty" img={dev}  linkedin="https://www.linkedin.com/company/devdynasty/about/"/>
                        <StartupCard name="Electrun Motors" founder="Sahil Uttekar" img={electrunmotors}  linkedin="https://www.linkedin.com/company/electrun-motors/about/" />
                        </div>
                        <div className='flex flex-col md:flex-row  mx-auto relative gap-10 md:gap-20 justify-center'>
                        <StartupCard name="VirBike" discription="" founder="Sahil Uttekar" img={virbike} linkedin="https://www.linkedin.com/company/virbike/" />
                        <StartupCard name="Deep Info Lab"  img={deepinfolab} founder="Rohan Datta" linkedin="https://www.linkedin.com/company/deepinfolab/about/" />
                        </div>
                        <div className='flex flex-col md:flex-row  mx-auto relative gap-10 md:gap-20 justify-center'>
                        <StartupCard name="Skrolcart" img={skrolcart} founder="Pitambar Panda"  linkedin="https://www.skrolcart.com/"/>
                        <StartupCard name="Nursery Live" founder="Satender Kumar" img={nurserylive}  linkedin="https://www.linkedin.com/company/nurserylive/"/>
                        </div>
                        <div className='flex flex-col md:flex-row  mx-auto relative gap-10 md:gap-20 justify-center'>
                        <StartupCard name="Momentum Robotics" founder="Deepak Yadav" img={momentumrobotics} linkedin="https://www.linkedin.com/company/momentum-robotics/"/>
                        <StartupCard name="MyAImate" founder="" img={myaimate} linkedin="https://www.linkedin.com/company/myaimate/"/>
                        </div>
                        <div className='flex flex-col md:flex-row  mx-auto relative gap-10 md:gap-20 justify-center'>
                        <StartupCard name="Xefficient" img={xefficient} founder="Pitambar Panda"  linkedin="https://www.xefficient.in/"/>
                        {/* <StartupCard name="Kaagaz" img={kagazz} founder="Gaurav Shrimal"  linkedin="https://www.linkedin.com/company/kaagazscanner/?originalSubdomain=in"/> */}
                        </div>
                        
                    </div>



                </div>
            </div>


        </div>
    )
}

export default Startups