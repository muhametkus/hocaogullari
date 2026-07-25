import { Link } from 'react-router-dom';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, ArrowRightOutlined } from '@ant-design/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-gray-300">
      <div className="h-1 bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600" />

      <div className="page-container py-12 sm:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-1 xl:grid-cols-4 gap-8 sm:gap-10">

          <div className="lg:col-span-1">
            <div className="mb-4">
              <img src="./img/hocaogullari-logo.png" alt="Hocaoğulları Turizm" className="h-12 w-auto object-contain brightness-0 invert opacity-90" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              1983'ten beri güvenli, dakik ve konforlu taşımacılık hizmeti sunuyoruz.
            </p>
            <Link
              to="/teklif-al"
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 text-sm font-medium transition-colors"
            >
              Teklif Alın <ArrowRightOutlined className="text-xs" />
            </Link>
          </div>

          <div>
            <h3 className="text-white font-bold text-xs tracking-[0.2em] uppercase mb-5">
              Hızlı Erişim
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Anasayfa', to: '/' },
                { label: 'Hakkımızda', to: '/hakkimizda' },
                { label: 'Hizmetlerimiz', to: '/hizmetlerimiz' },
                { label: 'İletişim', to: '/iletisim' },
                { label: 'Teklif Al', to: '/teklif-al' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-600 group-hover:bg-brand-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-xs tracking-[0.2em] uppercase mb-5">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-3">
              {['Personel Taşımacılığı', 'Öğrenci Taşımacılığı', 'Özel Taşımacılık'].map(s => (
                <li key={s}>
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-brand-600" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-xs tracking-[0.2em] uppercase mb-5">
              İletişim
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+902163969781" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <PhoneOutlined className="text-brand-500 mt-0.5 text-sm flex-shrink-0" />
                  <span className="text-sm">0 216 396 97 81</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@hocaogullariturizm.com.tr" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <MailOutlined className="text-brand-500 mt-0.5 text-sm flex-shrink-0" />
                  <span className="text-sm break-all">info@hocaogullariturizm.com.tr</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <EnvironmentOutlined className="text-brand-500 mt-0.5 text-sm flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  Fevziçakmak mh. Cemal Gürsel cd. No:115/31<br />
                  Kaynarca, Pendik / İstanbul
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="page-container py-4 flex flex-col sm:flex-col-reverse items-center justify-between gap-2">
          <span className="text-gray-500 text-xs">
            &copy; {currentYear} Hocaoğulları Turizm. Tüm hakları saklıdır.
          </span>
          <a href="https://muhammetkus.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-400 transition-colors text-xs">
            Kodlama &amp; Tasarım: Muhammet KUŞ
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
