import { Button } from "../../../Common/Utils/Button";
import { Video } from "../../../Common/Utils/Video";
import { toggleModal } from "../../../Helpers/toggleModal";
import { Form } from "./Form";
import Tickets from "./Tickets";

export const HomePolla = () => {
  return (
    <>
      <section className="bg-azul overflow-hidden pb-20  lg:pb-40 relative ">
        <Tickets />
        <div className="max_width_container text-center">
          <div className="pb-10 max-w-[700px] m-auto ">
            <h2 className="pb-5 text-rosado lg:text-8xl ">Polla cordillera</h2>
            <p>
              De este lado de la Cordillera somos una sola voz al son de nuestras raíces y
              con la llegada de una nueva edición del Festival Cordillera queremos leer
              sus apuestas, aquellos artistas que para ustedes van a ser el alma y
              espíritu del Festival en este 2023.
            </p>
          </div>

          <div
            className="ga4-call_to_action-contacto-profecias"
            onClick={() => {
              toggleModal();
            }}
          >
            <Button styles="bg-rosado" text="¡Participa Aquí!" />
          </div>

          <div className="relative top-[60px] lg:top-[80px] ">
            <Video
              url_video="https://www.youtube.com/embed/7JuWuWBfWSE"
              portada_video="/assets/frame.jpg"
            />
          </div>
        </div>
      </section>
      <Form />
    </>
  );
};
