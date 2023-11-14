import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Card_M from './Card_M';
import Card_blue from './Card_blue';
import Card_purple from './Card_purple';



export default ({slides}) => {
  return (
    
    <div className='w-[91%] md:w-[84.4%] hidden lg:flex justify-center mt-10 mx-auto rounded-2xl bg-[#1C1F2B] px-16 py-16' >
      <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      
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
};