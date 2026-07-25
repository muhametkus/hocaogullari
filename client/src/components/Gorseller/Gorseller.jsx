import { Image } from 'antd';

const Gorseller = () => {
  let Galeri = [
    { resimLink: "./img/servisaraclari3.jpg", alt: "Araç Filosu" },
    { resimLink: "./img/servisaraclari2.jpg", alt: "Servis Araçları" },
    { resimLink: "./img/servisaraclari.jpg", alt: "Servis Araçları" },
    { resimLink: "./img/servis-otobus.jpg", alt: "Otobüs Filosu" },
    { resimLink: "./img/sprinters.jpg", alt: "Sprinter Araçlar" },
    { resimLink: "./img/servisaraclari2.jpg", alt: "Araç Galerisi" },
  ];

  return (
    <div className="w-full">
      <div className="page-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {Galeri.map((resim, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
                <Image
                  className="!w-full !h-full !object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  src={resim.resimLink}
                  alt={resim.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  preview={{
                    mask: (
                      <div className="flex flex-col items-center justify-center gap-1">
                        <span className="text-white text-sm font-medium">Görüntüle</span>
                      </div>
                    )
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gorseller;
