import { useContext, useEffect, useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { NavbarContext } from "../../context/NavbarProvider";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  let Links = [
    { name: "ANASAYFA", link: "/" },
    { name: "HAKKIMIZDA", link: "/hakkimizda" },
    { name: "HİZMETLERİMİZ", link: "/hizmetlerimiz" },
    { name: "İLETİŞİM", link: "/iletisim" },
  ];

  const { mobilMenu, setMobilMenu, mobilMenuDegistir } = useContext(NavbarContext);
  const [genislik, setGenislik] = useState(window.innerWidth);
  const [scrolled, setScrolled] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);

  useEffect(() => {
    const genislikDegisikligi = () => setGenislik(window.innerWidth);
    window.addEventListener('resize', genislikDegisikligi);
    return () => window.removeEventListener('resize', genislikDegisikligi);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setTopBarVisible(window.scrollY < 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobilMenu && genislik < 720) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [mobilMenu, genislik]);

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`w-full bg-white flex items-center fixed z-30 transition-all duration-300
        ${topBarVisible ? "top-[34px] sm:top-0" : "top-0"}
        ${scrolled ? "shadow-md border-b border-gray-100" : "border-b border-gray-200"}
      `}
    >
      <div className="page-container h-[70px] flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img src="./img/hocaogullari-logo.png" alt="Hocaoğulları Turizm" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="flex items-center gap-x-1">
          <ul
            className={`
              flex items-center gap-x-1
              sm:flex-col sm:fixed sm:top-0 sm:left-0 sm:w-full sm:h-screen sm:bg-white sm:z-50
              sm:justify-center sm:gap-y-6 sm:transition-all sm:duration-300
              ${mobilMenu ? "sm:opacity-100 sm:pointer-events-auto" : "sm:opacity-0 sm:pointer-events-none"}
            `}
          >
            {mobilMenu && genislik < 720 && (
              <button
                onClick={mobilMenuDegistir}
                className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <CloseOutlined />
              </button>
            )}

            {/* Mobile logo */}
            {mobilMenu && genislik < 720 && (
              <div className="absolute top-5 left-5">
                <img src="./img/hocaogullari-logo.png" alt="Hocaoğulları Turizm" className="h-10 w-auto object-contain" />
              </div>
            )}

            {Links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.link}
                  className={`
                    relative px-4 py-2 text-xs font-semibold tracking-wider transition-colors duration-200 sm:text-lg
                    ${isActive(link.link)
                      ? "text-brand-800 sm:text-brand-800"
                      : "text-gray-600 hover:text-brand-800 sm:text-gray-700 hover:sm:text-brand-800"
                    }
                  `}
                  onClick={() => setMobilMenu(false)}
                >
                  {link.name}
                  {isActive(link.link) && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-700 rounded-full sm:hidden" />
                  )}
                </Link>
              </li>
            ))}

            <li className="ml-3 sm:ml-0 sm:mt-4">
              <Link
                to="/teklif-al"
                className="btn-primary sm:btn-primary text-xs sm:text-base"
                onClick={() => setMobilMenu(false)}
              >
                TEKLİF AL
              </Link>
            </li>
          </ul>

          <button
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded border border-gray-200 text-brand-800 ml-2"
            onClick={mobilMenuDegistir}
          >
            <MenuOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
