import React from 'react'
import Slider from '../components/Slider/Slider'
import Hizmetler from '../components/Hizmetler/Hizmetler'
import IletisimComp from '../components/IletisimComp/IletisimComp'

const Anasayfa = () => {
  return (
    <div className='w-full'>
     <div className='2xl:w-[1899px] w-full mx-auto flex flex-col items-center gap-x-10 sm:gap-x-5 text-white'>
     <div className='w-full'><Slider/></div>
     <Hizmetler/>
     <IletisimComp/>
      
     </div>
    </div>
  )
}

export default Anasayfa