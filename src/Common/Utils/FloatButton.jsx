import React from "react";

const FloatButton = () => {
  return (
    <a target="_blank" href="https://www.eticket.co/masinformacion.aspx?idevento=13948">
      <div
        className="group bg-rosado hover:bg-negro hover:text-rosado cursor-pointer hover:border-negro border
      rounded-[50%] z-50 fixed bottom-[5%] right-[5%] w-[80px] lg:w-[120px] lg:h-[120px] h-[80px] flex justify-center items-center"
      >
        <p className="group-hover:scale-[1.2] transition-all lg:text-[25px]">ENTRADAS</p>
      </div>
    </a>
  );
};

export default FloatButton;
