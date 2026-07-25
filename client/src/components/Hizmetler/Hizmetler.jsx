import { CheckOutlined } from '@ant-design/icons';

const services = [
  {
    title: "Personel Taşımacılığı",
    description: "Konforlu araçlarımız ve güler yüzlü profesyonel kadromuzla kurumunuzun personel taşımacılığını üstleniyoruz.",
    image: "./img/teamwork.png",
    features: ["Konforlu Araçlar", "Güler Yüzlü Hizmet", "Dakik Ulaşım"],
    accent: "from-blue-600 to-brand-900"
  },
  {
    title: "Öğrenci Taşımacılığı",
    description: "Geleceğimizi emanet ettiğimiz öğrencilerimizi güvenli ve konforlu biçimde okullarına ulaştırıyoruz.",
    image: "./img/graduation.png",
    features: ["Güvenli Sürüş", "Güler Yüzlü Hizmet", "Deneyimli Şoförler"],
    accent: "from-brand-700 to-brand-950"
  },
  {
    title: "Özel Taşımacılık",
    description: "Düğün, toplantı ve gezi gibi özel organizasyonlarınız için esnek ve güvenilir taşımacılık.",
    image: "./img/tour.png",
    features: ["Özel Organizasyon", "Esnek Çözümler", "7/24 Destek"],
    accent: "from-slate-700 to-brand-900"
  }
];

const Hizmetler = () => {
  return (
    <div className="w-full">
      <div className="page-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className={`bg-gradient-to-br ${service.accent} p-4 sm:p-6 flex items-center gap-3 sm:gap-4`}>
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                  <img className="w-6 h-6 sm:w-9 sm:h-9 object-contain" src={service.image} alt={service.title} />
                </div>
                <div>
                  <span className="text-white/60 text-xs font-semibold tracking-widest uppercase">
                    0{idx + 1}
                  </span>
                  <h3 className="text-white text-sm sm:text-lg font-bold leading-tight mt-0.5">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                        <CheckOutlined className="text-brand-600 text-[10px]" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hizmetler;
