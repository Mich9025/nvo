import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Términos y Condiciones | NVO - Soluciones Logísticas",
  description:
    "Términos y condiciones de uso de los servicios de NVO. Conoce nuestras políticas y condiciones de servicio.",
};

export default function TerminosCondiciones() {
  return (
    <PageWrapper headerStyle={3} headerBg={"black"}>
      <ThemeController />
      <main>
        <div className="legal__page sp_top_140 sp_bottom_140">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11">
                <div className="legal__content">
                  <h1>Términos y Condiciones</h1>
                  <p className="legal__intro">
                    Última actualización: Diciembre 2025
                  </p>

                  <section className="legal__section">
                    <h2>1. Aceptación de los Términos</h2>
                    <p>
                      Al utilizar los servicios de NVO (en adelante &quot;NVO&quot;, &quot;nosotros&quot; o &quot;la empresa&quot;), 
                      usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo 
                      con alguna parte de estos términos, no debe utilizar nuestros servicios.
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>2. Descripción de Servicios</h2>
                    <p>
                      NVO ofrece servicios de logística y distribución en Colombia, incluyendo:
                    </p>
                    <ul>
                      <li>Flotas dedicadas para operaciones personalizadas</li>
                      <li>Servicio express de entregas rápidas</li>
                      <li>Distribución multientrega optimizada</li>
                    </ul>
                    <p>
                      Nos reservamos el derecho de modificar, suspender o descontinuar cualquier 
                      servicio en cualquier momento sin previo aviso.
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>3. Uso del Servicio</h2>
                    <p>
                      Al contratar nuestros servicios, usted se compromete a:
                    </p>
                    <ul>
                      <li>Proporcionar información veraz y actualizada</li>
                      <li>Utilizar los servicios solo para fines legales</li>
                      <li>No interferir con el funcionamiento normal de nuestros servicios</li>
                      <li>Cumplir con todas las leyes y regulaciones aplicables</li>
                      <li>Pagar puntualmente los servicios contratados</li>
                    </ul>
                  </section>

                  <section className="legal__section">
                    <h2>4. Responsabilidades y Limitaciones</h2>
                    <h3>4.1 Responsabilidades de NVO</h3>
                    <p>
                      NVO se compromete a prestar los servicios con la debida diligencia y 
                      profesionalismo. Sin embargo, no nos hacemos responsables por:
                    </p>
                    <ul>
                      <li>Retrasos causados por caso fortuito o fuerza mayor</li>
                      <li>Daños a mercancías no declaradas o incorrectamente empacadas</li>
                      <li>Pérdidas causadas por información incorrecta del cliente</li>
                      <li>Demoras atribuibles a terceros fuera de nuestro control</li>
                    </ul>

                    <h3>4.2 Limitación de Responsabilidad</h3>
                    <p>
                      La responsabilidad máxima de NVO por pérdida o daño de mercancías estará 
                      limitada al valor declarado de la mercancía o al monto especificado en el 
                      contrato de servicio, lo que sea menor.
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>5. Tarifas y Pagos</h2>
                    <p>
                      Las tarifas de nuestros servicios se establecen según las condiciones acordadas 
                      con cada cliente. Los pagos deben realizarse según los términos especificados 
                      en cada contrato.
                    </p>
                    <p>
                      El retraso en los pagos puede resultar en la suspensión temporal de los servicios 
                      y la aplicación de intereses moratorios conforme a la ley colombiana.
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>6. Protección de Datos</h2>
                    <p>
                      El tratamiento de datos personales se rige por nuestra{" "}
                      <a href="/politica-de-privacidad">Política de Privacidad</a>, la cual forma 
                      parte integral de estos Términos y Condiciones.
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>7. Propiedad Intelectual</h2>
                    <p>
                      Todos los contenidos, marcas, logos y materiales presentes en nuestro sitio web 
                      y servicios son propiedad de NVO o sus licenciantes y están protegidos por las 
                      leyes de propiedad intelectual de Colombia.
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>8. Terminación del Servicio</h2>
                    <p>
                      Cualquiera de las partes puede terminar el contrato de servicio con previo aviso 
                      según lo establecido en el acuerdo específico. NVO se reserva el derecho de 
                      terminar inmediatamente el servicio en caso de incumplimiento grave de estos términos.
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>9. Modificaciones</h2>
                    <p>
                      NVO se reserva el derecho de modificar estos Términos y Condiciones en cualquier 
                      momento. Las modificaciones entrarán en vigor inmediatamente después de su 
                      publicación en nuestro sitio web.
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>10. Ley Aplicable y Jurisdicción</h2>
                    <p>
                      Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. 
                      Cualquier disputa será sometida a la jurisdicción de los tribunales competentes 
                      de Colombia.
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>11. Contacto</h2>
                    <p>
                      Para cualquier pregunta sobre estos Términos y Condiciones, puede contactarnos:
                    </p>
                    <ul>
                      <li>Email: info@nvo.com</li>
                      <li>Horario: Lunes a Viernes, 8:00am - 6:00pm</li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}