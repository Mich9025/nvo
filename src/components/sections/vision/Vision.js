const VisionCard = ({ icon, title, description }) => (
  <div className="col-lg-4 col-md-6 col-12 mb-4">
    <div 
        className="vision-card text-center p-4 h-100" 
        style={{ 
            border: "2px solid var(--nvoPink)", 
            borderRadius: "20px",
            backgroundColor: "#fff",
            position: "relative",
            marginTop: "30px"
        }}
    >
      <div 
        className="icon-wrapper d-flex justify-content-center align-items-center mx-auto"
        style={{
            width: "80px",
            height: "80px",
            background: "var(--whiteColor)",
            borderRadius: "50%",
            position: "absolute",
            top: "-40px",
            left: "50%",
            transform: "translateX(-50%)",
            border: "none"
        }}
      >
        <span style={{ fontSize: "40px", color: "var(--nvoPink)" }}>
             <i className={icon}></i>
        </span>
      </div>
      <div className="content mt-4">
        <h4 className="mb-3" style={{ color: "var(--nvoBlue)", fontWeight: "700", textTransform: "uppercase" }}>{title}</h4>
        <p style={{ color: "#333" }}>{description}</p>
      </div>
    </div>
  </div>
);

const Vision = () => {
  const cards = [
    {
      icon: "icofont-users-alt-5", // Placeholder icon
      title: "CON SENTIDO DE PERTENENCIA",
      description: "Fomentamos un ambiente donde cada colaborador se sienta parte integral del éxito."
    },
    {
      icon: "icofont-black-board", // Placeholder icon
      title: "ENTRENAMIENTO CONTINUO A NUESTRO PERSONAL",
      description: "Invertimos en el desarrollo profesional constante de nuestro equipo especializado."
    },
    {
      icon: "icofont-chart-growth", // Placeholder icon
      title: "INCENTIVOS A TRAVÉS DE BONOS POR METAS",
      description: "Valoramos el desempeño excepcional a través de programas de bonificación y crecimiento."
    }
  ];

  return (
    <div className="vision-section sp_top_80 sp_bottom_80" style={{ background: "var(--lightBg)" }}>
      <div className="container">
        <div className="text-center mb-5">
            <h2 style={{ color: "var(--nvoBlue)", fontWeight: "800", fontSize: "42px", textTransform: "uppercase" }}>NUESTRA VISIÓN</h2>
            <p style={{ fontSize: "18px", color: "#333", fontStyle: "italic", fontWeight: "500", marginTop: "10px" }}>
                Ser el aliado logístico que inspira a su equipo a ofrecer experiencias de entrega únicas, <span style={{ color: "var(--nvoPink)", fontWeight: "700" }}>construidas sobre:</span>
            </p>
        </div>
        <div className="row">
          {cards.map((card, index) => (
            <VisionCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vision;
