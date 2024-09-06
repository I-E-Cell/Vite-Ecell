import React from 'react'
import Card from './CardEcell';
import Nav from "./Nav";
//TEs
import gulshansir from '../assets/Team/gulshansir.png';
import nehamaam from '../assets/Team/nehamaam.png';
import miteshsir from '../assets/Team/miteshsir.png';
import princesir from '../assets/Team/princesir.png';
import arshiamaam from '../assets/Team/arshiamaam.jpg';
import gouravsir from '../assets/Team/gouravsir.png';
import abhinavsir from '../assets/Team/abhinavsir.png';
import tanishksir from '../assets/Team/tanishksir.png';
import gobardhansir from '../assets/Team/gobardhansir.png';
import sumitsir from '../assets/Team/sumitsir.png';
import navjotsir from '../assets/Team/navjotsir.png';
//SEs
import arun from '../assets/Team/arun.jpg';
import sunandha from '../assets/Team/sunandha.jpg';
import shivani from '../assets/Team/shivani.jpg';
import swarup from '../assets/Team/swarup.jpg';
import goldi from '../assets/Team/goldi.jpg';
import omesh from '../assets/Team/omesh.jpg';
import sahil from '../assets/Team/sahil.jpg';
import jyoti from '../assets/Team/jyoti.jpg';
import aditya from '../assets/Team/aditya.jpg';
import sanshey from '../assets/Team/sanshey.jpg';
import sunny from '../assets/Team/sunny.jpg';
import anubhav from '../assets/Team/anubhav.jpg';
import yuvraj from '../assets/Team/yuvraj.jpg';
import sumit from '../assets/Team/sumit.jpg';

