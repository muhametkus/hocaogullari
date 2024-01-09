import React from "react";

const IletisimFormu = (props) => {
  return (
    <div className="w-full flex flex-col gap-y-4">
        <h2 className="text-5xl font-light">İLETİŞİM FORMU</h2>
        <p className="">
          Formu Doldurarak ve Telefon Numaramız Üzerinden bize ulaşabilirsiniz
        </p>
        <div className="flex flex-col ">
          <label className="form-control w-full max-w-xs ">
            <div className="label">
              <span className={`label-text ${props.labelClass}`}>Ad ve Soyad:</span>
            </div>
            <input
              type="text"
              placeholder="Ad Soyad"
              className={`input input-bordered w-full max-w-xs ${props.inputClass}`}
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className={`label-text ${props.labelClass}`}>Telefon Numarası:</span>
            </div>
            <input
              type="text"
              placeholder="Telefon Numarası"
              className={`input input-bordered w-full max-w-xs ${props.inputClass}`}
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className={`label-text ${props.labelClass}`}>Mesajınız:</span>
            </div>
            <textarea className={`textarea textarea-bordered ${props.inputClass}`} placeholder="Mesajınız"></textarea>

          </label>

          <div className="w-full max-w-xs my-3 flex"><button className={`btn btn-outline mx-auto ${props.butonClass}`}>Gönder</button></div>

        </div>
      </div>
  );
};

export default IletisimFormu;
