import { FormInput } from "./FormInput";
import slideInputOne from "../info/slideInputOne.json";
import { FormUbication } from "./FormUbication";

export const FormSlideOne = ({ onChange, formState, setBogota, bogota }) => {
  return (
    <section className="pb-10">
      <h3 className="pb-5 block">Cuéntanos sobre ti</h3>

      <div className="lg:flex justify-between flex-wrap">
        {slideInputOne.map((input, i) => (
          <FormInput {...input} onChange={onChange} i={i} formState={formState} />
        ))}

        <FormUbication onChange={onChange} setBogota={setBogota} bogota={bogota} />
        <div className="mb-4 flex lg:w-[45%] ">
          <label className=" ">Mi género es:</label>
          <select
            className="bg-transparentfont-frente flex-1 bg-transparent border-b-[1px] px-2"
            name="genero"
            onChange={onChange}
            id=""
          >
            <option value=""></option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="No Binario">No Binario</option>
            <option value="Prefiero no contestar">Prefiero no contestar</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
      </div>
    </section>
  );
};
