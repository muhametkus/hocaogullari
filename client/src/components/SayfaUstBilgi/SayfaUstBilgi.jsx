const SayfaUstBilgi = (props) => {
  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: '200px' }}>
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('./img/servisaraclari3.jpg')` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-950/80" />
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-500" />

      {/* Content */}
      <div className="relative z-10 page-container py-16 sm:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-400 text-xs tracking-wider uppercase mb-4">
          <span>Anasayfa</span>
          <span className="text-gray-600">/</span>
          <span className="text-brand-400">{props.SayfaAdi}</span>
        </div>
        <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-white tracking-tight">
          {props.SayfaAdi}
        </h1>
        <div className="w-12 h-1 bg-brand-500 rounded-full mt-4" />
      </div>
    </div>
  );
};

export default SayfaUstBilgi;
