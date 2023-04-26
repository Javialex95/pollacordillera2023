export const TYC = ({ ytc, setYtc }) => {
  const showX = () => {
    const yes = document.querySelector(".acepto-item");
    yes.classList.toggle("opacity-1");
    setYtc(!ytc);
  };

  return (
    <>
      <p className="tyc-text text-[10px] h-[200px] overflow-auto mb-5 ">
        Al ingresar y registrar sus datos, acepta y autoriza a SUEÑO ESTÉREO
        S.A.S. identificada con NIT No. 900.648.406-3, para que realice el
        tratamiento de sus Datos Personales en calidad de responsable, con la
        finalidad de A) Efectuar las gestiones pertinentes para el desarrollo
        del objeto social de la Compañía, B) Suministrar al Titular las
        novedades que con respecto a los productos y servicios ofrecidos, C)
        Gestionar trámites, solicitudes, quejas, reclamos, D) Conocer del
        Titular los hábitos de consumo, E) Contactar al Titular a través de
        medios electrónicos para promociones, publicidad y cupones de descuentos
        de nuestros productos, F) Transferir la información personal que usted
        suministre a terceros, G) Llevar a cabo procesos de análisis de datos o
        estudios de audiencias con fines de mercadeo digital en campañas de
        publicidad, H) SUEÑO ESTÉREO S.A.S. transferirá sus datos personales a
        sus afiliadas y vinculadas, quienes en su calidad de responsables de la
        información las tratarán con base en sus propias políticas de
        privacidad, que, en todo caso, tendrán un alcance similar a las de SUEÑO
        ESTÉREO S.A.S, I) Usar la información o resultados obtenidos del
        análisis de datos con fines comerciales, J) Transferir la información a
        terceros dentro o fuera de Colombia para la realización de las
        finalidades descritas y efectuar las gestiones pertinentes para el
        desarrollo del objeto social de la Compañía, K) Dar a conocer productos
        y servicios promovidos directamente por los Aliados estratégicos de
        Sueño Estéreo S.A.S., L) Elaborar estudios de mercadotecnia,
        segmentación de mercado y estadísticas. Como titular de la información
        le asisten los derechos enunciados en la ley 1581 de 2012, el decreto
        1377 de 2013 y las demás normas concomitantes, los puede consultar en
        Aquí. Para cambiar, modificar, suprimir su información o ejercer
        cualquier derecho, contáctenos a través de info@paramopresenta.com .
        Para consultar nuestra política de tratamiento de datos personales de
        clic Aquí.
      </p>
      <div className="flex w-fit m-auto mb-12">
        <div
          onClick={() => showX("yes")}
          className="bg-crema border  w-[30px] h-[30px] p-2 flex items-center justify-center cursor-pointer "
        >
          <img
            className="acepto-item opacity-0"
            src="/assets/x.png"
            alt="equis"
          />
        </div>
        <p className="ml-5">
          He leído y acepto el{" "}
          aviso de privacidad
 
        </p>
      </div>
    </>
  );
};
