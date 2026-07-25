import { MailFilled, PhoneFilled, EnvironmentFilled, ClockCircleFilled } from '@ant-design/icons';
import IletisimFormu from '../components/IletisimComp/IletisimFormu';
import SayfaUstBilgi from '../components/SayfaUstBilgi/SayfaUstBilgi';

const contactCards = [
  {
    icon: <PhoneFilled className="text-white text-xl" />,
    label: 'Telefon',
    lines: [
      { href: 'tel:+902163969781', text: '0 216 396 97 81' },
      { href: 'tel:+905559751562', text: '0 555 975 15 62' },
    ]
  },
  {
    icon: <MailFilled className="text-white text-xl" />,
    label: 'E-Posta',
    lines: [
      { href: 'mailto:info@hocaogullariturizm.com.tr', text: 'info@hocaogullariturizm.com.tr' },
      { href: 'mailto:hocaogullariturizm@hotmail.com', text: 'hocaogullariturizm@hotmail.com' },
    ]
  },
  {
    icon: <EnvironmentFilled className="text-white text-xl" />,
    label: 'Adres',
    lines: [
      { text: 'Fevziçakmak mh. Cemal Gürsel cd. No:115/31, Kaynarca, Pendik / İstanbul' }
    ]
  },
  {
    icon: <ClockCircleFilled className="text-white text-xl" />,
    label: 'Çalışma Saatleri',
    lines: [
      { text: 'Pazartesi – Cumartesi: 08:00 – 18:00' },
      { text: 'Pazar: Kapalı' }
    ]
  },
];

const Iletisim = () => {
  return (
    <>
      <SayfaUstBilgi SayfaAdi="İLETİŞİM" />

      <section className="w-full py-16 bg-gray-50">
        <div className="page-container">
          {/* Contact cards row */}
          <div className="grid grid-cols-2 gap-6 mb-14">
            {contactCards.map((card) => (
              <div
                key={card.label}
                className="group bg-gradient-to-br from-white to-brand-50 border border-brand-100 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4 sm:mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center flex-shrink-0 shadow-md">
                    {card.icon}
                  </div>
                  <span className="text-sm sm:text-base font-bold text-brand-800 uppercase tracking-widest">{card.label}</span>
                </div>
                <div className="space-y-2">
                  {card.lines.map((line, i) =>
                    line.href ? (
                      <a key={i} href={line.href} className="block text-base sm:text-lg font-semibold text-gray-800 hover:text-brand-700 transition-colors">
                        {line.text}
                      </a>
                    ) : (
                      <span key={i} className="block text-base sm:text-lg text-gray-700 leading-relaxed font-medium">{line.text}</span>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-md">
              <IletisimFormu
                titleClass="text-brand-950"
                subtitleClass="text-gray-400"
                labelClass="text-gray-600"
                inputClass="border-gray-200 focus:border-brand-400 text-gray-800 bg-white"
                butonClass="bg-brand-800 text-white hover:bg-brand-900"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 min-h-[300px] sm:min-h-[420px]">
              <iframe
                className="w-full h-full min-h-[300px] sm:min-h-[420px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.7259097076694!2d29.257693084776587!3d40.87788889754635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc9dead420fb%3A0x80cc6a7a1751b95!2sFevzi%20%C3%87akmak%2C%20Cemal%20G%C3%BCrsel%20Cd.%20No%3A115%2C%2034899%20Pendik%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1704879225029!5m2!1str!2str"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hocaoğulları Turizm Konum"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Iletisim;
