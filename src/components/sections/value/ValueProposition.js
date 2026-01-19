import Image from "next/image";
import aboutImage1 from "@/assets/img/nosotros/propuesta-valor.png";
import aboutImage2 from "@/assets/img/about/about__2.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";

const ValueProposition = () => {
    const values = [
        { title: "Máxima eficiencia operativa", desc: "Optimizamos cada proceso para garantizar rapidez y precisión." },
        { title: "Flexibilidad en pagos", desc: "Nos adaptamos a tus necesidades financieras y operativos." },
        { title: "Competitividad en precios", desc: "Tarifas justas sin comprometer la calidad del servicio." },
        { title: "Tecnología permanente", desc: "Sistemas avanzados para trazabilidad y control total." },
        { title: "Reducción de tiempos", desc: "Entregas más rápidas gracias a nuestra red optimizada." },
        { title: "Atención personalizada", desc: "Un equipo humano dispuesto a resolver tus dudas siempre." },
    ];

  return (
    <div className="value-proposition-section sp_top_100 sp_bottom_100" style={{ background: "var(--whiteColor)" }}>
      <div className="container">
        <div className="row align-items-center">
            {/* Left Column: Image Collage */}
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
                <div className="about__img__wrapper position-relative">
                    <div className="about__img__1">
                         <Image src={aboutImage1} alt="NVO Propuesta de Valor" style={{ borderRadius: "10px", width: "100%" }} />
                    </div>
                    {/* <div className="about__img__2" style={{ position: "absolute", bottom: "-30px", right: "0", width: "60%", border: "5px solid #fff", borderRadius: "10px" }}>
                         <Image src={aboutImage2} alt="NVO Delivery" style={{ borderRadius: "5px", width: "100%" }} />
                    </div> */}
                </div>
            </div>

            {/* Right Column: Content */}
            <div className="col-lg-6 col-md-12">
                <div className="about__content__wrapper ps-lg-5">
                    <div className="section__title mb-4">
                        <span style={{ 
                            textTransform: "uppercase", 
                            color: "var(--nvoPink)", 
                            fontWeight: "700", 
                            fontSize: "14px", 
                            letterSpacing: "1px",
                            display: "block",
                            marginBottom: "10px"
                        }}>
                            PROPUESTA DE VALOR
                        </span>
                        <h2 style={{ fontSize: "42px", fontWeight: "800", color: "var(--nvoBlue)", lineHeight: "1.2" }}>
                            Soluciones que impulsan tu negocio globalmente
                        </h2>
                    </div>

                    <div className="row">
                        {values.map((item, idx) => (
                            <div key={idx} className="col-md-6 mb-4">
                                <div className="value-item d-flex align-items-start">
                                    <div className="icon-box" style={{ 
                                        minWidth: "50px", 
                                        height: "50px", 
                                        borderRadius: "50%", 
                                        background: "rgba(250, 201, 228, 0.1)", 
                                        display: "flex", 
                                        alignItems: "center", 
                                        justifyContent: "center",
                                        marginRight: "15px",
                                        color: "var(--nvoPink)"
                                    }}>
                                       {/* Placeholder icon, replace with specific icons if desired */}
                                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                           <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                           <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                       </svg>
                                    </div>
                                    <div className="content">
                                        <h5 style={{ fontSize: "18px", fontWeight: "700", color: "var(--nvoBlue)", marginBottom: "5px" }}>{item.title}</h5>
                                        <p style={{ fontSize: "14px", color: "var(--contentColor)", lineHeight: "1.5" }}>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="btn-wrapper mt-4 d-flex align-items-center flex-wrap gap-3">
                        <ButtonPrimary text="Contáctanos" path="/contact" button="blue" />
                        
                        <div className="video-btn d-flex align-items-center" style={{ cursor: "pointer" }}>
                             {/* <div style={{ 
                                 width: "50px", 
                                 height: "50px", 
                                 borderRadius: "50%", 
                                 background: "var(--lightBg)", 
                                 display: "flex", 
                                 alignItems: "center", 
                                 justifyContent: "center",
                                 marginRight: "10px",
                                 color: "var(--nvoPink)"
                             }}>
                                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                     <path d="M8 5v14l11-7z" />
                                 </svg>
                             </div>
                             <span style={{ fontWeight: "600", color: "var(--nvoBlue)" }}>Ver Video</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
