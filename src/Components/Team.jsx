import React from 'react'
import oo from '../assets/oo.png';
import gulshan from "../assets/gulshann.png"
import { FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter, FaYoutube, FaHeart } from "react-icons/fa";
import Card from './Card';



const Team = () => {
    return (
        <div>
            <div className='flex my-auto mx-auto  justify-center  '>
                <img className='w-[40px] h-[40px] my-auto sm:w-[60px] sm:h-[60px]' src={oo} alt="" />
                <h1 className='my-auto text-[#935CFF] text-4xl sm:text-5xl  py-20 font-bold'>UR TEAM</h1>
            </div>
            <div className=' py-4 relative mx-auto rounded-lg init2 max-w-[98%]'>
            <div>
                    <h1 className='mx-auto text-[#444444] text-center text-3xl sm:text-4xl  py-4 font-bold'>Mentors</h1>

                </div>
                <div className='flex flex-col lg:flex-row relative mx-auto  justify-center'>
                    <div className='flex flex-col relative mx-auto  md:flex-row gap-16'>
                    <Card name="Samik Chaudhary" branch="SE COMP" img={gulshan}/>
                    <Card name="Ayush Singh" branch="SE COMP" img={gulshan}/>
                    </div>
                    <div className='flex flex-col relative mx-auto  md:flex-row gap-16'>

                    <Card name="Sandeep Mishra" branch="SE COMP" img={gulshan}/>
                    <Card name="Abhinaw Gupta" branch="SE COMP" img={gulshan}/>
                    </div>





                </div>
                <div>
                    <h1 className='mx-auto text-[#444444] text-center text-3xl sm:text-4xl  py-4 font-bold'>Secretary</h1>

                </div>
                <div className='flex flex-col   relative mx-auto  md:flex-row justify-center gap-16'>
                    <div className='flex flex-col relative mx-auto  md:flex-row gap-16'>
                    <Card name="Ayush Kumar" branch="SE COMP" img={gulshan}/>
                    <Card name="Jyoti Yadav" branch="SE COMP" img={gulshan}/>
                    </div>



                </div>
                <div>
                    <h1 className='mx-auto text-[#444444] text-center text-3xl sm:text-4xl pt-9  py-4 font-bold'>Domain Heads</h1>

                </div>
                <div className='flex flex-col lg:flex-row relative mx-auto  justify-center gap-16'>
                    <div className='flex flex-col relative mx-auto  md:flex-row gap-16'>
                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan}/>
                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan}/>
                    </div>
                    <div className='flex flex-col relative mx-auto  md:flex-row gap-16'>
                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan}/>
                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan}/>
                    </div>
                </div>
                <div>
                    <h1 className='mx-auto text-[#444444] text-center text-3xl sm:text-4xl pt-9  py-4 font-bold'>Joint Secretaries</h1>

                </div>
                <div className='flex flex-col lg:flex-row relative mx-auto  justify-center gap-16'>
                    <div className='flex flex-col relative mx-auto  md:flex-row gap-16'>
                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan}/>
                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan}/>
                    </div>
                    <div className='flex flex-col md:flex-row relative mx-auto  gap-16'>
                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan}/>
                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan}/>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row relative mx-auto  justify-center gap-16'>
                    <div className='flex flex-col relative mx-auto  md:flex-row gap-16'>
                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan}/>
                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan}/>
                    </div>
                    <div className='flex flex-col relative mx-auto md:flex-row gap-16'>
                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan}/>
                    <Card name="Gulshan Singh" branch="SE COMP" img={gulshan}/>
                    </div>
                </div>

            </div>

        </div>


    )
}

export default Team