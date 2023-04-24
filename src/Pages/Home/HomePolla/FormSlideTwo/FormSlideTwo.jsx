import { FormInputTwo } from "./FormInputTwo";
import slideInputTwo from "../info/slideInputTwo.json";
import { TitleWithDescription } from "./TitleWithDescription";

export const FormSlideTwo = ({ onChange }) => {
  return (
    <section>
      <TitleWithDescription
        title="Headlinears"
        description="Intenta adivinar dos de los artistas principales que irán a Cordillera."
      />

      <div className="flex flex-wrap justify-between pb-10 lg:pb-12">
        {slideInputTwo.map((input, i) => {
          return i < 2 && <FormInputTwo {...input} onChange={onChange} />;
        })}
      </div>

      <TitleWithDescription
        title="Artistas Latinoamericanos"
        description="Intenta adivinar cuatro de los artistas latinoamericanos que irán a cordillera, recuerda que en este no se incluyen artistas nacionales."
      />

      <div className="flex flex-wrap justify-between pb-10 lg:pb-12">
        {slideInputTwo.map((input, i) => {
          return (
            i > 1 && i < 6 && <FormInputTwo {...input} onChange={onChange} />
          );
        })}
      </div>

      <TitleWithDescription
        title="Artistas nacionales"
        description="Intenta adivinar cuatro de los artistas nacionales que irán a Cordillera."
      />

      <div className="flex flex-wrap justify-between pb-10 lg:pb-12">
        {slideInputTwo.map((input, i) => {
          return (
            i > 5 && i < 10 && <FormInputTwo {...input} onChange={onChange} />
          );
        })}
      </div>
    </section>
  );
};
