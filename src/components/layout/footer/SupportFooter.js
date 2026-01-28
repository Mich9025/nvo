import Link from "next/link";

const SupportFooter = () => {
  const items = [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Nosotros",
      path: "/about",
    },
    {
      name: "Servicios",
      path: "/services",
    },
    {
      name: "Contacto",
      path: "/contact",
    },
  ];
  return (
    <div
      className="col-xl-4 col-lg-6 col-md-6 col-sm-6"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="footer__widget footer__support">
        <div className="footer__menu__title">
          <h6>Contacto comercial :</h6>
        </div>
        <div className="footer__menu footer__text">
          <ul>           
            <p>Sandra García Rios</p>
            <li><a href="mailto:sandra@nvolatam.com">sandra@nvolatam.com</a></li>
            <li><a href="tel:+573208657361">+57 320-8657361</a></li>
          </ul>
        </div>
        <div className="footer__menu__title">
          <h6>Contacto aliados logisticos :</h6>
        </div>
        <div className="footer__menu footer__text">
          <ul>           
            <p>Nanny Lopez</p>
            <li><a href="mailto:nancy@nvolatam.com">contacto@nvolatam.com</a></li>
            <li><a href="tel:+573112208789">+57 311 220 8789</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SupportFooter;
