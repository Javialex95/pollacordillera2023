import React from "react";

const Poster = () => {
  return (
    <div className="bg-naranja relative z-20">
      <div className="max_width_container">
        <h1 className="text-center text-amarillo pt-10 lg:pt-20 cartelera ">
          CARTEL OFICIAL
        </h1>

        <img
          loading="lazy"
          className="w-full my-5 lg:my-20 "
          src="/assets/cartelera.png"
          alt="cartelera"
        />

        <img
          loading="lazy"
          className="w-full pb-20"
          src="/assets/encuentro.png"
          alt="encuentro"
        />
      </div>
      <img
        loading="lazy"
        className="w-full"
        src="/assets/ola_verde.png"
        alt="ola_verde"
      />
    </div>
  );
};

export default Poster;
