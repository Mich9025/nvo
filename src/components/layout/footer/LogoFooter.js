import Image from "next/image";
import Link from "next/link";

const NVO_LOGO_URL = "https://pub-428bba053a0f499782c7cbc7a5af5402.r2.dev/banco%20de%20imagenes/Logo%20NVO%20principal.png";

const LogoFooter = ({ style }) => {
  return (
    <div
      className={`col-xl-4 ${!style ? "col-lg-6" : "col-lg-4"} col-md-6`}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div
        className="footer__widget footer__left position-relative "
      >
        <div className="footer__logo">
          <Image 
            src={NVO_LOGO_URL} 
            alt="NVO Logo" 
            width={150}
            height={50}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="footer__text">
          <p>
            NVO - Especialistas en soluciones logísticas rápidas, confiables y seguras. 
            ¡Llevamos tu marca directo a las manos de tus clientes!
          </p>
        </div>
        <div className="footer__icon">
          <ul>
            <li>
              <Link href="https://www.facebook.com">
                <i className="icofont-facebook"></i>
              </Link>
            </li>
            {/* <li>
              <Link href="https://x.com">
                <i className="icofont-twitter"></i>
              </Link>
            </li> */}
            {/* <li>
              <Link href="https://www.skype.com">
                <i className="icofont-skype"></i>
              </Link>
            </li> */}
            <li>
              <Link href="https://www.linkedin.com">
                <i className="icofont-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogoFooter;
