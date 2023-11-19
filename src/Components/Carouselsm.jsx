// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import sahilsir from '../assets/Alumni/sahilsir.jpeg'

import Card_M from './Card_M';
import Card_blue from './Card_blue';
import Card_purple from './Card_purple';
import { FaArrowRightLong } from "react-icons/fa6";
import ayushsir from '../assets/Alumni/ayushsir.jpeg'
import awanishpandey from '../assets/Alumni/awanishpandey.jpeg'


export default () => {
  return (
    
    <div className='w-[91%] md:w-[84.4%] relative mt-10  hidden sm:flex md:hidden mx-auto  rounded-2xl bg-[#1C1F2B] px-16 py-16' >
    <Swiper
      modules={[Navigation]}

      spaceBetween={20}
      // navigation

      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide ><Card_M name="Mr. Ayush Agrawal" msg="The I&E cell’s mission to build an ecosystem to promote entrepreneurship in AIT is certainly admirable. With so many initiatives launched over the last few years, I’m certain we’ll see many AITian startups leading the way in the Indian startup ecosystem soon. I wish you guys the best!" img={ayushsir} /></SwiperSlide>
        <SwiperSlide><Card_blue img={awanishpandey} name="Mr. Awanish Pandey" msg="As a proud alumnus of AIT, witnessing the I&E cell's commitment to nurturing entrepreneurship is truly commendable.The array of initiatives undertaken in recent years promises a bright future for AITian startups, destined to make a mark in the Indian startup landscape. Wishing the I&E cell continued success and looking forward to seeing AIT alumni leading the way."/></SwiperSlide>
        <SwiperSlide><Card_purple name="Mr. Sahil Uttekar" msg="Absolutely thrilled about the I&E cell's dedication to fostering entrepreneurship at AIT. Having started my journey in this ecosystem, I am genuinely happy with what I have achieved today. With a myriad of initiatives launched recently, I have no doubt that AITian startups will soon take the helm in the Indian startup ecosystem. Wishing the team all the best!" img={sahilsir}  /></SwiperSlide>
        <SwiperSlide><Card_M /></SwiperSlide>
        <SwiperSlide><Card_M /></SwiperSlide>
        <SwiperSlide><Card_blue /></SwiperSlide>
        <SwiperSlide><Card_purple /></SwiperSlide>
    </Swiper>
    </div>
   
    
    
  );
}