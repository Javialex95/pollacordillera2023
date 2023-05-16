import Media from "react-media";

export const HomeBanner = () => {
  return (
    <section className="bg-naranja  pt-5 relative z-10 overflow-hidden lg:overflow-visible pb-[200px] lg:pb-[500px]">
      <div className="max_width_container">
        <div className="lg:h-[250px] ">
          <Media query="(max-width:767px)">
            {(resolution) => {
              return resolution ? (
                <img
                  className="lg:h-[250px] object-contain m-auto block"
                  src="/assets/logo_movil.png"
                  alt=""
                />
              ) : (
                <img
                  className="lg:h-[250px] object-contain m-auto block"
                  src="/assets/logo_cordillera_pink.png"
                  alt=""
                />
              );
            }}
          </Media>
        </div>
      </div>
      <div className=" relative w-[110vw] -translate-x-[10vw] m-auto mt-20 lg:mt-0 lg:w-full lg:-translate-x-[0] lg:translate-y-10  ">
        <div className=" anim_banner absolute top-[90px] lg:top-[260px] z-0"></div>
        {/* <img className="w-[100%]" src="/assets/date.png" alt="" /> */}
      </div>
    </section>
  );
};
