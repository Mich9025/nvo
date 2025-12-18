import getAllBenefits from "@/libs/getAllBenefits";
import Image from "next/image";
import Link from "next/link";
import serviceBgImage3 from "@/assets/img/service/service__bg__3.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BeneficiosCard from "@/components/shared/cards/beneficiosCard";
const Beneficios = ({ title, desc, service }) => {
  const beneficios = getAllBenefits();
  return (
    <div
      className="service sp_top_120 sp_bottom_130 special__spacing"
      id="service__area"
      style={{ background: `var(--pinkcolor) url('${serviceBgImage3.src}')` }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="section__title text-center sp_bottom_50">
              {service === 2 ? (
                ""
              ) : (
                <div className="section__title__small">
                  <span>NUESTROS SERVICIOS</span>
                </div>
              )}
              <div className="section__title__heading">
                <h3>
                  {title ? title : "SOLUCIONES LOGÍSTICAS PARA TU NEGOCIO."}
                </h3>
              </div>
              {desc ? (
                <div className="section__title__text">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="section__title__text">
                  <p>Nos adaptamos a tus necesidades para que cada entrega sea más ágil, segura y eficiente.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {beneficios?.map((beneficio, idx) => (
            <BeneficiosCard key={idx} service={beneficio} />
          ))}

          {service === 2 ? (
            ""
          ) : (
            <div
              className="col-xl-12"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="service__bitton__4 text-center">
                <ButtonPrimary text={"OTHER SERVICE"} path={"/services"} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
