import React, {useState} from 'react'
import tick from '../assets/tick.gif'
import Newsletter from './Newsletter'
function Popup (){
    const [popup, setPopup]=useState(true)
    function pressed(){
        setPopup(!popup);
        
        
    };
  return (
    <> { popup?
    <div className='w-[100%] h-[100vh]  z-40 backdrop-filter text-[#3E3126] backdrop-blur-sm  top-[0%] fixed flex justify-center items-center'>
        <div className='w-[21em] md:w-[22em] h-[15em] rounded-2xl bg-[#D2AD93]'>
            <img className='relative rounded-full left-[9em] overflow-hidden -top-6 h-14' src={tick} alt="" />
            <h1 className='relative text-center text-3xl font-bold '>Thankyou !</h1>
            <h1 className='relative text-center text-lg w-[90%] mx-auto top-[10px]'> Your details have been successfully Submitted. Thankyou !</h1>
            <button onClick={pressed} className='relative top-[30px] w-[80%] flex justify-center rounded-md mx-auto text-white py-2 bg-[#3E3126]'>OK</button>
        </div>
    </div>: null
    }</>
  )
}

export default Popup