import React, { useContext, useEffect, useState} from "react";
import {
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { NavbarContext } from "../../context/NavbarProvider"; // NavbarProvider'ın bulunduğu dosya yolu
import "./Navbar.css"
const Navbar = () => {

  let Links = [
    { name: "ANASAYFA", link: "/" },
    { name: "İLETİŞİM", link: "/iletisim" },
    { name: "HAKKIMIZDA", link: "/hakkimizda" },
    { name: "HİZMETLERİMİZ", link: "/hizmetlerimiz" },
    { name: "TEKLİF AL", link: "/teklif-al" },
  ];

  const { mobilMenu, setMobilMenu, mobilMenuDegistir,isVisible, setIsVisible } = useContext(NavbarContext);

  const [genislik, setGenislik] = useState(window.innerWidth);

  useEffect(() => {
    // Pencere boyutu değiştiğinde yeniden genişlik değerini al
    window.addEventListener('resize', genislikDegisikligi);
    
    // Temizlik fonksiyonu
    return () => {
      window.removeEventListener('resize', genislikDegisikligi);
    };
  }, []);
  // Genişlik değerini güncelleme
  const genislikDegisikligi = () => {
    setGenislik(window.innerWidth);
  };



  if (mobilMenu&&(genislik<720)) {
    document.body.style.overflow="hidden";  
  }
  else{
    document.body.style.overflow="auto";  

  }


  return (
    <div className={`w-full bg-blue-800 flex items-center fixed z-50  ${isVisible?"":"slideOutUp"} ${mobilMenu?"sm:top-0":"sm:flex"} shadow-2xl `}>
      <div className="h-[70px] 2xl:w-[1536px] w-[85%] md:w-[95%] sm:[95%] mx-auto flex justify-between items-center ">
        <div className={`logo-div font-light text-2xl ${mobilMenu?"sm:hidden":"sm:flex"} text-white`}>HOCAOĞULLARI TURİZM</div>
        <div className="flex items-center sm:justify-start sm:absolute sm:w-full z-40 sm:bg-black sm:bg-opacity-75 sm:left-0 sm:top-0">
        
          <ul className={`flex items-center gap-x-5 sm:flex-col sm:z-50 sm:py-5 sm:px-20 sm:bg-red-800 sm:h-screen  ${mobilMenu?"sm:flex ":"sm:hidden "} ${isVisible?"":"sm:mt-7"}`}>
            {Links.map((link) => (
              <li key={link.name} className="text-lg sm:text-xl md:text-base md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-white  sm:text-white hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            
          </ul>
          
        </div>
      </div>
      <div className={`hidden ${mobilMenu?"sm:hidden":"sm:flex"} `}>
        <button className="text-white text-2xl mr-5" onClick={mobilMenuDegistir}><MenuOutlined /></button>
      </div>
      <div className={`z-50 hidden ${mobilMenu?"sm:flex":"sm:hidden"} fixed right-0 ${isVisible?"":"top-14"}`}><button className="text-white text-3xl mr-5" onClick={mobilMenuDegistir}><CloseOutlined/></button></div>
    </div>
  );
};

export default Navbar;
