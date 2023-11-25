import React, { useState ,useRef} from 'react'
import emailjs from '@emailjs/browser';
import Popup from './Popup';
import { motion } from 'framer-motion'

const ComIntern = () => {
    const [send, setSend] = useState("Send")
    const [popup2, setPopup2] = useState(false)
    function pressed(e) {
        
        setPopup2(!popup2);
        // alert("Your e-mail has been registered!!");
    }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_huw9exb', 'template_m9jn368', form.current, 'VXKelifARxvSAxp8I')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='flex justify-center w-[100%] absolute top-[120px]'>

            <div className='py-6 w-[91%] md:w-[87.4%] lg:w-[78.4%] justify-center gap-6  lg:gap-32 flex flex-col-reverse md:flex-row bg-[#1C1F2B] rounded-2xl mx-auto relative '>


                <div className=' w-[90%] relative mx-auto md:mx-0 text-center md:text-start'>
                    <h1 className='lg:text-[37px] text-[30px] mx-auto w-[95%] md:w-[100%]  font-bold text-[#86C8D3]'>Drop us your Details if you have any Opportunity for us !!</h1>
                    <hr className='max-w-[80%] mx-auto md:mx-0 bg-[#86C8D3] realtive px-4' />
                    <div className='w-[90%] md:w-[80%] mx-auto md:mx-10 '>
                        <form ref={form} onSubmit={sendEmail}>
                            <label className='text-base font-semibold text-white md:mr-[85px]' htmlFor="fname">Name :</label>
                            <input required name='name' id='input' className='mt-2 md:mt-5 shadow-xl mb-3 rounded-lg  bg-[#B8D9DE] border-[1.5px] md:w-[70%] w-[90%] h-[40px] border-[#3E3126]' type="name" placeholder='Enter your Name' /> <br />
                            <label className='text-base md:mr-3 font-semibold text-white' htmlFor="Cname">Company Name :</label>
                            <input required name='c_name' id='input' className='mt-2 shadow-xl mb-3 rounded-lg bg-[#B8D9DE] border-[1.5px] md:w-[70%] w-[90%] h-[40px] border-[#3E3126]' type="name" placeholder='Enter Company Name' /> <br />
                            <label className='text-base md:mr-[96px] font-semibold text-white' htmlFor="">Role :</label>
                            <input required name='role' id='input' className='mt-2 shadow-xl mb-3 rounded-lg bg-[#B8D9DE] border-[1.5px] md:w-[70%] w-[90%] h-[40px] border-[#3E3126]' type="name" placeholder='Enter the Role' /><br />
                            <label className='text-base  md:mr-[98px] font-semibold text-white' htmlFor="">Link :</label>
                            <input required name='link' id='input' className='mt-2 shadow-xl mb-3 rounded-lg bg-[#B8D9DE] border-[1.5px] md:w-[70%] w-[90%] h-[40px] border-[#3E3126]' type="link" placeholder='Enter the link' /><br />
                            <label className='text-base md:mr-[89px] font-semibold text-white' htmlFor="">Email :</label>
                            <input required name='email' id='input' className='mt-2 shadow-xl mb-3 rounded-lg bg-[#B8D9DE] border-[1.5px] md:w-[70%] w-[90%] h-[40px] border-[#3E3126]' type="email" placeholder='Enter your E-mail' /><br />

                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={pressed} className=' shadow-xl md:mx-0  bg-[#96D0DA] rounded-full px-8 py-[6px]  my-3 font-medium text-[#3E3126] flex relative '>{send}</motion.button>
                        </form>
                    </div>
                </div>

            </div>
            {(popup2 && input.value != '') ? <Popup /> : null}

        </div>
    )
}

export default ComIntern