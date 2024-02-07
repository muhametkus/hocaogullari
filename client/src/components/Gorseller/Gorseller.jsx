import React from 'react'
import { Image } from 'antd';

const Gorseller = () => {

    let Galeri = [
        { resimAdi: "Araç İçi", resimLink:"./img/servisaraclari3.jpg" },
        { resimAdi: "Araç İçi", resimLink:"./img/servisaraclari2.jpg" },
        { resimAdi: "Araç İçi", resimLink:"./img/servisaraclari.jpg" },
        { resimAdi: "Araç İçi", resimLink:"./img/servis-otobus.jpg" },
        { resimAdi: "Araç İçi", resimLink:"./img/servis-otobus.jpg" },
        { resimAdi: "Araç İçi", resimLink:"./img/servis-otobus.jpg" },
      ];

  return (
    <div className=' w-[90%] mx-auto flex gap-x-2 gap-y-6 sm:gap-y-3 flex-wrap mb-5'>
{Galeri.map((resim) => (
  <>
<div className='hidden flex-row mx-auto sm:hidden w-[450px] h-[250px] object-cover' key={resim.resimAdi}>
  <img className='object-fill block w-full h-full'  src={resim.resimLink} alt="" />
  </div>

  <div className='flex flex-row mx-auto sm:hidden w-[450px] h-[250px] object-cover' key={resim.resimAdi}>
  <Image 
width={450} height={250}
    src={resim.resimLink}
  />
  </div>


  <div className='mx-auto hidden sm:flex' key={resim.resimAdi}><Image 
width={370}
    src={resim.resimLink}
  /></div>

</>
  ))}
    </div>
  )
}

export default Gorseller