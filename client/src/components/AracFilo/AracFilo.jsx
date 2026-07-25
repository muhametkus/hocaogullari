const AracFilo = () => {
  const FiloGaleri = [
    {
      title: "Mercedes-Benz Sprinter",
      capacity: "16 + 1 Kişilik",
      desc: "Konforlu personel servisi, klimalı, koltuk düzeni",
      badge: "En Popüler",
      link: "./img/sprinter-hocaoglu.png"
    },
    {
      title: "Mercedes-Benz Travego",
      capacity: "50 + 1 Kişilik",
      desc: "Şehirlerarası konforlu otobüs, tam donanımlı",
      badge: "Büyük Gruplar",
      link: "./img/trevego-hocaogullari.png"
    },
    {
      title: "Isuzu",
      capacity: "27 Kişilik",
      desc: "Geniş iç hacimli, konforlu orta boy araç",
      badge: "Orta Gruplar",
      link: "./img/isuzu-hocaogullari.png"
    }
  ];

  return (
    <div className="w-full">
      <div className="page-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {FiloGaleri.map((resim, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-gray-100">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={resim.link}
                  alt={resim.title}
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-brand-800 text-white text-xs font-semibold px-2.5 py-1 rounded">
                    {resim.badge}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-brand-950">{resim.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mt-0.5">{resim.desc}</p>
                  </div>
                  <span className="flex-shrink-0 bg-brand-50 text-brand-700 text-xs font-bold px-2 py-1.5 rounded text-center leading-tight">
                    {resim.capacity.split(' + ').join('\n+')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AracFilo;
