// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Card_M from './Card_M';
import Card_blue from './Card_blue';
import Card_purple from './Card_purple';

export default () => {
  return (
    <div className='w-[90%] hidden md:flex lg:hidden justify-center mt-10 mx-auto rounded-2xl bg-[#1C1F2B] px-16 py-16' >
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Card_M /></SwiperSlide>
        <SwiperSlide><Card_blue /></SwiperSlide>
        <SwiperSlide><Card_purple /></SwiperSlide>
        <SwiperSlide><Card_M /></SwiperSlide>
        <SwiperSlide><Card_blue /></SwiperSlide>
        <SwiperSlide><Card_purple /></SwiperSlide>

      ...
    </Swiper>
    </div>
  );
};