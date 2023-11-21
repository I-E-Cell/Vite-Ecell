import React, { useRef, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import sahilsir from '../assets/Alumni/sahilsir.jpeg'

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
import ayushsir from '../assets/Alumni/ayushsir.jpeg'
import awanishpandey from '../assets/Alumni/awanishpandey.jpeg'
import mohitkumar from '../assets/Alumni/mohitkumar.jpeg'
import satenderkumar from '../assets/Alumni/satenderkumar.jpeg'



export default ({ slides }) => {
  return (

    <div className='w-[91%] md:w-[84.4%] hidden lg:flex justify-center mt-10 mx-auto rounded-2xl bg-[#1C1F2B] px-16 py-16' >
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        // {{
        //   nextEl : 'review-swiper-button-next',
        //   prevEl : 'review-swiper-button-prev'
        // }}
        pagination={{ clickable: true }}

        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {/* <SwiperButtons /> */}
        <SwiperSlide ><Card_M name="Mr. Ayush Agrawal" msg="The I&E cell’s mission to build an ecosystem to promote entrepreneurship in AIT is certainly admirable. With so many initiatives launched over the last few years, I’m certain we’ll see many AITian startups leading the way in the Indian startup ecosystem soon. I wish you guys the best!" img={ayushsir} /></SwiperSlide>
        <SwiperSlide><Card_blue name="Mr. Satender Kumar" img={satenderkumar} msg ="Congratulations to the AIT Entrepreneurship Cell on the launch of your new website! This platform will undoubtedly ignite inspiration and empower aspiring entrepreneurs within and beyond our alma mater. Your dedication to fostering innovation and cultivating future leaders is commendable. Wishing the E-Cell team great success in sparking creativity and entrepreneurial spirit among the AIT community!" /></SwiperSlide>
        <SwiperSlide><Card_purple name="Mr. Sahil Uttekar" msg="Absolutely thrilled about the I&E cell's dedication to fostering entrepreneurship at AIT. Having started my journey in this ecosystem, I am genuinely happy with what I have achieved today. With a myriad of initiatives launched recently, I have no doubt that AITian startups will soon take the helm in the Indian startup ecosystem. Wishing the team all the best!" img={sahilsir}/></SwiperSlide>
        <SwiperSlide><Card_M  name="Mr. Mohit Kumar" img={mohitkumar} msg ="The I&E cell at AIT is really focused on helping people start businesses. I've been involved in this work and seen how dedicated we are and the progress we've made. These new plans are important and are helping AIT students' startups succeed in India. It's amazing to see the small ideas from my time now becoming successful businesses. A big round of applause to the team for working so hard, and here's to AIT becoming even better at supporting entrepreneurs!"/></SwiperSlide>
        <SwiperSlide><Card_blue img={awanishpandey} name="Mr. Awanish Pandey" msg="As a proud alumnus of AIT, witnessing the I&E cell's commitment to nurturing entrepreneurship is truly commendable. The array of initiatives undertaken in recent years promises a bright future for AITian startups, destined to make a mark in the Indian startup landscape. Wishing the I&E cell continued success and looking forward to seeing AIT alumni leading the way in innovation and entrepreneurship."/></SwiperSlide>
        {/* <SwiperSlide><Card_purple /></SwiperSlide> */}
        <br />
        ...

      </Swiper>
    </div>


  );
};