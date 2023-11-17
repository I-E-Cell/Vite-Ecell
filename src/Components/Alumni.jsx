import React from 'react'
import Nav from './Nav'
import AlumniCard from './AlumniCard'
import rahool from '../assets/Alumni/rahool.jpeg'
import ravisir from '../assets/Alumni/ravisir.jpg'
import baljeetsir from '../assets/Alumni/baljeet.jpg'
import vikramsareen from '../assets/Alumni/vikramsareen.jpeg'
import karanrai from "../assets/Alumni/karanrai.jpeg"
import pallavimam from '../assets/Alumni/pallavimam.jpeg'
import rohandatta from "../assets/Alumni/rohandatta.jpeg"
import abhijeetsir from '../assets/Alumni/abhijeetsir.jpeg'
import ayushsir from '../assets/Alumni/ayushsir.jpeg'
import sahilsir from '../assets/Alumni/sahilsir.jpeg'
import varunjain from '../assets/Alumni/varunjain.jpeg'
import deepakyadav from '../assets/Alumni/deepakyadav.jpeg'
import satenderkumar from '../assets/Alumni/satenderkumar.jpeg'
import awanishpandey from '../assets/Alumni/awanishpandey.jpeg'





const Alumni = () => {
    return (
        <div >
            <Nav />
            <div className='relative w-[100%]   bg-[#0F1322]'>
                <div className='relative mx-auto justify-center align-middle top-[95px] pb-1 mb-3   w-[94%]  rounded-3xl bg-[#86C8D3]'>
                    <div className=' relative w-[28%]  h-[10em] rounded-3xl left-[72%] -top-[75px]  bg-[#86C8D3]'>
                        <div className='s_box rounded-sm w-[68%] lg:-left-[26.5px] -left-[28px] top-[6px]  h-[60%] bg-[#86C8D3]'>

                        </div>



                    </div>

                    <div className='relative -top-28 flex flex-col max-w-[98%] gap-28 mx-auto'>



                        <h1 className='absolute md:mt-6 text-[#0F1322]  font-bold text-3xl  md:text-4xl flex justify-center text-center w-[100%] '>Alumni Entrepreneurs</h1>
                        <div className='relative mt-24 md:mt-36 mx-auto w-[98%]'>
                            <div className='flex flex-col nextline relative justify-center mb-28 gap-28  '>
                                <div className='flex flex-col lg:flex-row relative gap-20  nextline mx-auto '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <AlumniCard name="Ravi Kumar" position="Founder and Director at udChalo" img={ravisir} linkedin="https://www.linkedin.com/in/raviudchalo/" />
                                        <AlumniCard name="Ayush Agrawal" position="Founder, CodeFoxie & Seniority.in" img={ayushsir} linkedin="https://www.linkedin.com/in/agrawalayush/" />

                                    </div>
                                    <div className='flex flex-col lg:ml-4 md:flex-row relative mx-auto  gap-20 md:gap-12'>
                                        <AlumniCard name="Baljeet Singh" position="Co-Founder at mTatva & Simbo.ai" img={baljeetsir} linkedin="https://www.linkedin.com/in/blusingh/" />
                                        <AlumniCard name="Vikram Sareen" img={vikramsareen} position="Co-Founder, Chief Architect Blue Bricks Pvt Ltd" linkedin="https://www.linkedin.com/in/vikramsareen/" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col nextline relative justify-center mb-28 gap-28  '>
                                <div className='flex flex-col lg:flex-row relative gap-20  nextline mx-auto '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <AlumniCard name="Abhijeet Deogirikar" img={abhijeetsir} position="Founder at CopperCloud IOTech Pvt Ltd" linkedin="https://www.linkedin.com/in/abhijeet-deogirikar-ab5732a/" />
                                        <AlumniCard name="Rohan Datta" img={rohandatta} position="CEO and Founder at Deep Info Lab" linkedin="https://www.linkedin.com/in/rohan-datta-ab930b150/" />
                                    </div>
                                    <div className='flex flex-col lg:ml-4 md:flex-row relative mx-auto  gap-20 md:gap-12'>
                                        <AlumniCard name="Karan Rai" img={karanrai} position="Founder, Red Panda Innovation Labs" linkedin="https://www.linkedin.com/in/karanrai/" />
                                        <AlumniCard name="Pallavi Tyagi" img={pallavimam} position="Founder, 26 Technology Services" linkedin="https://www.linkedin.com/in/pallavityagi/" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col nextline relative justify-center mb-28 gap-28  '>
                                <div className='flex flex-col lg:flex-row relative gap-20  nextline mx-auto '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <AlumniCard name="Sahil Uttekar" img={sahilsir} position="Founder & Head of Operations at Vir Bike" linkedin="https://www.linkedin.com/in/sahil-uttekar-909b861a0/" />
                                        <AlumniCard name="Rahool Gadkari" position="Co-Founder, Neufin" img={rahool} linkedin="https://www.linkedin.com/in/rahoolgadkari/" />

                                    </div>
                                    <div className='flex flex-col lg:ml-4 md:flex-row relative mx-auto  gap-20 md:gap-12'>
                                        <AlumniCard name="Varun Jain" img={varunjain} position="Co-Founder, UdChalo & UpCurve Software" linkedin="https://www.linkedin.com/in/varunjainpune/" />
                                        <AlumniCard name="Deepak Yadav" img={deepakyadav} position="Co-Founder at Momentum Robotics" linkedin="https://www.linkedin.com/in/deepak-kr-ait/" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col nextline relative justify-center mb-28 gap-28  '>
                                <div className='flex flex-col lg:flex-row relative gap-20  nextline mx-auto '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <AlumniCard name="Satender Kumar" img={satenderkumar} position="Co-founder at Nurserylive" linkedin="https://www.linkedin.com/in/satender-kumar-5637b022/" />
                                        <AlumniCard name="Awanish Pandey" position="Founder, PostingChalo & CargoSync Pvt Ltd" img={awanishpandey} linkedin="https://www.linkedin.com/in/awanish-pandey-pmp%C2%AE-968aaab7/" />

                                    </div>
                                    <div className='flex flex-col lg:ml-4 md:flex-row relative mx-auto  gap-20 md:gap-12'>
                                        <AlumniCard name="Varun Jain" img={varunjain} position="Co-Founder, UdChalo & UpCurve Software" linkedin="https://www.linkedin.com/in/varunjainpune/" />
                                        <AlumniCard name="Deepak Yadav" img={satenderkumar} position="Co-Founder at Momentum Robotics" linkedin="https://www.linkedin.com/in/pallavityagi/" />
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

export default Alumni