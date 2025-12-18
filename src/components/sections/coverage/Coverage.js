"use client";
import dynamic from "next/dynamic";

const CoverageMap = dynamic(() => import("./CoverageMap"), { 
    ssr: false,
    loading: () => <div style={{height: "500px", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center"}}>Cargando Mapa...</div>
});

const Coverage = () => {
    return (
      <div className="coverage-section sp_top_100 sp_bottom_100" style={{ background: "#f9f9f9" }}>
        <div className="container">
          <div className="text-center mb-5">
              <h2 style={{ textTransform: "uppercase", fontSize: "48px", fontWeight: "800", marginBottom: "30px" }}>
                  <span style={{ color: "var(--nvoPink)" }}>COBERTURA</span> <span style={{ color: "var(--nvoBlue)" }}>NACIONAL</span>
              </h2>
              <p style={{ maxWidth: "700px", margin: "0 auto 40px", fontSize: "18px", color: "var(--contentColor)" }}>
                  Llegamos a los principales centros económicos y urbanos de Colombia, garantizando conectividad y eficiencia en cada envío.
              </p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-10">
                <CoverageMap />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Coverage;
  
