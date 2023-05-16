import social from "./socialMedia.json";

export const Footer = () => {
  return (
    <section className="bg-naranja relative">
      <img
        className="absolute -top-5 w-full lg:-top-[60px]"
        src="/assets/ola_orange.png"
        alt="ola"
      />
      <div className="max_width_container text-center pb-5 relative ">
        <img className="w-full" src="/assets/sponsors.png" alt="sponsors" />

        <div className="lg:flex justify-between mt-10">
          <a
            href=""
            className="pb-5 block font-frente lg:text-left lg:w-2/5 lg:text-2xl text-white mt-5"
          >
            @CORDILLERAFESTival
          </a>

          <div className="flex justify-between underline pb-10 lg:w-2/5 ">
            {social.map((media) => (
              <a
                target="_blank"
                className="lg:hover:text-negro ga4-call_to_action-contacto-rrss text-white "
                href={media.url}
              >
                {media.name}
              </a>
            ))}
          </div>
        </div>
        <div>{/* <p>PULEP: JOI982</p> */}</div>
        <div className="flex justify-between items-end">
          <p className="font-frente">cordillera Festival 2023 ®</p>
          <a
            href="https://paramopresenta.com/politicas.pdf"
            target="_blank"
            className="underline font-frente tag-home-politicaprivacidad"
          >
            terminos y condiciones
          </a>
        </div>
      </div>
    </section>
  );
};
