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
      className="col-xl-2 col-lg-6 col-md-6 col-sm-6"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="footer__widget footer__support">
        <div className="footer__menu__title">
          <h6>CONTACTO :</h6>
        </div>
        <div className="footer__menu">
          <ul>
            {/* <li>Key Account Manager:</li>
            <li>Sandra García Rios</li> */}
            <li><a href="mailto:sandra@nvolatam.com">sandra@nvolatam.com</a></li>
            <li><a href="tel:+573208657361">+57 320-8657361</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SupportFooter;
