import React from 'react'
import Slider from '../components/Slider/Slider'
import Hizmetler from '../components/Hizmetler/Hizmetler'
import IletisimComp from '../components/IletisimComp/IletisimComp'
import Gorseller from '../components/Gorseller/Gorseller'
import AracFilo from '../components/AracFilo/AracFilo'

const Anasayfa = () => {
  return (
    <>
     <div className='w-full sm:mt-[70px]'><Slider/></div>
     <div className='w-full'><AracFilo/></div>
     <div className='w-full'><h2 className='text-center text-8xl md:text-7xl sm:text-[50px] font-extralight text-slate-800 mt-10 uppercase'>HİZMETLERİMİZ</h2></div>
     <Hizmetler/>
     
     <div className='w-full '><h2 className='text-center text-8xl md:text-7xl sm:text-[55px] font-extralight text-slate-800 mt-10 mb-5 uppercase'>Görseller</h2></div>
     <Gorseller/>
     <IletisimComp/>

    </>

  )
}

export default Anasayfa