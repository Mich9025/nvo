import Image from "next/image";
import featuresImage1 from "@/assets/img/about/healthcare.png";
import featuresImage2 from "@/assets/img/about/deal.png";
import featuresImage3 from "@/assets/img/about/money-bag.png";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features2 = ({ type }) => {
  const features = [
    {
      id: 1,
      title: "Máxima eficiencia operativa",
      desc: "Infraestructura optimizada y equipo altamente capacitado que gestiona cada paquete con el máximo cuidado.",
      duration: "1800",
      img: featuresImage1,
    },
    {
      id: 2,
      title: "Flexibilidad en métodos de pago",
      desc: "Nos adaptamos a tus necesidades financieras con múltiples opciones de pago para tu comodidad.",
      duration: "2200",
      img: featuresImage2,
    },
    {
      id: 3,
      title: "Competitividad en precios",
      desc: "Ofrecemos tarifas competitivas sin sacrificar la calidad y confiabilidad de nuestro servicio.",
      duration: "2600",
      img: featuresImage3,
    },
  ];
  return (
    <section className={`service__features ${type === 2 ? "sp_top_50" : ""}`}>
      <div className="container">
        <div className="service__features__wrap">
          <div className="row justify-content-center">
            {features?.map((feature, idx) => (
              <FeatureCard key={idx} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
