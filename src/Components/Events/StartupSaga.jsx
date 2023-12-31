import React from 'react'
import sslogo from "../../assets/sslogo.png"
import mixpanel from 'mixpanel-browser';
mixpanel.init('b2ff7ac9e3348a34108ce514efef85ce', {debug: true, track_pageview: true, persistence: 'localStorage'});


const StartupSaga = () => {
    return (


        <div className='absolute flex flex-col  gap-5  w-[80%] top-[45px] md:top-[60px] mx-auto'>
            <div className='relative left-[5%] lg:left-[13%] flex gap-4 md:gap-10 lg:gap-16'>
                <img className='relative logo_inni w-[9em] lg:w-[11em]' src={sslogo} alt="" />
                <div className='flex flex-col gap-5'>


                    <h1 className='text_inni text-3xl lg:text-4xl my-auto font-bold'>StartUP Saga</h1>
                    <a href="https://www.startupsaga.in/" target='_blank'>
                        <button onClick={mixpanel.track('StartUP saga site Visited')} className=' btn_inni bg-[#27096D] rounded-lg flex justify-center items-center font-semibold relative  text-white  w-24 border-white border-1 h-9'>
                            Explore
                        </button>
                    </a>
                </div>
            </div>


            <div>
                <h3 className='text_inni_main text-center min-w-[115%] md:min-w-[110%] relative left-4 md:left-[28px] text-[15px] lg:text:lg'>To build an ecosystem to identify, nurture innovation and entrepreneurship skills amongst students and to generate successful commercial enterprise contributing towards significant overall growth. </h3>

            </div>

        </div>

    )
}

export default StartupSaga