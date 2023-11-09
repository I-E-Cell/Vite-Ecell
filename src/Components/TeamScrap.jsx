import React from 'react'
import Card from './CardEcell';
import Nav from "./Nav";
import tanumam from '../assets/Team/tanumam.jpg';
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
import prince from '../assets/Team/prince.jpg'
import samiksir from '../assets/Team/Samik.jpeg'
import ayushsir from '../assets/Team/ayushsir.png'
import sandeepsir from '../assets/Team/sandeep.jpg'
import abhinawsir from '../assets/Team/Abhinaw.png'
import ayushkrsir from '../assets/Team/ayushkrsir.jpg'
import jyotimam from '../assets/Team/jyotimaam.jpeg'
import shivank from '../assets/Team/shivanksir.jpg'
import umangsir from '../assets/Team/umangsir.jpg'
import nikitamam from '../assets/Team/nikitamam.jpg'
import vigneshsir from '../assets/Team/vigneshsir.jpg'
import likhitsir from '../assets/Team/likhithsir.jpg'
import aryansir from '../assets/Team/aaryan.png'
import deveshsir from '../assets/Team/deveshsir.jpg'
import ankitsir from '../assets/Team/ankitsir.jpg'
import aniket from '../assets/Team/aniket.png'




import NewCard from './NewCard';


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
                                    <Card name="Samik Choudhury" branch="BE ENTC" img={samiksir} />
                                    <Card name="Ayush Singh" branch="BE ENTC" img={ayushsir} />

                                </div>
                                <div className='flex flex-col ml-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>

                                    <Card name="Sandeep Mishra" branch="BE ENTC" img={sandeepsir} />
                                    <Card name="Abhinaw Gupta" branch="BE ENTC" img={abhinawsir} />
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
                                    <Card name="Ayush Kumar" branch="TE ENTC" img={ayushkrsir} domain="Secretary" />
                                    <Card name="Jyoti Yadav" branch="TE ENTC" img={jyotimam} domain="Secretary" />
                                </div>



                            </div>
                        </div>
                        <div className='relative flex flex-col max-w-[98%] gap-28 mx-auto'>
                            <div className=' mt-10'>
                                <h1 className='mx-auto text-[#0F1322] text-center text-3xl textt sm:text-4xl pt-9  py-4 font-semibold'>Domain Heads</h1>

                            </div>
                            <div className='flex flex-col lg:flex-row relative gap-20 nextline mx-auto  justify-center'>
                                <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                    <Card name="Shivank Singh" branch="TE IT" img={shivank} domain="Finance, Management" />
                                    <Card name="Umang Singh" branch="TE ENTC" img={umangsir} domain='Sponsorship Head' />
                                </div>
                                <div className='flex flex-col lg:ml-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                    <Card name="Nikita Kumari" branch="TE ENTC" img={nikitamam} domain='Design Head' />
                                    <Card name="Ankit Kr Ranjan" branch="TE ENTC" img={ankitsir} domain='Startup Coordinator' />
                                </div>
                                <div className='flex flex-col   relative mx-auto  md:flex-row justify-center gap-20 md:gap-12'>

                                </div>

                            </div>
                            <div className='flex flex-col lg:flex-row relative gap-20 nextline mx-auto  justify-center'>
                                <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                    <Card name="Likhit Reddy" branch="TE Mech" img={likhitsir} domain='Technical Head' />
                                    <Card name="Aaryan Thakur" branch="TE ENTC" img={aryansir} domain='Graphics Head' />
                                </div>
                                <div className='flex flex-col lg:ml-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                    <Card name="Devesh Tiwari" branch="TE IT" img={deveshsir} domain='Media Head' />
                                    <Card name="Vignesh Hari B" branch="TE Mech" img={vigneshsir} domain='Content Head' />
                                </div>
                                <div className='flex flex-col   relative mx-auto  md:flex-row justify-center gap-20 md:gap-12'>

                                </div>

                            </div>
                            <div className='flex flex-col   relative mx-auto  md:flex-row justify-center gap-20 md:gap-12'>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                    <Card name="Akhilesh Gupta" branch="TE ENTC" img={tanumam} domain='Operations Head' />
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
                                        <Card name="Tanishk Soam" branch="SE COMP" img={tanishk} domain="Sponsorship, Graphics" />
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row relative gap-20 nextline mx-auto   '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Navjot Singh" branch="SE COMP" img={navjot} domain="Video, Graphics" />
                                        <Card name="Abninav Shinde" branch="SE COMP" img={abhinav} domain="Content, Graphics" />
                                    </div>
                                    <div className='flex flex-col lg:ml-4 relative mx-auto md:flex-row gap-20 md:gap-12'>
                                        <Card name="Neha Sharma" branch="SE ENTC" img={neha} domain=" Graphics, PR" />
                                        <Card name="Ashi Singh" branch="SE ENTC" img={ashi} domain="Content, Social Media" />
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row relative  gap-20 nextline mx-auto  '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Sumit Nath" branch="SE ENTC" img={sumit} domain="Sponsorship, Graphics" />
                                        <Card name="Taniya Singh" branch="SE Mech" img={taniya} domain="Content, PR" />
                                    </div>
                                    <div className='flex flex-col lg:ml-4 relative mx-auto md:flex-row gap-20 md:gap-12'>
                                        <Card name="Arshia Garg" branch="SE ENTC" img={arshia} domain="Content, PR" />
                                        <Card name="Prince" branch="SE ENTC" img={prince} domain="Video, Graphics" />
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row relative  gap-20 nextline mx-auto  '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Rishi Singh" branch="SE IT" img={sumit} domain="WebDev, Content" />
                                        <Card name="Aniket Patil" branch="SE Mech" img={aniket} domain="Graphics, PR" />
                                    </div>
                                    <div className='flex flex-col lg:ml-4 relative mx-auto md:flex-row gap-20 md:gap-12'>
                                        <Card name="Gourav" branch="SE Comp" img={arshia} domain="Content, PR" />
                                        
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>



                </div>
            </div>
            {/* <NewCard /> */}


        </div>
    )
}

export default TeamScrap