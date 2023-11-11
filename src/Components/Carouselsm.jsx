// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Card_M from './Card_M';
import Card_blue from './Card_blue';
import Card_purple from './Card_purple';
import { FaArrowRightLong } from "react-icons/fa6";


export default () => {
  return (
    <div>
    <div className='w-[90%] relative mt-10  hidden sm:flex md:hidden mx-auto rounded-tr-2xl rounded-tl-2xl bg-[#1C1F2B] px-16 pt-16' >
    <Swiper
      spaceBetween={44}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Card_M /></SwiperSlide>
        <SwiperSlide><Card_blue /></SwiperSlide>
        <SwiperSlide><Card_purple /></SwiperSlide>
        <SwiperSlide><Card_M /></SwiperSlide>
        <SwiperSlide><Card_blue /></SwiperSlide>
        <SwiperSlide><Card_purple /></SwiperSlide>
    </Swiper>
    </div>
    <div className='w-[90%] pb-10 bg-[#1C1F2B] hidden md:hidden sm:flex  justify-center rounded-bl-2xl mx-auto rounded-br-2xl relative top-0'>
      <h1 className='font-semibold flex justify-center pt-1 text-white'>Swipe<FaArrowRightLong size={20} className='top-[5px] pl-1 relative' /></h1>
    </div>
    
    </div>
  );
}