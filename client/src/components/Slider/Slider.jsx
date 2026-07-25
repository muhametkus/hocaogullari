import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import "./Slider.css";

const slides = [
  {
    // img: "./img/servisaraclari2.jpg",
    img: "./img/hocaogullari1.png",
    tag: "Güvenli · Dakik · Konforlu",
    title: "Personel\nTaşımacılığı",
    description: "İşletmeniz için güvenilir ve profesyonel ulaşım çözümleri. 1983'ten beri kesintisiz hizmet.",
    cta: "Teklif Alın",
    ctaLink: "/teklif-al",
    secondary: "Hizmetlerimiz",
    secondaryLink: "/hizmetlerimiz"
  },
  {
    img: "./img/servisaraclari.jpg",
    tag: "Güvenlik Önce Gelir",
    title: "Öğrenci\nTaşımacılığı",
    description: "Geleceğimizi emanet ettiğimiz öğrencileri güvenle okullarına ulaştırıyoruz.",
    cta: "Detaylı Bilgi",
    ctaLink: "/hizmetlerimiz",
    secondary: "İletişim",
    secondaryLink: "/iletisim"
  },
  {
    img: "./img/servis-otobus.jpg",
    tag: "Her Organizasyonda Yanınızda",
    title: "Özel\nTaşımacılık",
    description: "Düğün, gezi, toplantı ve özel etkinlikleriniz için esnek taşımacılık çözümleri.",
    cta: "Bize Ulaşın",
    ctaLink: "/iletisim",
    secondary: "Hizmetlerimiz",
    secondaryLink: "/hizmetlerimiz"
  }
];

const Slider = () => {
  return (
    <Carousel effect="fade" autoplay autoplaySpeed={5500} dots={{ className: 'custom-dots' }}>
      {slides.map((slide, index) => (
        <div key={index} className="relative">
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 z-10" style={{
            background: 'linear-gradient(90deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.55) 55%, rgba(15,23,42,0.2) 100%)'
          }} />

          {/* Left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-600 z-20" />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="page-container">
              <div className="max-w-xl">
                {/* Tag */}
                <div className="slide-text-1 inline-flex items-center gap-2 mb-5">
                  <span className="w-6 h-px bg-brand-400" />
                  <span className="text-brand-300 text-xs font-semibold tracking-[0.2em] uppercase">
                    {slide.tag}
                  </span>
                </div>

                {/* Title */}
                <h2 className="slide-text-2 text-white font-bold leading-tight mb-5"
                  style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', whiteSpace: 'pre-line' }}
                >
                  {slide.title}
                </h2>

                {/* Description */}
                <p className="slide-text-3 text-gray-300 text-base leading-relaxed mb-8 max-w-md">
                  {slide.description}
                </p>

                {/* CTAs */}
                <div className="slide-text-4 flex items-center gap-4 sm:flex-col sm:items-start">
                  <Link
                    to={slide.ctaLink}
                    className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-white text-sm font-semibold px-7 py-3.5 rounded transition-all duration-200"
                  >
                    {slide.cta}
                    <ArrowRightOutlined className="text-xs" />
                  </Link>
                  <Link
                    to={slide.secondaryLink}
                    className="inline-flex items-center gap-2 border border-white/40 hover:border-white/70 text-white/80 hover:text-white text-sm font-medium px-7 py-3.5 rounded transition-all duration-200"
                  >
                    {slide.secondary}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Slide number */}
          <div className="absolute bottom-8 right-8 z-20 sm:hidden">
            <span className="text-white/40 text-5xl font-bold leading-none">0{index + 1}</span>
          </div>

          <img
            className="w-full object-cover"
            style={{ height: 'clamp(480px, 75vh, 720px)' }}
            src={slide.img}
            alt={slide.title}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
