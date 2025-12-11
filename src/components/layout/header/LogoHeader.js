import Image from "next/image";
import Link from "next/link";
import { useHeaderContex } from "@/providers/HeaderContex";

const NVO_LOGO_URL = "https://pub-428bba053a0f499782c7cbc7a5af5402.r2.dev/banco%20de%20imagenes/Logo%20NVO%20principal.png";

const LogoHeader = () => {
  const { style, bodyBg } = useHeaderContex();
  return (
    <div className="headerarea__component">
      <div className="headerarea__logo">
        <Link href="/">
          <Image
            src={NVO_LOGO_URL}
            alt="NVO Logo"
            width={150}
            height={50}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>
      </div>
    </div>
  );
};

export default LogoHeader;
