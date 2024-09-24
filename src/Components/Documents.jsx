import React from 'react'
import Nav from './Nav'
import ait from "../assets/aitb.png"
import ecell_logo from "../assets/ecell.png";
import mouLemonIdeas from '../assets/docs/LemonIdeas.pdf'
import mouBhau from '../assets/docs/BhauInstitute.pdf'

import startupPolicy from '../assets/docs/AITStartupPolicy_2022.pdf'
import sop from '../assets/docs/SOP-InnovationSeedFund.pdf'



const Documents = () => {
    return (
        <>
            <div className='pb-[7em] ' >
                <Nav />
                <div className='relative w-[100%]   bg-[#0F1322]'>
                    <div className='relative mx-auto justify-center align-middle top-[95px]  pb-[7em] md:pb-1   w-[94%]  rounded-3xl bg-[#1C1F2B]'>
                        <div className=' relative w-[28%]  h-[9.5em] rounded-3xl left-[72%] -top-[75px]   bg-[#1C1F2B]'>
                            <h1 className='absolute  text-[#e6e6e6] z-10 font-semibold text-xl md:text-3xl lg:text-4xl hidden md:flex justify-center text-center md:left-[20%] lg:left-[26%] top-3'>Documents</h1>
                            <div className='s_box rounded-sm w-[68%] lg:-left-[26.5px] -left-[28px] top-[6px]  h-[60%] bg-[#1C1F2B]'>

                            </div>
                        </div>
                        <div className='flex flex-col relative -top-11 lg:top-5 lg:flex-row justify-center items-center lg:justify-around gap-28 lg:gap-10'>


                            <div className='w-[18.5em]  sm:w-[21em] relative top-12 mx-auto md:mx-0 md:w-[28em] lg:w-[32em] h-[12em] rounded-2xl bg-[#A1A6DC]'>
                                <div className='w-[76%] relative left-[24%] -top-12 h-[10em] rounded-2xl bg-[#A1A6DC]'>
                                    <div className='absolute flex flex-row gap-2 left-[63%]  md:left-[70%] top-2 justify-end'>
                                        <img className='w-9 h-6' src={ait} alt="" />

                                        <img className='w-10 h-6' src={ecell_logo} alt="" />

                                    </div>
                                    <div className='absolute top-9 left-[36%] translate-x-[-50%]  font-bold z-10 text-lg md:text-2xl'>
                                        <div
                                            // initial={{ opacity: 0, x: 60 }}
                                            // whileInView={{ opacity: 1, x: 0 }}
                                            // transition={{ duration: 0.6 }}
                                            className=' '
                                        >
                                            <h1>MOUs</h1>
                                        </div>

                                        <div className='w-[95%] h-[1.4px] rounded-full relative mx-auto bg-[#0F1322]'>

                                        </div>
                                    </div>
                                    <div className='w-[32%] h-[40%] bg-[#A1A6DC] relative top-[15px]   -skew-x-12 -left-[36px]'>

                                    </div>
                                    <div className='relative mt-2 min-w-[115%] text-sm md:text-[15px] lg:text-[17px] -left-[22%] z-10 top-7  text-center'>
                                        <div className='flex flex-col gap-4'>
                                            <a target='_blank' className='w-[90%] text-center font-semibold mx-auto bg-[#dde0ff] p-2 rounded-lg' href={mouLemonIdeas}>MOU - LemonIdeas</a>
                                            <a target='_blank' className='w-[90%] text-center font-semibold mx-auto bg-[#dde0ff] p-2 rounded-lg' href={mouBhau}>MOU - BhauInstitute</a>

                                        </div>

                                    </div>
                                </div>

                                <div className='w-[28%] -top-[120.9%] -left-[4%] md:-left-[3.85%] lg:-left-[4%] relative  z-10  h-[4.5em] border-[13px] border-[#1C1F2B] rounded-full bg-[#A1A6DC]'>

                                </div>
                            </div>





                            <div className='w-[18.5em] sm:w-[21em] relative top-12 mx-auto md:mx-0 md:w-[28em] lg:w-[32em] h-[12em] rounded-2xl bg-[#A1A6DC]'>
                                <div className='w-[76%] relative left-[24%] -top-12 h-[10em] rounded-2xl bg-[#A1A6DC]'>
                                    <div className='absolute flex flex-row gap-2 left-[63%]  md:left-[70%] top-2 justify-end'>
                                        <img className='w-9 h-6' src={ait} alt="" />
                                        <img className='w-10 h-6' src={ecell_logo} alt="" />
                                    </div>
                                    <div className='absolute top-9 left-[36%] translate-x-[-50%]  font-bold z-10 text-lg md:text-2xl'>
                                        <div
                                        // initial={{ opacity: 0, x: 60 }}
                                        // whileInView={{ opacity: 1, x: 0 }}
                                        // transition={{ duration: 0.6 }}

                                        >
                                            <h1>StartUp Policy</h1>
                                        </div>

                                        <div className='w-[95%] h-[1.4px] rounded-full relative mx-auto bg-[#0F1322]'>

                                        </div>
                                    </div>
                                    <div className='w-[32%] h-[40%] bg-[#A1A6DC] relative top-[15px]   -skew-x-12 -left-[36px]'>

                                    </div>

                                    <div className='relative min-w-[115%] text-sm md:text-[15px] lg:text-[17px] -left-[22%] z-10 top-7  text-center'>
                                        <div className='flex flex-col gap-4'>
                                            <a target='_blank' className='w-[90%] text-center font-semibold mx-auto bg-[#dde0ff] p-2 rounded-lg' href={startupPolicy}>AIT StartupPolicy</a>
                                            <a target='_blank' className='w-[90%] text-center font-semibold mx-auto bg-[#dde0ff] p-2 rounded-lg' href={sop}>SOP-InnovationSeedFund</a>

                                        </div>

                                    </div>
                                </div>

                                <div className='w-[28%] -top-[120.9%] -left-[4%] md:-left-[3.85%] lg:-left-[4%] relative  z-10  h-[4.5em] border-[13px] border-[#1C1F2B] rounded-full bg-[#A1A6DC]'>

                                </div>
                            </div>


                        </div>



                        <div className='flex flex-col relative top-14 lg:top-8 lg:flex-row justify-center items-center lg:justify-around md:my-20  '>
                            <div className=" mx-auto">

                            <div className='w-[18.5em]  sm:w-[21em] relative top-12  md:mx-0 md:w-[28em] lg:w-[32em] h-[18em] rounded-2xl bg-[#A1A6DC] mb-5 md:mb-10 '>
                                <div className='w-[76%] relative left-[24%] -top-12 h-[10em] rounded-2xl bg-[#A1A6DC]'>
                                    <div className='absolute flex flex-row gap-2 left-[63%]  md:left-[70%] top-2 justify-end'>
                                        <img className='w-9 h-6' src={ait} alt="" />

                                        <img className='w-10 h-6' src={ecell_logo} alt="" />

                                    </div>
                                    <div className='absolute top-9 left-[36%] translate-x-[-50%]  font-bold z-10 text-lg md:text-2xl'>
                                        <div
                                            // initial={{ opacity: 0, x: 60 }}
                                            // whileInView={{ opacity: 1, x: 0 }}
                                            // transition={{ duration: 0.6 }}
                                            className=' '
                                        >
                                            <h1>Activity Reports</h1>
                                        </div>

                                        <div className='w-[95%] h-[1.4px] rounded-full relative mx-auto bg-[#0F1322]'>

                                        </div>
                                    </div>
                                    <div className='w-[32%] h-[40%] bg-[#A1A6DC] relative top-[15px]   -skew-x-12 -left-[36px]'>

                                    </div>
                                    <div className='relative mt-2 min-w-[115%] text-sm md:text-[15px] lg:text-[17px] -left-[22%] z-10 top-7  text-center'>
                                        <div className='flex flex-col gap-4'>
                                            <a target='_blank' className='w-[90%] text-center font-semibold mx-auto bg-[#dde0ff] p-2 rounded-lg' href='https://aitpuneedu-my.sharepoint.com/:b:/g/personal/sdoza_aitpune_edu_in/EWi4O0qU-MpPm41EqWrEY00BynvVvVSdh_Zz-gOouXJlAw'>Academic Year 2020-2021</a>
                                            <a target='_blank' className='w-[90%] text-center font-semibold mx-auto bg-[#dde0ff] p-2 rounded-lg' href='https://aitpuneedu-my.sharepoint.com/:b:/g/personal/sdoza_aitpune_edu_in/EXEJ-K6alzFLq6gQdHHD8EkBwdFqzqdCpxub3ppyg32oMw'>Academic Year 2021-2022</a>
                                            <a target='_blank' className='w-[90%] text-center font-semibold mx-auto bg-[#dde0ff] p-2 rounded-lg' href='https://aitpuneedu-my.sharepoint.com/:b:/g/personal/sdoza_aitpune_edu_in/ESMRny2XrkdGimnXTQX1TFsBJz8DTPrh-p7QYnmLidiuOQ'>Academic Year 2022-2023</a>
                                            <a target='_blank' className='w-[90%] text-center font-semibold mx-auto bg-[#dde0ff] p-2 rounded-lg' href='https://drive.google.com/file/d/13Wmcu_C_4qXzrSpYL_AQdzuP8evDFiD7/view?usp=drive_link'>Academic Year 2023-2024</a>
                                        </div>

                                    </div>
                                </div>

                                <div className='w-[28%] -top-[80.7%] -left-[4%] md:-left-[3.85%] lg:-left-[4%] relative  z-10  h-[4.5em] border-[13px] border-[#1C1F2B] rounded-full bg-[#A1A6DC]'>

                                </div>
                            </div>

                            </div>


                    <div></div>



                        </div>




                    </div>

                </div>


            </div>
        </>
    )
}

export default Documents
