import { MailOutlined, PhoneOutlined } from '@ant-design/icons'
import React, { useContext } from 'react'
import { NavbarContext } from "../../context/NavbarProvider"; // NavbarProvider'ın bulunduğu dosya yolu

const NavbarUst = () => {
  const { mobilMenu, isVisible} = useContext(NavbarContext);

  return (
    <div className={`w-full bg-gray-600 flex items-center fixed top-0 z-30 ${mobilMenu?"sm:hidden":"flex"} ${isVisible?"":"sm:hidden"}`}>
            <div className={`2xl:w-[1536px] w-[85%] md:w-[95%] sm:w-[97%] mx-auto flex items-center gap-x-10 sm:gap-x-2 sm:justify-between text-white sm:text-sm py-1  `}>
                <div className='flex items-center gap-x-1 mailUstKisim'><MailOutlined /><a href="mailto:hocaogullariturizm@hotmail.com">info@hocaogullariturizm.com.tr</a></div>
                <div className='flex items-center gap-x-1'><PhoneOutlined /><a href="tel:+902163969781">0 216 396 97 81</a></div>
            </div>
    </div>
  )
}

export default NavbarUst