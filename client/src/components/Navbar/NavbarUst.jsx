import { MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { NavbarContext } from "../../context/NavbarProvider";

const NavbarUst = () => {
  const { mobilMenu } = useContext(NavbarContext);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`w-full bg-brand-950 text-white fixed top-0 z-40 transition-transform duration-300 ${mobilMenu ? "sm:-translate-y-full" : show ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="page-container flex items-center justify-between sm:justify-center py-2">
        <div className="flex items-center gap-x-6 sm:gap-x-3">
          <a
            href="mailto:info@hocaogullariturizm.com.tr"
            className="flex items-center gap-x-2 text-gray-300 hover:text-white transition-colors text-xs"
          >
            <MailOutlined className="text-brand-400 text-xs" />
            <span className="mailUstKisim">info@hocaogullariturizm.com.tr</span>
          </a>

          <span className="w-px h-3 bg-white/20 sm:hidden" />

          <a
            href="tel:+902163969781"
            className="flex items-center gap-x-2 text-gray-300 hover:text-white transition-colors text-xs"
          >
            <PhoneOutlined className="text-brand-400 text-xs" />
            <span>0 216 396 97 81</span>
          </a>
        </div>

        <div className="text-gray-500 text-xs sm:hidden">
          Pazartesi – Cumartesi: 08:00 – 18:00
        </div>
      </div>
    </div>
  )
}

export default NavbarUst
