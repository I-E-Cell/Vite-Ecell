import React from 'react';
import Mglass from "../assets/magnifying-glass.png"
import { AiOutlineArrowUp } from "react-icons/ai";


const Home = () => {
    return (
        <div id='home'  className='scroll-smooth bg-[#906ED6] w-[100%] h-[600px] lg:h-[100vh] sm:h-[600px] md:h-[700px] '>
            <div className='text-[35px] sm:text-[50px] lg:text-[100px] md:text-[65px] text-white font-bold absolute sm:right-10 top-[30%] text-center'>
                <h1>INNOVATI<span className='text-[40px] sm:text-[55px] lg:text-[115px] md:text-[70px]' >ON & </span><br /> ENTREPRENE<span className='text-[44px] sm:text-[55px] lg:text-[115px] md:text-[70px]'>URSH</span>IP <br /> <span className='z-10'> CELL</span></h1>
            
            <img className='absolute top-[-4.8vh] right-[1vh] sm:w-[50%] sm:top-[-5vh] lg:top-[-14vh] md:top-[-7vh] lg:right-[5vh] md:right-[5vh] sm:right-[5vh] w-[53%]' src={Mglass} alt="" />
            </div>

            <div className=' fixed w-12 h-8 bg-[#1E1E1E] border-white border-2 bottom-3 rounded-2xl right-4'>
              <a href="#home"> <AiOutlineArrowUp  color='white' size={22} className='mx-auto my-[6%]'/></a> 
            </div>

        </div>
    )
}

export default Home