import serviceImage1 from "@/assets/img/service/service__1.png";
import serviceImage2 from "@/assets/img/service/service__2.png";

const getAllBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Beneficios Aliados",
      category: "Aliados",
      benefits: [
        {
          icon: "check",
          text: "Ingresos competitivos"
        },
        {
          icon: "check",
          text: "Soporte constante"
        },
        {
          icon: "check",
          text: "Pagos semanales"
        },
        {
          icon: "check",
          text: "Registro inmediato"
        }
      ],
      img: serviceImage1,
      bgColor: "#fff", // Light blue background
      textColor: "var(--nvoBlue)", // White text
    },
    {
      id: 2,
      title: "Beneficios para Empresas",
      category: "Empresas",
      benefits: [
        {
          icon: "check",
          text: "Optimización logística"
        },
        {
          icon: "check",
          text: "Rapidez en última milla"
        },
        {
          icon: "check",
          text: "Transparencia total"
        },
        {
          icon: "check",
          text: "Aliado estratégico"
        }
      ],
      img: serviceImage2,
      bgColor: "var(--nvoBlue)", // NVO Blue background
      textColor: "#fff", // White text
    },
  ];
  return benefits;
};

export default getAllBenefits;
