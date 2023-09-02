import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ss from '../assets/sslogo.png';
import "react-multi-carousel/lib/styles.css";

import '../index.css'



const Carousell = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 3,
            slidesToSlide :2,
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3,
            slidesToSlide :2,
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 1.5,
            slidesToSlide :2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <Carousel infinite={true}  dotListClass="custom-dot-list-style" showDots={true} responsive={responsive}>
                
                <div className=' h-[335px] w-[260px] border-2 rounded-2xl border-[#935CFF] bg-[#E9E3F6]'>
                    <div className=' pt-3'>
                        <img className='mx-auto h-[140px] w-[178px]' src={ss} alt="" />
                    </div>
                    <div>
                        <h2 className='mx-auto text-center text-2xl  text-black my-4  font-semibold'>Startup Saga</h2>
                    </div>
                    <div className='mx-auto justify-center text-center'>
                        <button className='mx-auto bg-[#935CFF] py-2 px-3 rounded-lg text-white outline-[#935CFF] outline-offset-1 '>Know More</button>
                    </div>
                    <div > 
                        <h3 className='mx-auto text-justify py-4 max-w-[200px]'>Lorem ipsum dolor icing elit. Tdore, quia molesxs dcs

                        </h3>
                    </div>
                </div>
                <div className=' h-[335px] w-[260px] border-2 rounded-2xl border-[#935CFF] bg-[#E9E3F6]'>
                    <div className=' pt-3'>
                        <img className='mx-auto h-[140px] w-[178px]' src={ss} alt="" />
                    </div>
                    <div>
                        <h2 className='mx-auto text-center text-2xl  text-black my-4  font-semibold'>Startup Saga</h2>
                    </div>
                    <div className='mx-auto justify-center text-center'>
                        <button className='mx-auto bg-[#935CFF] py-2 px-3 rounded-lg text-white outline-[#935CFF] outline-offset-1 '>Know More</button>
                    </div>
                    <div > 
                        <h3 className='mx-auto text-justify py-4 max-w-[200px]'>Lorem ipsum dolor icing elit. Tdore, quia molesxs dcs

                        </h3>
                    </div>
                </div>
                <div className=' h-[335px] w-[260px] border-2 rounded-2xl border-[#935CFF] bg-[#E9E3F6]'>
                    <div className=' pt-3'>
                        <img className='mx-auto h-[140px] w-[178px]' src={ss} alt="" />
                    </div>
                    <div>
                        <h2 className='mx-auto text-center text-2xl  text-black my-4  font-semibold'>Startup Saga</h2>
                    </div>
                    <div className='mx-auto justify-center text-center'>
                        <button className='mx-auto bg-[#935CFF] py-2 px-3 rounded-lg text-white outline-[#935CFF] outline-offset-1 '>Know More</button>
                    </div>
                    <div > 
                        <h3 className='mx-auto text-justify py-4 max-w-[200px]'>Lorem ipsum dolor icing elit. Tdore, quia molesxs dcs

                        </h3>
                    </div>
                </div>
                <div className=' h-[335px] w-[260px] border-2 rounded-2xl border-[#935CFF] bg-[#E9E3F6]'>
                    <div className=' pt-3'>
                        <img className='mx-auto h-[140px] w-[178px]' src={ss} alt="" />
                    </div>
                    <div>
                        <h2 className='mx-auto text-center text-2xl  text-black my-4  font-semibold'>Startup Saga</h2>
                    </div>
                    <div className='mx-auto justify-center text-center'>
                        <button className='mx-auto bg-[#935CFF] py-2 px-3 rounded-lg text-white outline-[#935CFF] outline-offset-1 '>Know More</button>
                    </div>
                    <div > 
                        <h3 className='mx-auto text-justify py-4 max-w-[200px]'>Lorem ipsum dolor icing elit. Tdore, quia molesxs dcs

                        </h3>
                    </div>
                </div>
                <div className=' h-[335px] w-[260px] border-2 rounded-2xl border-[#935CFF] bg-[#E9E3F6]'>
                    <div className=' pt-3'>
                        <img className='mx-auto h-[140px] w-[178px]' src={ss} alt="" />
                    </div>
                    <div>
                        <h2 className='mx-auto text-center text-2xl  text-black my-4  font-semibold'>Startup Saga</h2>
                    </div>
                    <div className='mx-auto justify-center text-center'>
                        <button className='mx-auto bg-[#935CFF] py-2 px-3 rounded-lg text-white outline-[#935CFF] outline-offset-1 '>Know More</button>
                    </div>
                    <div > 
                        <h3 className='mx-auto text-justify py-4 max-w-[200px]'>Lorem ipsum dolor icing elit. Tdore, quia molesxs dcs

                        </h3>
                    </div>
                </div>
                <div className=' h-[335px] w-[260px] border-2 rounded-2xl border-[#935CFF] bg-[#E9E3F6]'>
                    <div className=' pt-3'>
                        <img className='mx-auto h-[140px] w-[178px]' src={ss} alt="" />
                    </div>
                    <div>
                        <h2 className='mx-auto text-center text-2xl  text-black my-4  font-semibold'>Startup Saga</h2>
                    </div>
                    <div className='mx-auto justify-center text-center'>
                        <button className='mx-auto bg-[#935CFF] py-2 px-3 rounded-lg text-white outline-[#935CFF] outline-offset-1 '>Know More</button>
                    </div>
                    <div > 
                        <h3 className='mx-auto text-justify py-4 max-w-[200px]'>Lorem ipsum dolor icing elit. Tdore, quia molesxs dcs

                        </h3>
                    </div>
                </div>
                
                

            </Carousel>;
        </div>
    )
}

export default Carousell