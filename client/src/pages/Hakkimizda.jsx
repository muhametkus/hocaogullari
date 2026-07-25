import SayfaUstBilgi from '../components/SayfaUstBilgi/SayfaUstBilgi';
import { SafetyCertificateOutlined, ClockCircleOutlined, SmileOutlined } from '@ant-design/icons';

const Hakkimizda = () => {
  return (
    <>
      <SayfaUstBilgi SayfaAdi="HAKKIMIZDA" />

      {/* Main section */}
      <section className="w-full py-16 bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <span className="section-label">Biz Kimiz?</span>
              <h2 className="section-title mt-2 mb-2">1983'ten Beri Güvenin Adı</h2>
              <div className="accent-line mb-8" />
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  Hocaoğulları Turizm olarak 1983 yılından bu yana personel ve öğrenci taşımacılığı alanında
                  hizmet vermekteyiz. Köklü geçmişimiz ve deneyimli kadromuzla İstanbul başta olmak üzere
                  birçok şehirde güvenilir taşımacılık çözümleri sunuyoruz.
                </p>
                <p>
                  Müşteri memnuniyetini her zaman ön planda tutarak, konforlu araçlarımız ve profesyonel
                  ekibimizle sizlere en iyi hizmeti sunmayı hedefliyoruz.
                </p>
                <p>
                  Güvenlik, dakiklik ve konfor üçgeninde şekillenen hizmet anlayışımızla, her geçen gün
                  büyüyen araç filomuz ve genişleyen hizmet ağımızla yolumuza devam ediyoruz.
                </p>
              </div>

              {/* Key stats row */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { value: '40+', label: 'Yıllık Deneyim' },
                  { value: '50+', label: 'Araçlık Filo' },
                  { value: '500+', label: 'Mutlu Müşteri' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="text-2xl font-bold text-brand-800">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-brand-100 rounded-lg z-0" />
              <img
                className="relative z-10 w-full rounded-lg shadow-lg object-cover"
                src="./img/servisaraclari.jpg"
                alt="Hocaoğulları Turizm Araç Filosu"
              />
              {/* Badge */}
              <div className="absolute -bottom-5 -right-5 z-20 bg-brand-800 text-white p-4 rounded-lg shadow-lg sm:hidden">
                <div className="text-2xl font-bold leading-none">40+</div>
                <div className="text-xs text-brand-200 mt-1 font-medium">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="w-full py-16 bg-gray-50">
        <div className="page-container">
          <div className="section-heading-centered">
            <span className="section-label">Farkımız</span>
            <h2 className="section-title mt-2">Neden Hocaoğulları?</h2>
            <div className="accent-line" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <SafetyCertificateOutlined className="text-3xl text-brand-600" />,
                num: '01',
                title: 'Güvenlik',
                desc: 'Tüm araçlarımız düzenli bakımdan geçmekte, sigortalı ve yetkili servis onaylı şekilde hizmet vermektedir.'
              },
              {
                icon: <SmileOutlined className="text-3xl text-brand-600" />,
                num: '02',
                title: 'Konfor',
                desc: 'Modern, klimalı ve ferah araçlarımızla yolcularımıza konforlu bir yolculuk deneyimi sunuyoruz.'
              },
              {
                icon: <ClockCircleOutlined className="text-3xl text-brand-600" />,
                num: '03',
                title: 'Dakiklik',
                desc: 'Zamanında kalkış ve varış garantisi. Operasyonunuzun kesintisiz devam etmesi için burdayız.'
              },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-lg border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 bg-brand-50 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-4xl font-bold text-gray-100">{item.num}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-950 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hakkimizda;
