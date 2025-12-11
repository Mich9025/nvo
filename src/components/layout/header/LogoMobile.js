import Image from "next/image";
import Link from "next/link";
// import logoImage1 from "@/assets/img/logo/Logo_1.png";
// import logoImage2 from "@/assets/img/logo/Logo_2.png";

const NVO_LOGO_URL = "https://pub-428bba053a0f499782c7cbc7a5af5402.r2.dev/banco%20de%20imagenes/Logo%20NVO%20principal.png";

const LogoMobile = () => {
  return (
    <div className="offcanvas__logo">
      <Link className="offcanvas__logo_link" href="/">
        <Image 
          src={NVO_LOGO_URL} 
          alt="NVO Logo" 
          width={150}
          height={50}
          style={{ objectFit: 'contain' }}
        />
        {/* <Image src={logoImage1} alt="Logo-img" className="logo-image1" />
        <Image src={logoImage2} alt="Logo-img2" className="logo-image2" /> */}
      </Link>
      <button className="offcanvas__close--btn" data-offcanvas>
        Close
      </button>
    </div>
  );
};

export default LogoMobile;
