import IletisimFormu from './IletisimFormu';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';

const IletisimComp = () => {
  return (
    <section className="w-full bg-brand-950 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="page-container py-12 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-10 items-stretch">

          {/* ── Sol: Görsel üstte, iletişim bilgileri altta ── */}
          <div className="flex flex-col gap-5">

            {/* Görsel */}
            <div className="w-full rounded-xl overflow-hidden flex-shrink-0" style={{ maxHeight: '300px' }}>
              <img
                src="./img/iletisim-form.png"
                alt="İletişim"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Başlık */}
            <div>
              <span className="inline-flex items-center gap-2 text-brand-400 text-xs font-semibold tracking-widest uppercase mb-2">
                <span className="w-6 h-px bg-brand-400" />
                Bize Ulaşın
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                Hemen İletişime Geçin
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mt-2">
                Taşımacılık ihtiyaçlarınız için bize ulaşın. Sizin için özel çözüm üretelim.
              </p>
            </div>

            {/* Telefon & E-posta */}
            <div className="space-y-3">
              <a
                href="tel:+902163969781"
                className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-700/50 flex items-center justify-center flex-shrink-0">
                  <PhoneOutlined className="text-brand-300" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider">Telefon</div>
                  <div className="text-white font-semibold group-hover:text-brand-300 transition-colors">
                    0 216 396 97 81
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@hocaogullariturizm.com.tr"
                className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-700/50 flex items-center justify-center flex-shrink-0">
                  <MailOutlined className="text-brand-300" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider">E-Posta</div>
                  <div className="text-white font-semibold group-hover:text-brand-300 transition-colors text-sm">
                    info@hocaogullariturizm.com.tr
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* ── Sağ: Yalnızca Form ── */}
          <div className="bg-white rounded-xl p-8 shadow-2xl sm:p-6">
            <IletisimFormu
              butonClass="bg-brand-800 text-white hover:bg-brand-900 border-none"
              labelClass="text-gray-700"
              inputClass="border-gray-200 focus:border-brand-500 text-gray-800 bg-white"
              titleClass="text-brand-950"
              subtitleClass="text-gray-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default IletisimComp;
