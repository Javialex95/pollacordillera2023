import { Form } from "./HomePolla/Form";

export const HomePolla = () => {
  return (
    <section className="bg-azul h-screen overflow-hidden">
      <div className="w-[110vw] translate-x-[-3vw] max-w-[1500px] m-auto lg:translate-x-0 lg:w-full ">
        <img className="m-auto block" src="/assets/mountains.png" alt="" />
      </div>
      <Form />
    </section>
  );
};
