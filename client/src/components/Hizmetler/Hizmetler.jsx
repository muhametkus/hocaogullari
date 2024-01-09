import React from 'react'

const Hizmetler = () => {
  let Hizmetler = [
    { hizmetAdi: "Personel Taşımacılığı", aciklama: "Firmamız konforlu araçlar ve güler yüzlü personel ile bir çok kuruma personel taşımacılığı hizmetini sunmaktadır.", resimLink:"./img/teamwork.png" },
    { hizmetAdi: "Öğrenci Taşımacılığı", aciklama: "Geleceğimizi emanet ettiğimiz öğrencilerimizi güvenli ve konforlu bir biçimde okullarına ulaştırabilmek adına hizmet sunuyoruz.", resimLink:"./img/graduation.png" },
    { hizmetAdi: "Özel Taşımaclık Hizmetleri", aciklama: "Düğün, Toplantı, Gezi gibi özel organizasyonlarınız için Taşımacılık Hizmeti sunuyoruz.", resimLink:"./img/tour.png" },
  ];
  return (
    <div className='w-full'>
        <div className='2xl:w-[1550px] w-[100%] md:w-[95%] sm:[95%] mx-auto flex flex-wrap justify-evenly sm:justify-center sm:gap-y-14 my-10 md:gap-y-14 lg:gap-y-10 xl:gap-y-14 text-black '>

        {Hizmetler.map((hizmet) => (
              <div className="card w-[450px] bg-base-100 shadow-xl bg-blue-600" key={hizmet.hizmetAdi}>
              <figure ><div className='bg-white px-8 py-8 rounded-full mt-5'><img className='w-[100px]' src={hizmet.resimLink} alt={hizmet.hizmetAdi} /></div></figure>
              <div className="card-body">
                <h2 className="card-title mx-auto text-3xl font-light text-white">{hizmet.hizmetAdi}</h2>
                <div className=''><p className='flex text-wrap text-white opacity-80'>{hizmet.aciklama}</p></div>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
            ))}




        

        </div>

    </div>
  )
}

export default Hizmetler