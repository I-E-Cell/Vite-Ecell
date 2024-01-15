import React, { useState } from 'react'
import Nav from './Nav'
import cv from '../assets/CV.png'
import StuIntern from './StuIntern'
import ComIntern from './ComIntern'
import { motion } from 'framer-motion'
import Popup from './Popup'
import { BsArrowUpRight } from "react-icons/bs";
import mixpanel from 'mixpanel-browser';
mixpanel.init('b2ff7ac9e3348a34108ce514efef85ce', { debug: true, track_pageview: true, persistence: 'localStorage' });

const Internship = () => {

    const [forstudents, setForstudents] = useState(false)
    const [forcompany, setForcomapny] = useState(true)

    const students = () => {
        setForstudents(true)
        setForcomapny(false)
    }
    const company = () => {
        setForstudents(false)
        setForcomapny(true)
    }



    mixpanel.track('Internship Page loaded');
    return (
        <div >
            <Nav />
            <div className='relative w-[100%] pb-[8em]  bg-[#0F1322]'>
                <div className='relative mx-auto justify-center align-middle top-[95px] h-[85em]   md:h-[75em]   w-[94%]  rounded-3xl bg-[#86C8D3]'>
                    <div className=' relative w-[28%]  h-[7.5em] rounded-3xl left-[72%] -top-[75px]  bg-[#86C8D3]'>
                        <h1 className='absolute  ] z-10 text-3xl md:text-4xl hidden md:flex justify-center text-center md:left-[16%] lg:left-[28%] font-bold top-3'>Internship</h1>

                        <div className='s_box rounded-sm w-[68%]  -left-[19px] top-[6px]  h-[60%] bg-[#86C8D3]'>

                        </div>



                    </div>

                    {/* <h1 className='absolute  text-[#0F1322] z-10 font-bold text-3xl md:text-4xl flex justify-center text-center w-[100%] top-9'>Internship</h1> */}
                    <div className='absolute w-[100%] flex flex-row gap-5  md:gap-16 top-10 justify-center '>

                        <button onClick={company} id='kuchbhe' className='explore btn  items-center bg-[#0F1322] flex rounded-3xl  relative   w-[160px]  h-10'>
                            <div className='haikuch absolute w-[2em] h-[2em] bg-[#86C8D3] left-1 rounded-full'>
                                <BsArrowUpRight size={22} className=' relative left-1 top-1' />
                            </div>
                            <h1 className='yebhe text-white  text-center relative justify-center left-2 text-md mx-auto '>For Startups</h1>
                        </button>
                        <button onClick={students} id='kuchbhe' className='explore btn  items-center bg-[#0F1322] flex rounded-3xl  relative   w-[160px]  h-10'>
                            <div className='haikuch absolute w-[2em] h-[2em] bg-[#86C8D3] left-1 rounded-full'>
                                <BsArrowUpRight size={22} className=' relative left-1 top-1' />
                            </div>
                            <h1 className='yebhe text-white  text-center relative justify-center left-2  mx-auto '>For Students</h1>
                        </button>



                    </div>
                    <div className='absolute top-[90px]   w-[100%]'>
                        <hr className='relative w-[93%] h-[1.5px] bg-[#0F1322] border-none  mx-auto' />
                    </div>
                    {/* //-------- */}
                    {forcompany ? <ComIntern /> : null}


                    {/* //-------- */}
                    {/* //-------- */}

                    {forstudents ? <StuIntern /> : null}


                    {/* //-------- */}


                    <div className=' flex flex-col mx-auto '>
                        <div className='h-[3.5em] md:h-[5em] mx-auto flex justify-between items-center mt-14 bg-gray-800 w-[78%] md:w-[73%] lg:w-[63%]'>
                            <div className='flex -left-5 md:-left-7  relative bg-gray-800 h-[2.5em] w-[2.5em] md:h-[3.5em] md:w-[3.5em] rotate-45'></div>
                            <h1 className='font-bold max-w-[60%] md:max-w-[90%] text-lg md:text-3xl lg:text-4xl text-[#86C8D3]'>Internships Offered By I&E Cell</h1>
                            <div className='flex left-5 md:left-7 relative bg-gray-800  h-[2.5em] w-[2.5em] md:h-[3.5em] md:w-[3.5em] rotate-45'></div>
                        </div>
                        <div className='h-[0.2em] flex justify-end items-center mt-1 bg-gray-800 mx-auto w-[62.5%]'> </div>
                        {/* <div className='h-[5em] flex  items-center relative left-[40%] mt-4 bg-[#0F1322] w-[60%]'>

                            <div className='flex -left-7  relative bg-[#0F1322] h-[3.5em] w-[3.5em] rotate-45'></div>
                            <h1 className='font-bold text-4xl text-[#86C8D3]'>Entrepreneurship Cell</h1>
                        </div> */}



                        <div class="relative w-[90%] mx-auto mt-8 overflow-x-auto shadow-md border-[1px] border-gray-700 rounded-lg">
                            <table class="w-full text-sm text-left   rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                            Student's name
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-gray-700">
                                            Branch
                                        </th>
                                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                            Year
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-gray-700">
                                            Company
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-gray-200 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            Gulshan Singh
                                        </th>
                                        <td class="px-6 py-4 text-gray-700">
                                            Computer
                                        </td>
                                        <td class="px-6 py-4 text-gray-300 bg-gray-800">
                                            Second
                                        </td>
                                        <td class="px-6 py-4 text-gray-700">
                                            XYX
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-200 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            Gulshan Singh
                                        </th>
                                        <td class="px-6 py-4 text-gray-700">
                                            Computer
                                        </td>
                                        <td class="px-6 py-4 text-gray-300 bg-gray-800">
                                            Second
                                        </td>
                                        <td class="px-6 py-4 text-gray-700">
                                            XYX
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-200 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            Gulshan Singh
                                        </th>
                                        <td class="px-6 py-4 text-gray-700">
                                            Computer
                                        </td>
                                        <td class="px-6 py-4 text-gray-300 bg-gray-800">
                                            Second
                                        </td>
                                        <td class="px-6 py-4 text-gray-700">
                                            XYX
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-200 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            Gulshan Singh
                                        </th>
                                        <td class="px-6 py-4 text-gray-700">
                                            Computer
                                        </td>
                                        <td class="px-6 py-4 text-gray-300 bg-gray-800">
                                            Second
                                        </td>
                                        <td class="px-6 py-4 text-gray-700">
                                            XYX
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-200 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            Gulshan Singh
                                        </th>
                                        <td class="px-6 py-4 text-gray-700">
                                            Computer
                                        </td>
                                        <td class="px-6 py-4 text-gray-300 bg-gray-800">
                                            Second
                                        </td>
                                        <td class="px-6 py-4 text-gray-700">
                                            XYX
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>



                    </div>
                </div>

            </div>
            {/* {(popup2 && input.value!='') ? <Popup /> : null} */}

        </div>
    )
}

export default Internship