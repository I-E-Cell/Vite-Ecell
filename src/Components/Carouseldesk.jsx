import React, {useRef, useState} from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// import BtnSlider from ""

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import Card_M from './Card_M';
import Card_blue from './Card_blue';
import Card_purple from './Card_purple';
import SwiperButtons from './SwiperButtons';



export default ({slides}) => {
  return (
    
    <div className='w-[91%] md:w-[84.4%] hidden lg:flex justify-center mt-10 mx-auto rounded-2xl bg-[#1C1F2B] px-16 py-16' >
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      // {{
      //   nextEl : 'review-swiper-button-next',
      //   prevEl : 'review-swiper-button-prev'
      // }}
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <SwiperButtons />
        <SwiperSlide><Card_M /></SwiperSlide>
        <SwiperSlide><Card_blue /></SwiperSlide>
        <SwiperSlide><Card_purple /></SwiperSlide>
        <SwiperSlide><Card_M /></SwiperSlide>
        <SwiperSlide><Card_blue /></SwiperSlide>
        <SwiperSlide><Card_purple /></SwiperSlide>
        <br />
      ...
        
      </Swiper>
    </div>
    
    
  );
};