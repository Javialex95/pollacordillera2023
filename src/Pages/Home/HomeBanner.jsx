export const HomeBanner = () => {
  return (
    <section className="bg-verde  pt-5 relative z-10 overflow-hidden lg:overflow-visible">
      <div className="max_width_container">
        <div className="lg:h-[250px] ">
          <img  className="lg:h-[250px] object-contain m-auto block" src="/assets/logo_cordillera_pink.png" alt="" />
        </div>
        <div className="w-[110vw] -translate-x-[10vw] m-auto mt-5 lg:mt-0 lg:w-full lg:-translate-x-[0] lg:translate-y-10  ">
          <img  className="block" src="/assets/date.png" alt="" />
        </div>
      </div>

    </section>
  );
};
