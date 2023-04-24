import social from "./socialMedia.json";

export const Footer = () => {
  return (
    <section className="bg-azul">
      <div className="max_width_container text-center pb-5 ">
        <div className="lg:flex justify-between">
          <a
            href=""
            className="pb-5 block font-frente lg:text-left lg:w-2/5 lg:text-2xl "
          >
            @CORDILLERAFESTival
          </a>

          <div className="flex justify-between underline pb-10 lg:w-2/5 ">
            {social.map((media) => (
              <a
                target="_blank"
                className="lg:hover:text-naranja ga4-call_to_action-contacto-rrss"
                href={media.url}
              >
                {media.name}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p>PULEP: JOI982</p>
        </div>
        <div className="flex justify-between items-end">
          <p className="font-frente">cordillera Festival 2023 ®</p>
          <a
            href="tag-home-politicaprivacidad"
            target="_blank"
            className="underline font-frente"
          >
            terminos y condiciones
          </a>
        </div>
      </div>
    </section>
  );
};
