import React from 'react'
import c_img from '../assets/undraw.png'

const Contact = () => {
    return (
        <div id='contact' className='flex py-10 md:py-0 flex-col md:flex-row  overflow-hidden sm:mx-auto justify-around'>
            <div className='mx-auto md:mx-0'>
                <div className='my-5 mx-5 text-[#935CFF] text-5xl  font-bold '>Contact Us</div>
                <div className='my-5'
                >
                    <img className=' my-5 relative w-[350px] sm:w-[400px] md:w-[500px] ' src={c_img} alt="" />

                </div>
                <div className='h-[120px] w-[120px] sm:h-[170px] my-10 sm:w-[170px] opacity-40 relative top-[-160px] sm:top-[-190px] z-10 left-[240px] sm:left-[320px] md:left-[400px]  rounded-t-full rounded-b-full bg-[#A06EE0]'></div>



            </div>
            <div className='mx-auto md:mx-0'>
                <ul className='flex  flex-col gap-7 md:gap-10'>
                    <div >
                        <input type="text" placeholder='Name' className='input rounded-2xl  border-[.7px] boxx h-[50px] w-[320px] sm:w-[440px] ' />
                        {/* <label className='name relative right-[420px] bg-white px-3' htmlFor="">Name</label> */}
                    </div>
                    <div >
                        <input type="text" placeholder='Email' className='input rounded-2xl border-[.7px] boxx h-[50px] w-[320px] sm:w-[440px]  ' />
                        {/* <label className='name relative right-[420px] bg-white px-3' htmlFor="">E-mail</label> */}
                    </div>
                    <div >
                        <input type="text" placeholder='Phone no.' className='input rounded-2xl border-[.7px] boxx h-[50px] w-[320px] sm:w-[440px]  ' />
                        {/* <label className='name relative right-[420px] bg-white px-3' htmlFor="">Phone no.</label> */}
                    </div>
                    <div >
                        <input type="text" placeholder='Write about your query' className='input rounded-2xl  border-[.7px] boxx h-[150px] w-[320px] sm:w-[440px]  ' />
                        {/* <label  className='name relative right-[380px] bg-white px-3' htmlFor="">Write about your query</label> */}
                    </div>
                    <div className=' text-right px-1'>
                        <button className=' w-32 h-12 rounded-2xl bg-[#935CFF] shadow-md shadow-gray-700  text-lg font-semibold text-white'>Submit</button>
                    </div>
                </ul>



            </div>
        </div>
    )
}

export default Contact