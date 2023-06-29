import { Button } from "../../../Common/Utils/Button";
import { Video } from "../../../Common/Utils/Video";
import { toggleModal } from "../../../Helpers/toggleModal";
import { Form } from "./Form";
import Tickets from "./Tickets";

export const HomePolla = () => {
  return (
    <>
      <section className="bg-rosado overflow-hidden pb-20  lg:pb-40 relative ">
        {/* <Tickets /> */}
        <div className="max_width_container">
          <img
            className="w-[90%] m-auto"
            src="/assets/latinoamerica_arde.png"
            alt="latinoamerica_arde"
          />

          <h3 className="text-center mt-3 lg:mt-20 text-[15px] lg:text-[30px]">
            gracias por participar en la polla cordillera. las inscripciones están
            cerradas.
          </h3>

          <h2 className="text-center text-[20px] lg:text-[40px] lg:mt-5">
            pronto anunciaremos a los ganadores
          </h2>
        </div>
      </section>
      <Form />
    </>
  );
};
