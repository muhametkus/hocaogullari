import IletisimComp from '../components/IletisimComp/IletisimComp';
import SayfaUstBilgi from '../components/SayfaUstBilgi/SayfaUstBilgi';
import { CheckCircleFilled } from '@ant-design/icons';

const benefits = [
  'Hızlı geri dönüş garantisi',
  'Size özel fiyat teklifi',
  'Esnek araç seçenekleri',
  'Deneyimli profesyonel ekip',
];

const TeklifAl = () => {
  return (
    <>
      <SayfaUstBilgi SayfaAdi="TEKLİF AL" />

      {/* Info strip */}
      <div className="w-full bg-white border-b border-gray-100 py-10">
        <div className="page-container">
          <div className="flex items-center justify-between gap-8 sm:flex-col sm:items-start">
            <div>
              <span className="section-label">Ücretsiz</span>
              <h2 className="section-title mt-1">Hemen Teklif Alın</h2>
              <p className="section-subtitle mt-2">
                Taşımacılık ihtiyacınızı belirtin, en kısa sürede özel teklifinizi hazırlayalım.
              </p>
            </div>
            <div className="flex flex-col gap-2 flex-shrink-0">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircleFilled className="text-brand-600 text-sm" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <IletisimComp />
    </>
  );
};

export default TeklifAl;
