import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Card_M from './Card_M';
import Card_blue from './Card_blue';
import Card_purple from './Card_purple';
import { FaArrowRightLong } from "react-icons/fa6";


export default () => {
  return (
    
    <div className='w-[91%] md:w-[84.4%] mt-10  relative flex  sm:hidden mx-auto  rounded-2xl bg-[#1C1F2B] px-16 py-16' >
    <Swiper className='flex justify-center'
      modules={[Navigation]}

      spaceBetween={10}
      navigation

      slidesPerView={1}
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
    
  );
}