import Image from "next/image";
import Link from "next/link";
import React from "react";

const BeneficiosCard = ({ service }) => {
  const { id, title, benefits, img, duration, bgColor, textColor } = service;
  return (
    <div
      className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
      data-aos="fade-up"
      data-aos-duration={duration || "1500"}
    >
      <div 
        className="beneficios__card" 
        style={{ backgroundColor: bgColor || "#f5f5f5" }}
      >
        <div className="beneficios__card__content">
            <div className="beneficios__card__img ">
                <Image src={img} alt="" width={200} height={200} />
            </div>
          <h3 style={{ color: textColor || "#003399" }}>{title}</h3>
          <ul className="beneficios__list">
            {benefits?.map((benefit, idx) => (
              <li key={idx} style={{ color: textColor || "#333" }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                    fill={textColor || "#003399"}
                  />
                </svg>
                <span>{benefit.text}</span>
              </li>
            ))}
          </ul>
          <div className="beneficios__button">
            <Link href="/contacto" className="default__button btn__pink">
              Quiero saber más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeneficiosCard;

