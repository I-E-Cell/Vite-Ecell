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
import anupamratha from '../assets/Alumni/anupamratha.jpeg'
import vinayaksharma from '../assets/Alumni/vinayaksharma.jpeg'
import purugupta from '../assets/Alumni/purugupta.jpeg'
import navneet from '../assets/Alumni/navneet.jpeg'
import vijenderyadav from '../assets/Alumni/vijenderyadav.jpeg'
import ankushtiwari from '../assets/Alumni/ankushtiwari.jpeg'
import nitishrai from '../assets/Alumni/nitishrai.jpeg'
import vishwajeet from '../assets/Alumni/vishwajeet.jpeg'
import vinodkulhari from '../assets/Alumni/vinodkulhari.jpeg'
import sandeepm from '../assets/Alumni/sandeepm.jpeg'
import pitambersir from '../assets/Alumni/pitambersir.jpg'
import tamanjitbindra from '../assets/Alumni/tamanjitbindra.jpg'
import piyushsharma from '../assets/Alumni/piyushsharma.jpg'
import mixpanel from 'mixpanel-browser';
mixpanel.init('b2ff7ac9e3348a34108ce514efef85ce', {debug: true, track_pageview: true, persistence: 'localStorage'});

const Alumni = () => {
    mixpanel.track('Alumni Page loaded');
    return (
        <div >
            <Nav />
            <div className='relative w-[100%]  bg-[#0F1322]'>
                <div className='relative mx-auto justify-center align-middle top-[95px]    w-[94%]  rounded-3xl bg-[#86C8D3]'>
                    <div className=' relative w-[28%]  h-[10em] rounded-3xl left-[72%] -top-[75px]  bg-[#86C8D3]'>
                        <div className='s_box rounded-sm w-[68%] lg:-left-[26.5px] -left-[28px] top-[6px]  h-[60%] bg-[#86C8D3]'>

                        </div>



                    </div>

                    <div className='relative -top-28  flex flex-col max-w-[98%] gap-28 mx-auto'>



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
                                        <AlumniCard name="Nitish Rai" img={nitishrai} position="Founder and CEO FreightFox" linkedin="https://www.linkedin.com/in/aspiringnitish/" />

                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col nextline relative justify-center mb-28 gap-28  '>
                                <div className='flex flex-col lg:flex-row relative gap-20  nextline mx-auto '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <AlumniCard name="Satender Kumar" img={satenderkumar} position="Co-founder at Nurserylive" linkedin="https://www.linkedin.com/in/satender-kumar-5637b022/" />
                                        <AlumniCard name="Vikram Sareen" img={vikramsareen} position="Co-Founder, Chief Architect Blue Bricks Pvt Ltd" linkedin="https://www.linkedin.com/in/vikramsareen/" />

                                    </div>
                                    <div className='flex flex-col lg:ml-4 md:flex-row relative mx-auto  gap-20 md:gap-12'>
                                        <AlumniCard name="Vijender Yadav" img={vijenderyadav} position="Co-founder, Managing Director at Accops" linkedin="https://www.linkedin.com/in/vijenderyadav11/?originalSubdomain=in" />

                                        <AlumniCard name="Varun Jain" img={varunjain} position="Co-Founder, UdChalo & UpCurve Software" linkedin="https://www.linkedin.com/in/varunjainpune/" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col nextline relative justify-center mb-28 gap-28  '>
                                <div className='flex flex-col lg:flex-row relative gap-20  nextline mx-auto '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <AlumniCard name="Sahil Uttekar" img={sahilsir} position="Founder & Head of Operations at Vir Bike" linkedin="https://www.linkedin.com/in/sahil-uttekar-909b861a0/" />
                                        <AlumniCard name="Tamanjit Bindra" position="Co-Founder at Kaagaz " img={tamanjitbindra} linkedin="https://www.linkedin.com/in/tamanjit/" />

                                    </div>
                                    <div className='flex flex-col lg:ml-4 md:flex-row relative mx-auto  gap-20 md:gap-12'>
                                        <AlumniCard name="Pallavi Tyagi" img={pallavimam} position="Founder, 26 Technology Services" linkedin="https://www.linkedin.com/in/pallavityagi/" />
                                        <AlumniCard name="Deepak Yadav" img={deepakyadav} position="Co-Founder at Momentum Robotics" linkedin="https://www.linkedin.com/in/deepak-kr-ait/" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col nextline relative justify-center mb-28 gap-28  '>
                                <div className='flex flex-col lg:flex-row relative gap-20  nextline mx-auto '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <AlumniCard name="Rahool Gadkari" position="Co-Founder, Neufin" img={rahool} linkedin="https://www.linkedin.com/in/rahoolgadkari/" />
                                        <AlumniCard name="Abhijeet Deogirikar" img={abhijeetsir} position="Founder at CopperCloud IOTech Pvt Ltd" linkedin="https://www.linkedin.com/in/abhijeet-deogirikar-ab5732a/" />


                                    </div>
                                    <div className='flex flex-col lg:ml-4 md:flex-row relative mx-auto  gap-20 md:gap-12'>
                                        <AlumniCard name="Anupam Ratha" img={anupamratha} position="Co-founder & CEO Credid, Inc." linkedin="https://www.linkedin.com/in/anupamratha/" />
                                        <AlumniCard name="Vinayak Sharma" img={vinayaksharma} position="Founder CEO | Ultra Marathoner, 100 Miler" linkedin="https://www.linkedin.com/in/vinayaksharma/" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col nextline relative justify-center mb-28 gap-28  '>
                                <div className='flex flex-col lg:flex-row relative gap-20  nextline mx-auto '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <AlumniCard name="Puru Gupta" img={purugupta} position="Co-Founder & CEO at True Elements" linkedin="https://www.linkedin.com/in/purugupta/" />
                                        <AlumniCard name="Navneet Waraich" position="Co-Founder at SuperGaming" img={navneet} linkedin="https://www.linkedin.com/in/nswaraich/" />

                                    </div>
                                    <div className='flex flex-col lg:ml-4 md:flex-row relative mx-auto  gap-20 md:gap-12'>
                                        <AlumniCard name="Karan Rai" img={karanrai} position="Founder, Red Panda Innovation Labs" linkedin="https://www.linkedin.com/in/karanrai/" />

                                        <AlumniCard name="Ankush Tiwari" img={ankushtiwari} position="Co-Founder and Legs of Engineering at zblocks" linkedin="https://www.linkedin.com/in/ankushtiwari/" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col nextline relative justify-center mb-28 gap-28  '>
                                <div className='flex flex-col lg:flex-row relative gap-20  nextline mx-auto '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <AlumniCard name="Vishwajeet Singh" position="Co-Founder, EZMove.in & Sensible Softwares " img={vishwajeet} linkedin="https://www.linkedin.com/in/singhvishwajeet/" />
                                        <AlumniCard name="Rohan Datta" img={rohandatta} position="CEO and Founder at Deep Info Lab" linkedin="https://www.linkedin.com/in/rohan-datta-ab930b150/" />

                                    </div>
                                    <div className='flex flex-col lg:ml-4 md:flex-row relative mx-auto  gap-20 md:gap-12'>
                                        <AlumniCard name="Vinod Kulhari" img={vinodkulhari} position="Founder at SweeDesi" linkedin="https://www.linkedin.com/in/vinod-kulhari/" />
                                        <AlumniCard name="Sandeep Muley" img={sandeepm} position="Founder at Bharatrath" linkedin="https://www.linkedin.com/in/sandeepmuley/" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col nextline relative justify-center mb-28 gap-28  '>
                                <div className='flex flex-col lg:flex-row relative gap-20  nextline mx-auto '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <AlumniCard name="Pitambar Panda" img={pitambersir} position="Founder at Xefficient Pvt Ltd" linkedin="https://www.linkedin.com/in/pitambar-panda-a606941b2/" />
                                        <AlumniCard name="Awanish Pandey" position="Founder, PostingChalo & CargoSync Pvt Ltd" img={awanishpandey} linkedin="https://www.linkedin.com/in/awanish-pandey-pmp%C2%AE-968aaab7/" />

                                    </div>
                                    <div className='flex flex-col lg:ml-4 md:flex-row relative mx-auto  gap-20 md:gap-12'>
                                        <AlumniCard name="Piyush Sharma" img={piyushsharma} position="Chief Technology Officer at Electrun Motors" linkedin="https://www.linkedin.com/in/piyush-sharma-02121997/" />
                                        {/* <AlumniCard name="Sandeep Muley" img={sandeepm} position="Founder at Bharatrath" linkedin="https://www.linkedin.com/in/sandeepmuley/" /> */}
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