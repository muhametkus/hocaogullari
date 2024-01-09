import { MailOutlined, PhoneOutlined } from '@ant-design/icons'
import React, { useContext } from 'react'
import { NavbarContext } from "../../context/NavbarProvider"; // NavbarProvider'ın bulunduğu dosya yolu

const NavbarUst = () => {
  const { mobilMenu} = useContext(NavbarContext);

  return (
    <div className={`w-full bg-gray-600 flex items-center fixed top-0 z-30 ${mobilMenu?"":"flex"}`}>
            <div className={`2xl:w-[1536px] w-[85%] md:w-[95%] sm:[95%] mx-auto flex items-center gap-x-10 sm:gap-x-5 text-white sm:text-sm py-1  `}>
                <div className='flex items-center gap-x-1'><MailOutlined /><a href="mailto:hocaogullariturizm@hotmail.com">Hocaogullariturizm@hotmail.com</a></div>
                <div className='flex items-center gap-x-1'><PhoneOutlined /><a href="tel:+902163969781">0 216 396 97 81</a></div>
            </div>
    </div>
  )
}

export default NavbarUst