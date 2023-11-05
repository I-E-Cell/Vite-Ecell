// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Card_M from './Card_M';

export default () => {
  return (
    <div className='w-[90%] mt-10  relative flex sm:hidden mx-auto rounded-2xl bg-[#1C1F2B] px-16 py-16' >
    <Swiper className='flex justify-center'
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Card_M /></SwiperSlide>
      <SwiperSlide><Card_M /></SwiperSlide>
      <SwiperSlide><Card_M /></SwiperSlide>
      <SwiperSlide><Card_M /></SwiperSlide>
      <SwiperSlide><Card_M /></SwiperSlide>
      <SwiperSlide><Card_M /></SwiperSlide>

      ...
    </Swiper>
    </div>
  );
}