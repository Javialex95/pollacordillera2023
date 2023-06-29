import React from "react";
import { Button } from "../../../Common/Utils/Button";

const Tickets = () => {
  return (
    <div className="bg-rosado lg:pt-40 ">
      <div className="max_width_container">
        <div className="lg:flex justify-between items-center gap-20 lg:mb-32">
          <div className="relative min-h-[200px]  lg:w-[50%] ">
            <div className="anim_text"></div>
          </div>

          {/* <img
            className="w-full lg:w-[50%]"
            src="/assets/sudamerican.png"
            alt="letrero"
          /> */}
          <p className=" m-auto text-center mt-5 lg:w-[40%] lg:text-3xl lg:text-left">
            ¡Ya somos miles! Sudamerican Rockers, la etapa que te permite asegurar tus
            entradas al festival más baratas antes de conocer el cartel oficial. Nos
            encontramos en segunda etapa, ya puedes adquirir la tuya con cualquier medio
            de pago.
          </p>
        </div>

        <a
          target="_blank"
          href="https://www.eticket.co/eventos.aspx?idartista=580"
        >
          <Button styles="bg-azul mt-5 mb-10" text="Compra tus entradas aquí" />
        </a>
      </div>
      <img className="w-[100vw] pt-10" src="/assets/ola_blue.png" alt="ola azul" />
    </div>
  );
};

export default Tickets;
