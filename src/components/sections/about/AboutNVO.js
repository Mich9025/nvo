import Image from "next/image";
import aboutImage4 from "@/assets/img/about/about__4.png";

const AboutNVO = () => {
  return (
    <div className="about about__white__bg position-relative sp_bottom_80 sp_top_80" id="quienes-somos">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="section__title section__title--2">
              <div className="section__title__heading">
                {/* <h3 style={{ fontSize: "48px", color: "var(--nvoBlue)", marginBottom: "0" }}>QUIENES</h3>
                <h3 style={{ fontSize: "48px", color: "var(--nvoPink)" }}>SOMOS</h3> */}
              </div>
            </div>
            <div className="about__text__wrapper" style={{ marginTop: "20px" }}>
              <p style={{ fontSize: "18px", color: "var(--contentColor)", lineHeight: "1.6" }}>
                En NVO, somos especialistas en <strong><span style={{ color: "var(--aboutHighlight)" }}>soluciones logísticas rápidas, confiables y seguras</span></strong>, diseñadas para garantizar que tus envíos lleguen puntualmente y en óptimas condiciones.
              </p>
              <p style={{ fontSize: "18px", color: "var(--contentColor)", lineHeight: "1.6" }}>
                Nuestra infraestructura está optimizada para la eficiencia operativa, y contamos con un equipo altamente capacitado que gestiona cada paquete con el <strong><span style={{ color: "var(--aboutHighlight)" }}>máximo cuidado</span></strong>.
              </p>
              <p style={{ fontSize: "18px", color: "var(--contentColor)", lineHeight: "1.6" }}>
                Nos comprometemos con la <strong><span style={{ color: "var(--aboutHighlight)" }}>satisfacción de nuestros clientes</span></strong>, ofreciendo un servicio ágil, transparente y profesional que te permite delegar tus necesidades de envío con total confianza.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
             {/* Using placeholder or existing image for now, can be updated */}
            <div className="about__img__3" data-tilt>
              <Image src={aboutImage4} alt="Quienes Somos NVO" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNVO;
