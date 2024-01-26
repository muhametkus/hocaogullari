import React from 'react'
import { MailFilled, PhoneFilled } from '@ant-design/icons'
import IletisimFormu from '../components/IletisimComp/IletisimFormu'
import SayfaUstBilgi from '../components/SayfaUstBilgi/SayfaUstBilgi'
import emailjs from '@emailjs/browser';
//import Swal from "sweetalert2";
const Iletisim = () => {
  return (
    <>
    <SayfaUstBilgi SayfaAdi="İLETİŞİM"/>
    <div className='py-12 mx-4 flex flex-row sm:flex-col md:flex-col gap-x-14 justify-center'>
        
      <div className='flex flex-col flex-wrap sm:w-full sm:mx-auto gap-y-14'>

        <div className='flex flex-col sm:mx-auto md:mx-auto gap-y-2'>
          <h2 className='text-4xl'>İletişim Bilgilerimiz</h2>
          <div className='flex flex-col text-lg '>
            <a className='flex items-center gap-x-1' href="tel:+902163969781"><PhoneFilled /> <span>0 216 396 97 81</span></a>
            <a className='flex items-center gap-x-1' href="tel:+905559751562"><PhoneFilled /> <span>0 555 975 15 62</span></a>
            <a className='flex items-center gap-x-1' href='mailto:info@hocaogullariturizm.com.tr'><MailFilled /> <span>info@hocaogullariturizm.com.tr</span></a> 
            <a className='flex items-center gap-x-1' href='mailto:hocaogullariturizm@hotmail.com'><MailFilled /> <span>hocaogullariturizm@hotmail.com</span></a> 
          </div>
        </div>
        <div className='flex-col '>
          <div className='flex-col sm:mx-auto'>
          <iframe className='w-[600px] sm:mx-auto md:mx-auto sm:w-[90%]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.7259097076694!2d29.257693084776587!3d40.87788889754635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc9dead420fb%3A0x80cc6a7a1751b95!2sFevzi%20%C3%87akmak%2C%20Cemal%20G%C3%BCrsel%20Cd.%20No%3A115%2C%2034899%20Pendik%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1704879225029!5m2!1str!2str"  height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />


          </div>
          
        </div>

      </div>

      <div className='flex flex-col flex-wrap sm:w-full sm:mx-auto gap-y-20'>
      <div className='flex flex-col gap-y-2 mx-auto sm:mt-10 md:mt-10'>
          <h2 className='text-4xl'>Adresimiz</h2>
          <p className='text-wrap text-xl pt-2'>Fevziçakmak mh. Cemal Gürsel cd. No:115/31 <br/> Kaynarca, Pendik / İstanbul</p>

        </div>
        <div className=''>
          <div className='sm:pl-8 md:pl-28'>
            <IletisimFormu/>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default Iletisim