import React, { useState, useEffect, useRef } from 'react';
import { IoAddOutline } from "react-icons/io5";
const Modal = ({ closeModal }) => {
  
  const modalRef = useRef();

 
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'>
      <div ref={modalRef} className='bg-[#1C1F2B] w-11/12 md:w-1/2 lg:w-1/3 p-5 rounded-lg shadow-lg'>
        <div className='flex justify-between items-center mx-4'>
          <h2 className='text-xl font-bold text-white'>Previous Editions</h2>
          <button className='text-white hover:scale-125 duration-200 rotate-45' onClick={closeModal}>
            <IoAddOutline size={20} />
          </button>
        </div>
        <hr className='my-4 mt-4 w-full h-[1px] bg-white'/>
        <div className='flex flex-col mt-4 mx-4 '>
          <a target='_blank' href='https://drive.google.com/file/d/17JSwuUDU5W39YDQ57PM07ennDECxv2Yu/view?usp=drive_link'><button className='w-full py-2 my-3 bg-[#86C8D3] text-black rounded-xl hover:scale-105 duration-200' >
            Udyamita 2020-21
          </button></a>
          <a target='_blank' href='https://drive.google.com/file/d/1Vq4Vh2pR67N7S2c5YttVlJJ8NiZeg1n7/view?usp=drive_link'><button className='w-full py-2 my-3 bg-[#86C8D3] text-black rounded-xl hover:scale-105 duration-200' >
          Udyamita 2021-22
          </button></a>
          <a target='_blank' href='https://drive.google.com/file/d/1F7z3CBE2QtmYEV5UOpus9rPP-ICrw6eW/view?usp=drive_link'><button className='w-full py-2 my-3 bg-[#86C8D3] text-black rounded-xl hover:scale-105 duration-200' >
          Udyamita 2022-23
          </button></a>
        </div>
      
      </div>
    </div>
  );
};

export default Modal;
