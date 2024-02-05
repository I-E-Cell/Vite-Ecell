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
import samiksir from '../assets/Team/samik.jpeg'
import ayushsir from '../assets/Team/ayushsir.png'
import sandeepsir from '../assets/Team/sandeepsir.jpeg'
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
import akhileshsir from "../assets/Team/akhilesh.jpg"
import rishi from '../assets/Team/rishi.png'
import gourav from '../assets/Team/gourav.jpg'
import NewCard from './NewCard';
import mixpanel from 'mixpanel-browser';
mixpanel.init('b2ff7ac9e3348a34108ce514efef85ce', {debug: true, track_pageview: true, persistence: 'localStorage'});

const TeamScrap = () => {
    mixpanel.track('TeamPage loaded');
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
                                <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20  md:gap-12'>
                                    <Card name="Samik Choudhury" branch="BE ENTC" img={samiksir}  insta={"https://www.instagram.com/sa.m.ik/"} fb={""} linkedin={"https://www.linkedin.com/in/samik15/"}/>
                                    <Card name="Ayush Singh" branch="BE ENTC" img={ayushsir} insta={"https://www.instagram.com/singhayushaats/"} fb={""} linkedin={"https://www.linkedin.com/in/ayush-singh-12549916a/"}/>

                                </div>
                                <div className='flex flex-col lg:ml-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>

                                    <Card name="Sandeep Mishra" branch="BE ENTC" img={sandeepsir} insta={"https://www.instagram.com/i_m_s_k_m/"} fb={""} linkedin={"https://www.linkedin.com/in/sandeep-kumar-mishra-68089b179/"}/>
                                    <Card name="Abhinaw Gupta" branch="BE ENTC" img={abhinawsir} insta={"https://www.instagram.com/wicked.boii.420/?hl=en"} fb={""} linkedin={"https://www.linkedin.com/in/abhinawgupta/"}/>
                                </div>
                            </div>
                            <div className='flex flex-col   relative mx-auto  md:flex-row justify-center gap-20 md:gap-12'>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                    <Card name="Tanu Sharma" branch="BE Mech" img={tanumam} insta={"https://www.instagram.com/_tanusharma2958/"} fb={""} linkedin={"https://www.linkedin.com/in/tanusharma29/"}/>
                                </div>
                            </div>
                        </div>
                        <div className='relative max-w-[98%] mx-auto'>
                            <div className='mb-10 mt-10'>
                                <h1 className='mx-auto text-[#0F1322] text-center text-3xl sm:text-4xl  textt py-4 font-semibold'>Secretary</h1>

                            </div>
                            <div className='flex flex-col   relative mx-auto  md:flex-row justify-center gap-20 md:gap-12'>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                    <Card name="Ayush Kumar" branch="TE ENTC" img={ayushkrsir} domain="Secretary" insta={"https://instagram.com/akayush_17_?igshid=NGExMmI2YTkyZg=="} fb={""} linkedin={"https://www.linkedin.com/in/ayush-kumar-2316841b2"}/>
                                    <Card name="Jyoti Yadav" branch="TE ENTC" img={jyotimam} domain="Secretary" insta={"https://instagram.com/jyotidky_?igshid=MmIzYWVlNDQ5Yg=="} fb={""} linkedin={"https://www.linkedin.com/in/jyoti-yadav-028270229"}/>
                                </div>



                            </div>
                        </div>
                        <div className='relative max-w-[98%] mx-auto  pb-6'>
                            <div className=' mt-10 mb-12'>
                                <h1 className='mx-auto text-[#0F1322] text-center text-3xl textt sm:text-4xl pt-9  py-4 font-semibold'>Domain Heads</h1>

                            </div>
                            <div className='flex flex-col gap-28 '>
                                <div className='flex flex-col lg:flex-row relative gap-20  nextline mx-auto  '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Shivank Singh" branch="TE IT" img={shivank} domain="Finance, Management" insta={"https://www.instagram.com/nasablackberry/"} fb={""} linkedin={"https://www.linkedin.com/in/nasablackberry/"}/>
                                        <Card name="Umang Singh" branch="TE ENTC" img={umangsir} domain='Sponsorship Head' insta={"https://www.instagram.com/phhheeeewwwwww/"} fb={""} linkedin={"https://www.linkedin.com/in/umang-singh-514a4a1ab/"}/>
                                    </div>
                                    <div className='flex flex-col lg:ml-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Nikita Kumari" branch="TE ENTC" img={nikitamam} domain='Design Head' insta={"https://www.instagram.com/sugarplum_1203/"} fb={""} linkedin={""}/>
                                        <Card name="Ankit Kr Ranjan" branch="TE ENTC" img={ankitsir} domain='Startup Coordinator' insta={"https://instagram.com/inevitable_ank?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"} fb={""} linkedin={"https://www.linkedin.com/in/ankit-kumar-ranjan-107244226"}/>
                                    </div>
                                    

                                </div>
                                <div className='flex flex-col lg:flex-row relative gap-20  nextline mx-auto  '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Likhit Reddy" branch="TE Mech" img={likhitsir} domain='Technical Head' insta={""} fb={""} linkedin={"https://www.linkedin.com/in/likhithreddy09"}/>
                                        <Card name="Aaryan Thakur" branch="TE Comp" img={aryansir} domain='Graphics Head' insta={"https://www.instagram.com/ryan_.o2/"} fb={""} linkedin={"https://www.linkedin.com/in/aaryan-thakur-75b619223"}/>
                                    </div>
                                    <div className='flex flex-col lg:ml-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Devesh Tiwari" branch="TE IT" img={deveshsir} domain='Media Head' insta={"https://www.instagram.com/believer._69/"} fb={""} linkedin={"https://www.linkedin.com/in/deveshtiwarii/"}/>
                                        <Card name="Vignesh Hari B" branch="TE Mech" img={vigneshsir} domain='Content Head' insta={"https://www.instagram.com/vigneshhari_02/"} fb={""} linkedin={"https://www.linkedin.com/in/vignesh2003/"}/>
                                    </div>
                                    

                                </div>
                                <div className='flex flex-col -top-8 md:top-0   relative mx-auto  md:flex-row justify-center gap-20 md:gap-12 '>
                                    <div className='flex flex-col relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Akhilesh Gupta" branch="TE ENTC" img={akhileshsir} domain='Operations Head' insta={"https://www.instagram.com/ak.mahajan_/"} fb={""} linkedin={"http://www.linkedin.com/in/akhilesh-gupta-ak"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative max-w-[98%] mx-auto  pb-6'>
                            <div className='mb-10 mt-10'>
                                <h1 className='mx-auto text-[#0F1322] text-center text-3xl textt sm:text-4xl pb-5   font-semibold'>Joint Secretaries</h1>

                            </div>
                            <div className='flex flex-col gap-28 '>
                                <div className='flex flex-col lg:flex-row relative gap-20  nextline mx-auto   '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Gulshan Singh" branch="SE COMP" img={gulshan} insta={"https://www.instagram.com/gulshansingh___/"} fb={""} linkedin={"https://www.linkedin.com/in/gulshansingh20/"} domain="Webdev, Graphics" />
                                        <Card name="Mitesh Maity" branch="SE ENTC" img={mitesh} domain="Webdev, Content" insta={"https://www.instagram.com/miteshmaity280603/"} fb={""} linkedin={"https://www.linkedin.com/in/mitesh-maity-3573201b7/"}/>
                                    </div>
                                    <div className='flex flex-col lg:ml-4 md:flex-row relative mx-auto  gap-20 md:gap-12'>
                                        <Card name="Gobardan Reddy" branch="SE ENTC" img={govardhan} domain="Webdev, Graphics" insta={"https://www.instagram.com/g_369o/"} fb={""} linkedin={"https://www.linkedin.com/in/kolli-gobardan-durga-reddy-51b21b254"}/>
                                        <Card name="Tanishk Soam" branch="SE COMP" img={tanishk} domain="Sponsorship, Graphics" insta={"https://instagram.com/tech_nishk?igshid=MzNlNGNkZWQ4Mg=="} fb={""} linkedin={"https://www.linkedin.com/in/tanishk-soam-85363b252"}/>
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row relative gap-20 nextline mx-auto   '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Navjot Singh" branch="SE COMP" img={navjot} domain="Video, Graphics" insta={"https://www.instagram.com/believixop/"} fb={""} linkedin={"https://www.linkedin.com/in/navjot-singh-a07714184/"}/>
                                        <Card name="Abninav Shinde" branch="SE COMP" img={abhinav} domain="Content, Graphics" insta={"https://www.instagram.com/_abhinavshinde_/"} fb={""} linkedin={"https://www.linkedin.com/in/abhinav-shinde-1369b1225"}/>
                                    </div>
                                    <div className='flex flex-col lg:ml-4 relative mx-auto md:flex-row gap-20 md:gap-12'>
                                        <Card name="Neha Sharma" branch="SE ENTC" img={neha} domain=" Graphics, PR" insta={"https://www.instagram.com/nehusharma145/"} fb={""} linkedin={"https://www.linkedin.com/in/neha-sharma-b64408255/"}/>
                                        <Card name="Ashi Singh" branch="SE ENTC" img={ashi} domain="Content, Social Media" insta={"https://www.instagram.com/_.aashe/"} fb={""} linkedin={"https://www.linkedin.com/in/ashi-singh-3a36a2257/"}/>
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row relative  gap-20 nextline mx-auto  '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Sumit Nath" branch="SE ENTC" img={sumit} domain="Sponsorship, Graphics" insta={"https://www.instagram.com/sumitkumarnath7/"} fb={""} linkedin={"https://www.linkedin.com/in/sumitnath-71329a209/"}/>
                                        <Card name="Taniya Singh" branch="SE Mech" img={taniya} domain="Content, PR" insta={"https://www.instagram.com/_taniya_singh_rajput_/"} fb={""} linkedin={"https://www.linkedin.com/in/taniya-thakur-3426b525a"}/>
                                    </div>
                                    <div className='flex flex-col lg:ml-4 relative mx-auto md:flex-row gap-20 md:gap-12'>
                                        <Card name="Arshia Garg" branch="SE ENTC" img={arshia} domain="Content, PR" insta={"https://www.instagram.com/arshiaa_garg/"} fb={""} linkedin={"https://www.linkedin.com/in/arshia-garg-557616257/"}/>
                                        <Card name="Prince" branch="SE ENTC" img={prince} domain="Video, Graphics" insta={"https://instagram.com/_weirdobornin_2003?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"} fb={""} linkedin={"https://www.linkedin.com/in/prince-709a62258"}/>
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row relative  gap-20 nextline mx-auto  '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Gourav" branch="SE Comp" img={gourav} domain="Content, PR" insta={"https://www.instagram.com/vashist1563/"} fb={""} linkedin={"https://www.linkedin.com/in/gourav-vashist-713366259/"}/>
                                        <Card name="Aniket Patil" branch="SE Mech" img={aniket} domain="Graphics, PR" insta={"https://www.instagram.com/aniketpatil.1118/"} fb={""} linkedin={"https://www.linkedin.com/in/aniket-patil-853617265"}/>
                                    </div>
                                    <div className='flex flex-col lg:ml-4 relative mx-auto md:flex-row gap-20 md:gap-12'>
                                        {/* <Card name="Rishi Singh" branch="SE IT" img={rishi} domain="WebDev, Content" insta={"https://www.instagram.com/infinite_rishi37/"} fb={""} linkedin={"https://www.linkedin.com/in/rishi-kumar-singh-761074215/"}/> */}

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
