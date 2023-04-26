import axios from "axios";
import { useState } from "react";
import { useForm } from "../../../Hooks/useForm";
import { FormSlideOne } from "./FormSlideOne/FormSlideOne";
import { FormSlideTwo } from "./FormSlideTwo/FormSlideTwo";
import { Button } from "../../../Common/Utils/Button";
import { validate } from "../../../Helpers/validateForm";
import { toggleModal } from "../../../Helpers/toggleModal";
import formInfo from "./info/formInfo.json";
import { TYC } from "./TYC";

export const Form = () => {
  const { formState, onChange, onResetForm } = useForm(formInfo);
  const [buttonText, setButtonText] = useState("Enviar");
  const [bogota, setBogota] = useState("");
  const [ytc, setYtc] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const url = "https://polla-cordillera.herokuapp.com/api/users/save-user";

    if (validate(formState, bogota, ytc)) {
    } else {
      setButtonText("Enviando");
      axios
        .post(url, formState)
        .then(function (response) {
          if (response.data.status === 403) {
            document.querySelector(".email-error").classList.add("d-block");
            setTimeout(() => {
              document
                .querySelector(".email-error")
                .classList.remove("d-block");
            }, 3000);
            setButtonText("Enviar");
          }

          if (response.data.status === 200) {
            document.querySelector(".thankyou").classList.add("show");
            setTimeout(() => {
              document.querySelector(".form").classList.remove("show");
              onResetForm(formInfo);
            }, 500);

            setButtonText("Enviado");

            setTimeout(() => {
              setButtonText("Enviar");
            }, 2000);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="form fixed w-screen  h-screen overflow-auto top-0 bg-rosado pb-40 transition-all duration-500 opacity-0 invisible z-20 "
    >
      <div className="max_width_container max-w-[800px] m-auto relative ">
        <div
          onClick={toggleModal}
          className="absolute top-5 w-[20px] right-0 cursor-pointer "
        >
          <img src="/assets/x.png" alt="equis" />
        </div>
        <div className="pt-20 max-w-[80%] m-auto ">
          <h2 className="pb-2 text-center">polla CORDILLERA</h2>
          <p className="text-center mb-8 lg:mb-12">
            Completa el siguiente formulario, llenando las casillas
            correspondientes con los artistas que crees pueden ser parte de la
            nueva edición del festival y podrás llevarte un Combo VIP para los
            dos días del Festival Cordillera.
          </p>
        </div>
        <div className="">
          <FormSlideOne
            onChange={onChange}
            formState={formState}
            setBogota={setBogota}
            bogota={bogota}
          />
          <FormSlideTwo onChange={onChange} formState={formState} />
        </div>

        <TYC ytc={ytc} setYtc={setYtc} />

        <p className="error-items pb-4 text-center  text-rojo hidden">
          Debes llenar todos los campos para participar
        </p>

        <p className="pb-4 email-error text-center text-rojo  hidden">
          El email ya está registrado, inténtalo de nuevo.
        </p>

        <div onClick={onSubmit}>
          <Button styles="bg-naranja text-crema " text={buttonText} />
        </div>
      </div>
    </form>
  );
};
