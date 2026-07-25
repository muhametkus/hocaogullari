import { SendOutlined } from '@ant-design/icons';

const IletisimFormu = (props) => {
  return (
    <div className="w-full">
      <h2 className={`text-2xl font-bold mb-1 ${props.titleClass || 'text-brand-950'}`}>
        İletişim Formu
      </h2>
      <p className={`text-sm mb-6 ${props.subtitleClass || 'text-gray-500'}`}>
        Formu doldurarak en kısa sürede size dönüş yapıyoruz.
      </p>

      <div className="space-y-4">
        <div>
          <label className={`block text-xs font-semibold mb-1.5 uppercase tracking-wider ${props.labelClass}`}>
            Ad ve Soyad
          </label>
          <input
            type="text"
            placeholder="Örn: Ahmet Yılmaz"
            className={`w-full px-4 py-3 rounded border text-sm outline-none focus:ring-2 focus:ring-brand-200 transition-all ${props.inputClass}`}
          />
        </div>

        <div>
          <label className={`block text-xs font-semibold mb-1.5 uppercase tracking-wider ${props.labelClass}`}>
            Telefon Numarası
          </label>
          <input
            type="tel"
            placeholder="0 5__ ___ __ __"
            className={`w-full px-4 py-3 rounded border text-sm outline-none focus:ring-2 focus:ring-brand-200 transition-all ${props.inputClass}`}
          />
        </div>

        <div>
          <label className={`block text-xs font-semibold mb-1.5 uppercase tracking-wider ${props.labelClass}`}>
            Mesajınız
          </label>
          <textarea
            className={`w-full px-4 py-3 rounded border text-sm outline-none focus:ring-2 focus:ring-brand-200 transition-all resize-none h-28 ${props.inputClass}`}
            placeholder="Taşımacılık ihtiyacınızı kısaca açıklayın..."
          />
        </div>

        <button
          className={`w-full flex items-center justify-center gap-2 py-3.5 rounded text-sm font-semibold tracking-wide transition-all duration-200 ${props.butonClass}`}
        >
          <SendOutlined className="text-xs" />
          Mesajı Gönder
        </button>
      </div>
    </div>
  );
};

export default IletisimFormu;
