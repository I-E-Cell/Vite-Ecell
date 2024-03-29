import React,{useState} from 'react'
import { motion } from 'framer-motion'
import Popup from './Popup'
import cv from '../assets/CV.png'
import mixpanel from 'mixpanel-browser';
mixpanel.init('b2ff7ac9e3348a34108ce514efef85ce', {debug: true, track_pageview: true, persistence: 'localStorage'});

const StuIntern = () => {
    const [send, setSend] = useState("Send")
    const [popup2, setPopup2] = useState(false)
    function pressed(e) {
        e.preventDefault();
        setPopup2(!popup2);
        // alert("Your e-mail has been registered!!");
    }
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_huw9exb', 'template_7sm6rim', form.current, 'VXKelifARxvSAxp8I')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }; 
    return (
        <div className='flex justify-center w-[100%] relative '>

            <div className='py-16 w-[91%] md:w-[87.4%] lg:w-[78.4%] justify-center gap-6  lg:gap-32 flex flex-col-reverse md:flex-row bg-[#1C1F2B] rounded-2xl mx-auto relative '>

                <div className='relative flex items-center '>
                    <img className='mx-auto  relative flex items-center' src={cv} alt="" />
                </div>
                <div className=' max-w-md relative mx-auto md:mx-0 text-center md:text-start'>
                    <h1 className='lg:text-[37px] text-[30px] mx-auto w-[95%] md:w-[100%]  font-bold text-[#86C8D3]'>Drop us your e-mail and We’ll Contact you with an Opportunity !!</h1>
                    <hr className='max-w-[80%] mx-auto md:mx-0 bg-[#86C8D3] realtive px-4' />
                    <form action="">
                        <input id='input' name='email_stu' required className='mt-6 shadow-xl mb-6 rounded-lg bg-[#B8D9DE] border-[1.5px] md:w-[70%] w-[90%] h-[40px] border-[#3E3126]' type="email" placeholder='Enter a vaild E-mail' />

                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={()=>{pressed(),mixpanel.track('Send btn intern presses by student')}} className='  shadow-xl mx-auto md:mx-0  bg-[#96D0DA] rounded-full px-8 py-[6px]  my-3 font-medium text-[#3E3126] flex relative '>{send}</motion.button>
                    </form>
                </div>

            </div>
            {(popup2 && input.value!='') ? <Popup /> : null}
        </div>
    )
}

export default StuIntern