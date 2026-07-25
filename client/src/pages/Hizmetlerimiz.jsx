import SayfaUstBilgi from '../components/SayfaUstBilgi/SayfaUstBilgi';
import Hizmetler from '../components/Hizmetler/Hizmetler';
import Gorseller from '../components/Gorseller/Gorseller';
import IletisimComp from '../components/IletisimComp/IletisimComp';

const Hizmetlerimiz = () => {
  return (
    <>
      <SayfaUstBilgi SayfaAdi="HİZMETLERİMİZ" />

      <section className="w-full py-16 bg-white">
        <div className="page-container">
          <div className="section-heading">
            <span className="section-label">Ne Sunuyoruz?</span>
            <h2 className="section-title mt-2">Sunduğumuz Hizmetler</h2>
            <p className="section-subtitle">
              Kurumsal ve bireysel müşterilerimize yönelik güvenilir, konforlu taşımacılık çözümleri.
            </p>
            <div className="accent-line" />
          </div>
        </div>
        <Hizmetler />
      </section>

      <section className="w-full py-16 bg-gray-50">
        <div className="page-container">
          <div className="section-heading">
            <span className="section-label">Galeri</span>
            <h2 className="section-title mt-2">Araç Görselleri</h2>
            <div className="accent-line" />
          </div>
        </div>
        <Gorseller />
      </section>

      <IletisimComp />
    </>
  );
};

export default Hizmetlerimiz;
