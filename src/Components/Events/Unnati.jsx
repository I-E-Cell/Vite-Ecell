import React from 'react'
import unnati from "../../assets/Unnati.svg"
import mixpanel from 'mixpanel-browser';
mixpanel.init('b2ff7ac9e3348a34108ce514efef85ce', {debug: true, track_pageview: true, persistence: 'localStorage'});

const Unnati = () => {
    return (
        <div className='absolute flex flex-col  gap-5  w-[80%] top-[60px] mx-auto'>
            <div className='relative left-[5%] lg:left-[13%] flex gap-4 md:gap-16'>
                <img className='relative logo_inni w-[6em] lg:w-[8em]' src={unnati} alt="" />
                <div className='flex flex-col gap-5'>


                    <h1 className='text_inni text-3xl lg:text-4xl my-auto font-bold'>Unnati</h1>
                    <a href="https://www.unnati3.in/" target='_blank'>
                        <button onClick={mixpanel.track('Unnati Site Visited')} className='btn_inni bg-[#31ABD4] rounded-lg text-white font-semibold  relative   w-24 border-white border-1 h-9'>
                            Explore
                        </button></a>
                </div>
            </div>


            <div>
                <h3 className='text_inni_main text-center min-w-[115%] md:min-w-[110%] relative left-4 md:left-[28px] text-[15px] lg:text:lg'>A fantastic event to showcase the art of creative marketing and persuade others of a product and service's value in today's ever- evolving market. </h3>

            </div>

        </div>
    )
}

export default Unnati