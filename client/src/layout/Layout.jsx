import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import NavbarUst from '../components/Navbar/NavbarUst'
import NavbarProvider from '../context/NavbarProvider'

const Layout = ({children}) => {
const currentYear = new Date().getFullYear(); 

  return (
    <React.Fragment>
      <NavbarProvider>
      <div><NavbarUst/></div>
        <Navbar/>
      </NavbarProvider>
        <div className='mt-8 sm:mt-7'>{children}</div>
        <Footer/>
        <div className='bg-gray-800 bg-opacity-90 py-2'>
          <div className='mx-auto 2xl:w-[1850px] w-full flex justify-center'>
            <div className='flex w-[78%] justify-between '>

            <div className='text-white opacity-40'>Copyright © {currentYear}  Hocaoğulları Turizm Tüm hakları saklıdır.</div>
          <div className='text-white opacity-65'>Kodlama ve Tasarım: Muhammet KUŞ</div>



            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Layout