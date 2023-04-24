import { Button } from "../../../Common/Utils/Button";

export const ThanksModal = () => {

  const returnHome = () => {
    document.querySelector('.thankyou').classList.remove("show");
    document.querySelector('body').classList.remove("overflow-hide");
  }
  return (
    <div className="thankyou invisible max_width_container flex justify-center text-center fixed w-screen h-screen overflow-auto top-0 bg-rosado items-center flex-col transition-all duration-500  opacity-0 z-50 ">
      <h2 className="mb-5">
        ENVÍO EXITOSO <br />
        GRACIAS POR PARTICIPAR
      </h2>

<div onClick={returnHome}>

      <Button styles="m-0 border hover:bg-rosado " text="Volver al inicio" />
</div>
    </div>
  );
};
