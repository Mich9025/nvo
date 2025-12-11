import Link from "next/link";

const Copyright = () => {
  return (
    <div className="copyright">
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
          <div className="copyright__left">
            <p>
              Copyright © 2025 <Link href="/">NVO Latam.</Link> Todos los derechos reservados.
            </p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
          <div className="copyright__right">
            <ul>
              <li>
                <Link href="#">Politica de Privacidad ||</Link>
              </li>{" "}
              <li>
                <Link href="#">Terminos y Condiciones</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
