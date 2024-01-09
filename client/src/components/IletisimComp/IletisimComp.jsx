import React from 'react'
import IletisimFormu from './IletisimFormu'
import "./IletisimComp.css"
const IletisimComp = () => {
  return (
    <div className='w-full color-change-2x flex 2xl:px-16 xl:px-16 px-0 flex-wrap mx-auto justify-evenly text-white md:gap-y-8 sm:gap-y-8 py-16'>
      <div className='w-[600px] sm:w-[90%] mx-auto'><img src="./img/iletisim-form.png" alt="iletisim" /></div>
      <div className='w-[400px] sm:w-[90%] mx-auto sm:px-6'><IletisimFormu butonClass="text-white bg-slate-600 hover:bg-slate-800" labelClass="text-white" inputClass="text-slate-800"/></div>
    </div>
  )
}

export default IletisimComp