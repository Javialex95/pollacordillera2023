import Media from "react-media";
import { Link } from "react-scroll";
export const HomeBanner = () => {
  return (
    <section className="bg-rosado ">
      <div className="max_width_container">
        <div className="relative">
          <img
            className="w-full top-5  relative z-40"
            src="/assets/logo_montana.png"
            alt="logo"
          />

          <Media query="(max-width:1000px)">
            {(resolution) => {
              return resolution ? (
                ""
              ) : (
                <Link
                  activeClass="active"
                  to="cartelera"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <div className=" group rounded-[50%] w-[150px] h-[150px] z-50 bg-amarillo border absolute -bottom-[20px] right-[45%] text-[25px] font-bold hover:bg-negro hover:text-amarillo cursor-pointer hover:border-negro flex justify-center items-center ">
                    <button className="group-hover:scale-[1.2]  transition-all">
                      VER CARTEL OFICIAL
                    </button>
                  </div>
                </Link>
              );
            }}
          </Media>
        </div>
      </div>
      <div className="bg-naranja absolute -bottom-[20%] w-full h-[200px] z-0"> </div>
    </section>
  );
};
