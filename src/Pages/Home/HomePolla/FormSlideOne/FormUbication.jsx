export const FormUbication = ({ onChange, setBogota, bogota }) => {
  const showX = (item) => {
    const yes = document.querySelector(".yes-item");
    const no = document.querySelector(".no-item");

    if (item === "yes") {
      yes.classList.add("opacity-1");
      no.classList.remove("opacity-1");
      setBogota("yes");
    } else {
      yes.classList.remove("opacity-1");
      no.classList.add("opacity-1");
      setBogota("no");
    }
  };
  return (
    <>
      <div className="mb-4 flex items-end lg:w-[45%] justify-between ">
        <label className=" ">¿Vives en Bogotá?</label>
        <div className="flex w-2/4 justify-between items-end">
          <p>Sí</p>

          <div
            onClick={() => showX("yes")}
            className="bg-crema border w-[30px] h-[30px] p-2 flex items-center justify-center "
          >
            <img
              className="yes-item opacity-0"
              src="/assets/x.png"
              alt="equis"
            />
          </div>
          <p>No</p>
          <div
            onClick={() => showX("no")}
            className="bg-crema border w-[30px] h-[30px] p-2 flex items-center justify-center"
          >
            <img
              className="no-item opacity-0"
              src="/assets/x.png"
              alt="equis"
            />
          </div>
        </div>
      </div>

      {bogota === "yes" && (
        <div className="mb-4 flex items-end lg:w-[45%] ">
          <label className=" ">¿En qué localidad vives?</label>
          <input
            className="font-frente flex-1 bg-transparent border-b-[1px] px-2  "
            type="text"
            name="localidad"
            onChange={onChange}
          />
        </div>
      )}

      {bogota === "no" && (
        <>
          <div className="mb-4 flex items-end lg:w-[45%] ">
            <label className=" ">¿En que ciudad vives?</label>
            <input
              className="font-frente flex-1 bg-transparent border-b-[1px] px-2  "
              type="text"
              name="ciudad"
              onChange={onChange}
            />
          </div>

          <div className="mb-4 flex items-end lg:w-[45%] ">
            <label className=" ">¿En que país vives?</label>
            <input
              className="font-frente flex-1 bg-transparent border-b-[1px] px-2  "
              type="text"
              name="noColombia"
              onChange={onChange}
            />
          </div>
        </>
      )}
    </>
  );
};
