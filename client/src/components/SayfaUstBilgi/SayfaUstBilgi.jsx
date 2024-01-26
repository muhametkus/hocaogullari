import React from 'react'

const SayfaUstBilgi = (props) => {
  return (
    <div className='pt-16 w-full bg-gray-500 flex justify-center'>
        <div className='w-[50%] sm:w-full sm:m-0'>
                <h2 className='uppercase text-8xl sm:text-5xl font-light text-center py-10 text-white opacity-70'>{props.SayfaAdi}</h2>
        </div>
    </div>
  )
}

export default SayfaUstBilgi