// import tanumam from '../assets/Team/tanumam.jpg';
// import gulshan from '../assets/Team/gulshan.jpeg'
// import mitesh from '../assets/Team/mitesh.jpeg'
// import govardhan from '../assets/Team/gobardan.jpg'
// import tanishk from '../assets/Team/tanishk.jpg'
// import navjot from '../assets/Team/navjot.jpg'
// import abhinav from '../assets/Team/abhinav.jpg'
// import neha from '../assets/Team/neha.jpeg'
// // import ashi from '../assets/Team/ashi.png'
// import sumit from '../assets/Team/sumit.jpg'
// import taniya from '../assets/Team/taniya.jpg'
// import arshia from '../assets/Team/arshia.jpg'
// import prince from '../assets/Team/prince.jpg'
// import samiksir from '../assets/Team/samik.jpeg'
// import ayushsir from '../assets/Team/ayushsir.png'
// import sandeepsir from '../assets/Team/sandeepsir.jpeg'
// import abhinawsir from '../assets/Team/Abhinaw.png'
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
// import aniket from '../assets/Team/aniket.png'
// import akhileshsir from "../assets/Team/akhilesh.jpg"
// import rishi from '../assets/Team/rishi.png'
// import gourav from '../assets/Team/gourav.jpg'
// import NewCard from './NewCard';
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
                                    <Card name="Ayush Kumar" branch="BE ENTC" img={ayushkrsir}  insta={"https://www.instagram.com/sa.m.ik/"} fb={""} linkedin={"https://www.linkedin.com/in/samik15/"}/>
                                    <Card name="Jyoti Yadav" branch="BE ENTC" img={jyotimam} insta={"https://www.instagram.com/singhayushaats/"} fb={""} linkedin={"https://www.linkedin.com/in/ayush-singh-12549916a/"}/>

                                </div>
                                <div className='flex flex-col lg:ml-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>

                                    <Card name="Shivank Singh" branch="BE ENTC" img={shivank} insta={"https://www.instagram.com/i_m_s_k_m/"} fb={""} linkedin={"https://www.linkedin.com/in/sandeep-kumar-mishra-68089b179/"}/>
                                    <Card name="Nikita Kumari" branch="BE ENTC" img={nikitamam} insta={"https://www.instagram.com/wicked.boii.420/?hl=en"} fb={""} linkedin={"https://www.linkedin.com/in/abhinawgupta/"}/>
                                </div>
                            </div>
                            <div className='flex flex-col   relative mx-auto  md:flex-row justify-center gap-20 md:gap-12'>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                    <Card name="Umang Singh" branch="BE ENTC" img={umangsir} insta={"https://www.instagram.com/_tanusharma2958/"} fb={""} linkedin={"https://www.linkedin.com/in/tanusharma29/"}/>
                                    <Card name="Ankit Kumar" branch="BE ENTC" img={ankitsir} insta={"https://www.instagram.com/_tanusharma2958/"} fb={""} linkedin={"https://www.linkedin.com/in/tanusharma29/"}/>
                                </div>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                    <Card name="Vignesh Hari" branch="BE ENTC" img={vigneshsir} insta={"https://www.instagram.com/_tanusharma2958/"} fb={""} linkedin={"https://www.linkedin.com/in/tanusharma29/"}/>
                                    <Card name="Aaryan Thakur" branch="BE COMP" img={aryansir} insta={"https://www.instagram.com/_tanusharma2958/"} fb={""} linkedin={"https://www.linkedin.com/in/tanusharma29/"}/>
                                </div>
                            </div>
                            <div className='flex flex-col   relative mx-auto  md:flex-row justify-center gap-20 md:gap-12'>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                    <Card name="Devesh Tiwari" branch="BE IT" img={deveshsir} insta={"https://www.instagram.com/_tanusharma2958/"} fb={""} linkedin={"https://www.linkedin.com/in/tanusharma29/"}/>
                                    <Card name="Likith Reddy" branch="BE MECH" img={likhitsir} insta={"https://www.instagram.com/_tanusharma2958/"} fb={""} linkedin={"https://www.linkedin.com/in/tanusharma29/"}/>
                                </div>
                            </div>
                        </div>
                        <div className='relative max-w-[98%] mx-auto'>
                            <div className='mb-10 mt-10'>
                                <h1 className='mx-auto text-[#0F1322] text-center text-3xl sm:text-4xl  textt py-4 font-semibold'>Secretary</h1>

                            </div>
                            <div className='flex flex-col   relative mx-auto  md:flex-row justify-center gap-20 md:gap-12'>
                                <div className='flex flex-col relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                    <Card name="Gulshan Singh" branch="TE COMP" img={gulshansir} domain="Secretary" insta={"https://instagram.com/akayush_17_?igshid=NGExMmI2YTkyZg=="} fb={""} linkedin={"https://www.linkedin.com/in/ayush-kumar-2316841b2"}/>
                                    <Card name="Neha Sharma" branch="TE ENTC" img={nehamaam} domain="Secretary" insta={"https://instagram.com/jyotidky_?igshid=MmIzYWVlNDQ5Yg=="} fb={""} linkedin={"https://www.linkedin.com/in/jyoti-yadav-028270229"}/>
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
                                        <Card name="Mitesh Maity" branch="TE ENTC" img={miteshsir} domain='Technical Head' insta={"https://www.instagram.com/believer._69/"} fb={""} linkedin={"https://www.linkedin.com/in/deveshtiwarii/"}/>
                                        <Card name="Prince" branch="TE ENTC" img={princesir} domain="Design Head" insta={"https://www.instagram.com/nasablackberry/"} fb={""} linkedin={"https://www.linkedin.com/in/nasablackberry/"}/>
                                    </div>
                                    <div className='flex flex-col lg:ml-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Arshia Garg" branch="TE ENTC" img={arshiamaam} domain='Content Head' insta={"https://www.instagram.com/sugarplum_1203/"} fb={""} linkedin={""}/>
                                        <Card name="Tanishk Soam" branch="TE COMP" img={tanishksir} domain='Finance Head' insta={"https://instagram.com/inevitable_ank?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"} fb={""} linkedin={"https://www.linkedin.com/in/ankit-kumar-ranjan-107244226"}/>
                                    </div>
                                    

                                </div>
                                <div className='flex flex-col lg:flex-row relative gap-20  nextline mx-auto  '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Gobardhan" branch="TE ENTC" img={gobardhansir} domain='Operations Head' insta={""} fb={""} linkedin={"https://www.linkedin.com/in/likhithreddy09"}/>
                                        <Card name="Sumit Nath" branch="TE ENTC" img={sumitsir} domain='Outreach Head' insta={"https://www.instagram.com/ryan_.o2/"} fb={""} linkedin={"https://www.linkedin.com/in/aaryan-thakur-75b619223"}/>
                                    </div>
                                    <div className='flex flex-col lg:ml-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Navjot Singh" branch="TE COMP" img={navjotsir} domain='Graphics Head' insta={"https://www.instagram.com/phhheeeewwwwww/"} fb={""} linkedin={"https://www.linkedin.com/in/umang-singh-514a4a1ab/"}/>
                                        <Card name="Gourav Vashisht" branch="TE COMP" img={gouravsir} domain='Startup Coordinator' insta={"https://www.instagram.com/vigneshhari_02/"} fb={""} linkedin={"https://www.linkedin.com/in/vignesh2003/"}/>
                                    </div>
                                    

                                </div>
                                <div className='flex flex-col -top-8 md:top-0   relative mx-auto  md:flex-row justify-center gap-20 md:gap-12 '>
                                    <div className='flex flex-col relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Abhinav Shinde" branch="TE COMP" img={abhinavsir} domain='Graphics Head' insta={"https://www.instagram.com/ak.mahajan_/"} fb={""} linkedin={"http://www.linkedin.com/in/akhilesh-gupta-ak"} />
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
                                        <Card name="Arun Kushwaha" branch="SE ENTC" img={arun} insta={"https://www.instagram.com/gulshansingh___/"} fb={""} linkedin={"https://www.linkedin.com/in/gulshansingh20/"} domain="Webdev, Graphics" />
                                        <Card name="Sunandha" branch="SE IT" img={sunandha} domain="Webdev, Content" insta={"https://www.instagram.com/miteshmaity280603/"} fb={""} linkedin={"https://www.linkedin.com/in/mitesh-maity-3573201b7/"}/>
                                    </div>
                                    <div className='flex flex-col lg:ml-4 md:flex-row relative mx-auto  gap-20 md:gap-12'>
                                        <Card name="Swarup Baidya" branch="SE COMP" img={swarup} domain="Webdev, Graphics" insta={"https://www.instagram.com/g_369o/"} fb={""} linkedin={"https://www.linkedin.com/in/kolli-gobardan-durga-reddy-51b21b254"}/>
                                        <Card name="Shivani Rawat" branch="SE COMP" img={shivani} domain="Sponsorship, Graphics" insta={"https://instagram.com/tech_nishk?igshid=MzNlNGNkZWQ4Mg=="} fb={""} linkedin={"https://www.linkedin.com/in/tanishk-soam-85363b252"}/>
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row relative gap-20 nextline mx-auto   '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Goldi" branch="SE COMP" img={goldi} domain="Video, Graphics" insta={"https://www.instagram.com/believixop/"} fb={""} linkedin={"https://www.linkedin.com/in/navjot-singh-a07714184/"}/>
                                        <Card name="Omesh Kumar" branch="SE ENTC" img={omesh} domain="Content, Graphics" insta={"https://www.instagram.com/_abhinavshinde_/"} fb={""} linkedin={"https://www.linkedin.com/in/abhinav-shinde-1369b1225"}/>
                                    </div>
                                    <div className='flex flex-col lg:ml-4 relative mx-auto md:flex-row gap-20 md:gap-12'>
                                        <Card name="Sahil Thakur" branch="SE ENTC" img={sahil} domain=" Graphics, PR" insta={"https://www.instagram.com/nehusharma145/"} fb={""} linkedin={"https://www.linkedin.com/in/neha-sharma-b64408255/"}/>
{/*                                         <Card name="Ashi Singh" branch="SE ENTC" img={ashi} domain="Content, Social Media" insta={"https://www.instagram.com/_.aashe/"} fb={""} linkedin={"https://www.linkedin.com/in/ashi-singh-3a36a2257/"}/> */}
                                        <Card name="Jyoti Mishra" branch="SE ENTC" img={jyoti} domain="Content, PR" insta={"https://www.instagram.com/vashist1563/"} fb={""} linkedin={"https://www.linkedin.com/in/gourav-vashist-713366259/"}/>
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row relative  gap-20 nextline mx-auto  '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Aditya Mishra" branch="SE ENTC" img={aditya} domain="Sponsorship, Graphics" insta={"https://www.instagram.com/sumitkumarnath7/"} fb={""} linkedin={"https://www.linkedin.com/in/sumitnath-71329a209/"}/>
                                        <Card name="Sanshey" branch="SE ENTC" img={sanshey} domain="Content, PR" insta={"https://www.instagram.com/_taniya_singh_rajput_/"} fb={""} linkedin={"https://www.linkedin.com/in/taniya-thakur-3426b525a"}/>
                                    </div>
                                    <div className='flex flex-col lg:ml-4 relative mx-auto md:flex-row gap-20 md:gap-12'>
                                        <Card name="Kumar Sunny" branch="SE IT" img={sunny} domain="Content, PR" insta={"https://www.instagram.com/arshiaa_garg/"} fb={""} linkedin={"https://www.linkedin.com/in/arshia-garg-557616257/"}/>
                                        <Card name="Anubhav" branch="SE ENTC" img={anubhav} domain="Video, Graphics" insta={"https://instagram.com/_weirdobornin_2003?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"} fb={""} linkedin={"https://www.linkedin.com/in/prince-709a62258"}/>
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row relative  gap-20 nextline mx-auto  '>
                                    <div className='flex flex-col lg:mr-4 relative mx-auto  md:flex-row gap-20 md:gap-12'>
                                        <Card name="Yuvraj Vibhute" branch="SE Mech" img={yuvraj} domain="Graphics, PR" insta={"https://www.instagram.com/aniketpatil.1118/"} fb={""} linkedin={"https://www.linkedin.com/in/aniket-patil-853617265"}/>
                                    </div>
                                    <div className='flex flex-col lg:ml-4 relative mx-auto md:flex-row gap-20 md:gap-12'>
                                        <Card name="Sumit Nagila" branch="SE COMP" img={sumit} domain="WebDev, Content" insta={"https://www.instagram.com/infinite_rishi37/"} fb={""} linkedin={"https://www.linkedin.com/in/rishi-kumar-singh-761074215/"}/>

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
