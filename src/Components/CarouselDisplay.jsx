import React from 'react'
import Carouseldesk from './Carouseldesk'
import CarouselMobile from './CarouselMobile'
import Carouselsm from './Carouselsm'
import Carouselmd from './Carouselmd'

const CarouselDisplay = () => {
  return (
    <div>
        <h1 className='relative mx-auto text-center text-white mt-20 font-bold sm:text-5xl text-3xl   '>Message From Alumini</h1>
        <Carouseldesk />
        <CarouselMobile />
        <Carouselsm />
        <Carouselmd />
    </div>

  )
}

export default CarouselDisplay