import Slider from '../components/Slider/Slider';
import Hizmetler from '../components/Hizmetler/Hizmetler';
import IletisimComp from '../components/IletisimComp/IletisimComp';
import Gorseller from '../components/Gorseller/Gorseller';
import AracFilo from '../components/AracFilo/AracFilo';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined, SafetyCertificateOutlined, ClockCircleOutlined, SmileOutlined } from '@ant-design/icons';

const stats = [
  { value: '40+', label: 'Yıllık Deneyim' },
  { value: '500+', label: 'Mutlu Müşteri' },
  { value: '50+', label: 'Araçlık Filo' },
  { value: '7/24', label: 'Destek Hattı' },
];

const Anasayfa = () => {
  return (
    <>
      <Slider />

      {/* Stats Bar */}
      <div className="w-full bg-brand-900 py-6">
        <div className="page-container">
          <div className="grid grid-cols-4 sm:grid-cols-2 gap-6 sm:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:py-2">
                <div className="text-3xl sm:text-2xl font-bold text-white leading-none">{stat.value}</div>
                <div className="text-brand-300 text-xs font-medium mt-1 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Araç Filomuz */}
      <section className="w-full py-16 bg-white">
        <div className="page-container">
          <div className="section-heading">
            <span className="section-label">Filosumuz</span>
            <h2 className="section-title">Araç Filomuz</h2>
            <p className="section-subtitle">
              Modern ve konforlu araç filomuzla ihtiyacınıza en uygun çözümü sunuyoruz.
            </p>
            <div className="accent-line" />
          </div>
        </div>
        <AracFilo />
      </section>

      {/* Hizmetlerimiz */}
      <section className="w-full py-16 bg-gray-50">
        <div className="page-container">
          <div className="section-heading">
            <span className="section-label">Ne Yapıyoruz?</span>
            <h2 className="section-title">Hizmetlerimiz</h2>
            <p className="section-subtitle">
              Kurumsal ve bireysel müşterilerimize yönelik kapsamlı taşımacılık çözümleri.
            </p>
            <div className="accent-line" />
          </div>
        </div>
        <Hizmetler />
        <div className="page-container mt-10 flex justify-start">
          <Link
            to="/hizmetlerimiz"
            className="btn-primary"
          >
            Tüm Hizmetler <ArrowRightOutlined className="text-xs" />
          </Link>
        </div>
      </section>

      {/* Neden Biz — Inline strip */}
      <section className="w-full py-14 bg-white border-y border-gray-100">
        <div className="page-container">
          <div className="grid grid-cols-3 sm:grid-cols-1 gap-8">
            {[
              { icon: <SafetyCertificateOutlined className="text-2xl text-brand-600" />, title: 'Güvenli Yolculuk', desc: 'Tüm araçlarımız periyodik bakımdan geçmekte, sigortalı ve denetimli şekilde hizmet vermektedir.' },
              { icon: <ClockCircleOutlined className="text-2xl text-brand-600" />, title: 'Dakik Hizmet', desc: 'Zamanında varış garantisi ile kurumsal müşterilerimizin operasyonlarını aksamadan yürütüyoruz.' },
              { icon: <SmileOutlined className="text-2xl text-brand-600" />, title: '40+ Yıl Deneyim', desc: '1983\'ten beri binlerce müşteriye güvenilir hizmet. Deneyim ve güven bizi farklı kılıyor.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-950 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Görseller */}
      <section className="w-full py-16 bg-gray-50">
        <div className="page-container">
          <div className="section-heading">
            <span className="section-label">Galeri</span>
            <h2 className="section-title">Araç Görselleri</h2>
            <div className="accent-line" />
          </div>
        </div>
        <Gorseller />
      </section>

      {/* İletişim CTA */}
      <IletisimComp />
    </>
  );
};

export default Anasayfa;
