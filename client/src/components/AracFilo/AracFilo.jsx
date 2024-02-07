import React from 'react'

const AracFilo = () => {
    let FiloGaleri = [
        { resimAdi: "Araç İçi", resimLink:"https://www.buskirala.com/wp-content/uploads/2022/01/27-kisilik-kiralik-minibus.jpg" },
        { resimAdi: "Araç İçi", resimLink:"https://ekonomiyontem.com.tr/images/haberler/mercedes-benz-travego-10-yilini-travego-s-ile-kutluyor.jpg" },
        { resimAdi: "Araç İçi", resimLink:"https://resim.epey.com/109793/m_2018-mercedes-sprinter-servis-316-cdi-2-2-163-bg-comfort-uzun-16plus1-1.jpg" },
      ];

  return (
    <div className='w-[90%] mx-auto'>
        <div className='w-full'>
            <h1 className='text-center text-8xl md:text-7xl sm:text-[50px] font-extralight text-slate-800 mt-10 uppercase pb-8'>ARAÇ FİLOMUZ</h1>
        </div>

        <div className='w-full flex flex-wrap justify-evenly sm:hidden'>
        {FiloGaleri.map((resim) => (
            <img className='py-4 px-7 rounded-3xl shadow-2xl bg-white h-[250px]' src={resim.resimLink} alt="" />
        ))}
        </div>

        <div className='w-full hidden sm:flex flex-col gap-y-8'>
        {FiloGaleri.map((resim) => (
            <img className='py-4 px-7 rounded-3xl shadow-2xl bg-white w-[90%] mx-auto' src={resim.resimLink} alt="" />
        ))}
        </div>

    </div>
  )
}

export default AracFilo