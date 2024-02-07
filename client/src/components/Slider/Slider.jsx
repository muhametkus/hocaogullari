import React from 'react'
import { Carousel } from 'antd';
import "./Slider.css";

const Slider = () => {
  return (
    <Carousel effect="fade">
    <div className='bg-black'>
      <div className='absolute z-20 flex flex-col justify-center w-full items-center h-full'>
        <h3 className='text-white text-4xl font-light tracking-in-contract mb-2 sm:text-xl'>Güvenli, Dakik, Rahat,</h3>
        <h2 className='text-white text-6xl sm:text-4xl text-wrap font-extralight text-center text-focus-in sm:text-3xl'>Personel ve Öğrenci Taşımacılığı</h2></div>
    <img className='w-full opacity-55 sm:opacity-45' src="./img/servisaraclari2.jpg" alt="" />

    </div>
    <div className='bg-black'>
      <div className='absolute z-20 flex flex-col justify-center w-full items-center h-full'>
        <h3 className='text-white text-4xl font-light tracking-in-contract mb-2 sm:text-xl'>Güvenli, Dakik, Rahat,</h3>
        <h2 className='text-white text-6xl sm:text-4xl text-wrap font-extralight text-center text-focus-in sm:text-3xl'>Personel ve Öğrenci Taşımacılığı</h2></div>
    <img className='w-full opacity-45' src="./img/servisaraclari.jpg" alt="" />

    </div>
    <div className='bg-black'>
      <div className='absolute z-20 flex flex-col justify-center w-full items-center h-full'>
        <h3 className='text-white text-4xl font-light tracking-in-contract mb-2 sm:text-xl'>Güvenli, Dakik, Rahat,</h3>
        <h2 className='text-white text-6xl sm:text-4xl text-wrap font-extralight text-center text-focus-in sm:text-3xl'>Personel ve Öğrenci Taşımacılığı</h2></div>
    <img className='w-full opacity-45' src="./img/servis-otobus.jpg" alt="" />

    </div>
  </Carousel>
  )
}

export default Slider