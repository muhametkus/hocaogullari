import React from 'react'
import SayfaUstBilgi from '../components/SayfaUstBilgi/SayfaUstBilgi'
import Hizmetler from '../components/Hizmetler/Hizmetler'
import Gorseller from '../components/Gorseller/Gorseller'

const Hizmetlerimiz = () => {
  return (
    <>
    <SayfaUstBilgi SayfaAdi="HİZMETLERİMİZ"/>
    
    <Hizmetler/>
    <Gorseller/>
    </>
  )
}

export default Hizmetlerimiz