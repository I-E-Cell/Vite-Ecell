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
import tech26 from '../assets/Startups/26tech.jpg'
import accops from '../assets/Startups/accops.jpg'
import copppercloud from '../assets/Startups/coppercloud.png'
import freightfox from '../assets/Startups/freightfox.jpg'
import udchalo from '../assets/Startups/udchalo.jpg'
import myaimate from '../assets/Startups/myaimate.jpg'
import xefficient from '../assets/Startups/xefficient.webp'
import mixpanel from 'mixpanel-browser';
mixpanel.init('b2ff7ac9e3348a34108ce514efef85ce', {debug: true, track_pageview: true, persistence: 'localStorage'});

const Startups = () => {
   
    mixpanel.track('StartupPage Page loaded');

    return (
        <div >

            <Nav />

            <div className='relative w-[100%]   bg-[#0F1322]'>
                <div className='relative mx-auto   justify-center align-middle top-[95px] h-[274em]  md:h-[140em]   w-[94%]  rounded-3xl bg-[#86C8D3]'>
                    <div className=' relative w-[28%]  h-[10em] rounded-3xl left-[72%] -top-[75px]  bg-[#86C8D3]'>
                        <div className='s_box rounded-sm w-[68%] lg:-left-[26.5px] -left-[28px] top-[6px]  h-[60%] bg-[#86C8D3]'>

                        </div>



                    </div>

                    <div className='relative  -top-28 flex flex-col max-w-[98%] gap-28 mx-auto'>
                        <h1 className='relative  text-[#0F1322]  font-bold text-2xl  md:text-4xl flex justify-center text-center w-[100%] '>Startups under I&E Cell</h1>
                        <hr className='relative -mb-20 -top-24 w-[90%] mx-auto bg-slate-800 border-none rounded-3xl h-[2.5px]' />

                    </div>
                    <div className='flex-col  -top-20 flex gap-10 relative  mx-auto '>
                        {/* <div className='flex flex-col md:flex-row  mx-auto relative gap-10  md:gap-20 justify-center'>
                        <StartupCard name="Udchalo" img={udchalo} founder='Ravi Kumar, Varun Jain' linkedin="https://www.linkedin.com/company/udchalo/"/>
                        <StartupCard name="FreightFox" founder="Nitish Rai" img={freightfox}  linkedin="https://www.linkedin.com/company/freightfox-ai/" />
                        </div>
                        <div className='flex flex-col md:flex-row  mx-auto relative gap-10  md:gap-20 justify-center'>
                        <StartupCard name="Accops" founder="Vijender Yadav" img={accops}  linkedin="https://www.linkedin.com/company/accopsinc/" />
                        <StartupCard name="26 Tech" img={tech26} founder="Pallavi Tyagi"  linkedin="https://www.linkedin.com/company/26-technology-services/"/>
                        </div> */}
                        <div className='flex flex-col md:flex-row  mx-auto relative gap-10  md:gap-20 justify-center'>
                        <StartupCard name="Electrun Motors" founder="Piyush Sharma, Sahil Uttekar" img={electrunmotors}  linkedin="https://www.linkedin.com/company/electrun-motors/about/" />
                        <StartupCard name="VirBike"  founder="Sahil Uttekar" img={virbike} linkedin="https://www.linkedin.com/company/virbike/" />
                        </div>
                        <div className='flex flex-col md:flex-row  mx-auto relative gap-10 md:gap-20 justify-center'>
                        <StartupCard name="Skrolcart" img={skrolcart} founder="Pitambar Panda"  linkedin="https://www.skrolcart.com/"/>
                        <StartupCard name="Dev Dynasty" founder="Ayush kumar, Umang Singh, Likhit Reddy, Vaibhav Singh" img={dev}  linkedin="https://www.linkedin.com/company/devdynasty/about/"/>
                        </div>
                        <div className='flex flex-col md:flex-row  mx-auto relative gap-10 md:gap-20 justify-center'>
                        <StartupCard name="Momentum Robotics" founder="Deepak Yadav" img={momentumrobotics} linkedin="https://www.linkedin.com/company/momentum-robotics/"/>
                        <StartupCard name="MyAImate" founder="" img={myaimate} linkedin="https://www.linkedin.com/company/myaimate/"/>
                        {/* <StartupCard name="Nursery Live" founder="Satender Kumar" img={nurserylive}  linkedin="https://www.linkedin.com/company/nurserylive/"/> */}
                        </div>
                        <div className='flex flex-col md:flex-row  mx-auto relative gap-10 md:gap-20 justify-center'>
                        <StartupCard name="Xefficient" img={xefficient} founder="Pitambar Panda"  linkedin="https://www.xefficient.in/"/>
                        <StartupCard name="Deep Info Lab"  img={deepinfolab} founder="Rohan Datta" linkedin="https://www.linkedin.com/company/deepinfolab/about/" />
                        </div>
                        <div className='flex flex-col md:flex-row  mx-auto relative gap-10 md:gap-20 justify-center'>
                        {/* <StartupCard name="Kaagaz" img={kagazz} founder="Tamanjit Bindra"  linkedin="https://www.linkedin.com/company/kaagazscanner/?originalSubdomain=in"/> */}
                        </div>
                        <div className='flex flex-col md:flex-row  mx-auto relative gap-10 md:gap-20 justify-center'>
                        {/* <StartupCard name="Copper Cloud" img={copppercloud} founder="Abhijeet Deogirikar" linkedin="https://www.linkedin.com/company/coppercloud/about/"/> */}

                        {/* <StartupCard name="Kaagaz" img={kagazz} founder="Gaurav Shrimal"  linkedin="https://www.linkedin.com/company/kaagazscanner/?originalSubdomain=in"/> */}
                        </div>
                        
                    </div>



                </div>
            </div>


        </div>
    )
}

export default Startups