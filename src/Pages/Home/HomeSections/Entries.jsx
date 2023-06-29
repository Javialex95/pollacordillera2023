import React from "react";
import infoEntries from "./infoEntries.json";
import infoEntriesVip from "./infoEntriesVip.json";
const Entries = () => {
  return (
    <div className="bg-verde relative z-5 pt-10">
      <div className="max_width_container">
        <h4 className="text-amarillo text-center text-3xl lg:text-8xl font-frente">
          combos 2 días
        </h4>

        <div className=" lg:flex justify-evenly lg:mt-20">
          <div className="group">
            <h3 className="text-rosado text-center">Vip</h3>
            <div className="pb-10 pt-3">
              {infoEntriesVip.map((item, i) => (
                <div
                  key={i}
                  className="group flex justify-between border gap-x-5 lg:gap-x-20 relative py-2"
                >
                  <p className="pl-5">{item.stage}</p>
                  <div className="border-r-2 absolute left-[22%] lg:left-[22%] -top-3 lg:-top-5 bottom-0 w-1 h-[200%] "></div>
                  <p className="text-white pr-5">
                    {item.price} <span className="text-rosado">{item.span}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="group">
            <h3 className="text-amarillo text-center">general</h3>
            <div className="pb-8 pt-3">
              {infoEntries.map((item, i) => (
                <div
                  key={i}
                  className="group flex justify-between border gap-x-5 lg:gap-x-20 relative py-2"
                >
                  <p className="pl-5">{item.stage}</p>
                  <div className="border-r-2 absolute left-[22%] lg:left-[22%] -top-3 lg:-top-5 bottom-0 w-1 h-[200%] "></div>
                  <p className="text-white pr-5">
                    {item.price} <span className="text-amarillo">{item.span}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center pb-10">
          El precio en dólares se calcula a partir de la TRM del día.
        </p>

        <a
          target="_blank"
          href="https://www.eticket.co/eventos.aspx?idartista=580"
        >
          <div className=" bg-rosado lg:mt-10 cursor-pointer w-fit pb-2 font-frente px-5 py-1 m-auto duration-500 lg:text-xl lg:hover:text-2xl lg:hover:bg-negro  lg:hover:text-crema  flex justify-center md:px-12 ">
            <span>Compra tus entradas aquí</span>
          </div>
        </a>

        <div className="pb-10 lg:pb-20 "></div>
      </div>

      <img
        loading="lazy"
        className="relative bottom-0 w-full"
        src="/assets/ola_rosada.png"
        alt="ola_azul"
      />
    </div>
  );
};

export default Entries;
