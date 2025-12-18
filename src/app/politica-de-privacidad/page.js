import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Política de Privacidad | NVO - Soluciones Logísticas",
  description:
    "Política de privacidad y protección de datos de NVO. Conoce cómo manejamos y protegemos tu información personal.",
};

export default function PoliticaPrivacidad() {
  return (
    <PageWrapper headerStyle={3} headerBg={"black"}>
      <ThemeController />
      <main>
        <div className="legal__page sp_top_140 sp_bottom_140">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11">
                <div className="legal__content">
                  <h1>Política de Privacidad y Protección de Datos</h1>
                  <p className="legal__intro">
                    Última actualización: Diciembre 2025
                  </p>

                  <section className="legal__section">
                    <h2>1. Introducción</h2>
                    <p>
                      NVO (en adelante &ldquo;NVO&rdquo;, &ldquo;nosotros&rdquo; o &ldquo;la empresa&rdquo;) está comprometido con la 
                      protección de la privacidad y los datos personales de sus clientes, colaboradores 
                      y usuarios. Esta política describe cómo recopilamos, usamos, almacenamos y 
                      protegemos su información personal de acuerdo con la Ley 1581 de 2012 y el 
                      Decreto 1377 de 2013 de Colombia.
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>2. Responsable del Tratamiento</h2>
                    <p>
                      <strong>Razón Social:</strong> NVO Soluciones Logísticas
                      <br />
                      <strong>Contacto:</strong> info@nvo.com
                      <br />
                      <strong>Dirección:</strong> Colombia
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>3. Datos que Recopilamos</h2>
                    <h3>3.1 Información Personal</h3>
                    <p>
                      Recopilamos la siguiente información personal cuando usted utiliza nuestros servicios:
                    </p>
                    <ul>
                      <li>Nombre completo</li>
                      <li>Número de identificación (cédula, NIT)</li>
                      <li>Dirección de correo electrónico</li>
                      <li>Número de teléfono</li>
                      <li>Dirección física</li>
                      <li>Información de facturación</li>
                      <li>Información laboral (para aplicantes a empleos)</li>
                    </ul>

                    <h3>3.2 Información de Servicio</h3>
                    <ul>
                      <li>Datos de envíos y entregas</li>
                      <li>Ubicaciones de recogida y entrega</li>
                      <li>Historial de servicios utilizados</li>
                      <li>Información de rastreo GPS</li>
                    </ul>

                    <h3>3.3 Información Técnica</h3>
                    <ul>
                      <li>Dirección IP</li>
                      <li>Tipo de navegador</li>
                      <li>Datos de cookies</li>
                      <li>Información del dispositivo</li>
                    </ul>
                  </section>

                  <section className="legal__section">
                    <h2>4. Finalidades del Tratamiento</h2>
                    <p>
                      Utilizamos sus datos personales para las siguientes finalidades:
                    </p>
                    <ul>
                      <li>Prestar y gestionar nuestros servicios de logística y distribución</li>
                      <li>Procesar pagos y emitir facturas</li>
                      <li>Comunicarnos con usted sobre sus servicios</li>
                      <li>Enviar notificaciones sobre el estado de entregas</li>
                      <li>Mejorar nuestros servicios y experiencia del cliente</li>
                      <li>Cumplir con obligaciones legales y regulatorias</li>
                      <li>Realizar análisis estadísticos y estudios de mercado</li>
                      <li>Procesar solicitudes de empleo</li>
                      <li>Enviar información promocional (con su consentimiento previo)</li>
                    </ul>
                  </section>

                  <section className="legal__section">
                    <h2>5. Base Legal del Tratamiento</h2>
                    <p>
                      El tratamiento de sus datos personales se basa en:
                    </p>
                    <ul>
                      <li>Su consentimiento expreso e informado</li>
                      <li>La ejecución del contrato de servicios</li>
                      <li>El cumplimiento de obligaciones legales</li>
                      <li>Nuestro interés legítimo en mejorar los servicios</li>
                    </ul>
                  </section>

                  <section className="legal__section">
                    <h2>6. Compartir Información</h2>
                    <p>
                      Podemos compartir su información con:
                    </p>
                    <ul>
                      <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar 
                      nuestro negocio (procesamiento de pagos, servicios tecnológicos)</li>
                      <li><strong>Colaboradores y mensajeros:</strong> Para completar entregas</li>
                      <li><strong>Autoridades:</strong> Cuando sea requerido por ley</li>
                      <li><strong>Socios comerciales:</strong> Con su consentimiento expreso</li>
                    </ul>
                    <p>
                      No vendemos ni alquilamos su información personal a terceros.
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>7. Seguridad de los Datos</h2>
                    <p>
                      Implementamos medidas de seguridad técnicas, administrativas y físicas para 
                      proteger sus datos personales contra acceso no autorizado, pérdida, alteración 
                      o divulgación, incluyendo:
                    </p>
                    <ul>
                      <li>Encriptación de datos sensibles</li>
                      <li>Controles de acceso restringido</li>
                      <li>Monitoreo de sistemas de seguridad</li>
                      <li>Capacitación del personal en protección de datos</li>
                      <li>Auditorías de seguridad periódicas</li>
                    </ul>
                  </section>

                  <section className="legal__section">
                    <h2>8. Conservación de Datos</h2>
                    <p>
                      Conservamos sus datos personales durante el tiempo necesario para cumplir con 
                      las finalidades descritas, y posteriormente según los plazos legales establecidos 
                      en la legislación colombiana (generalmente entre 5 y 10 años para fines contables 
                      y legales).
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>9. Derechos del Titular</h2>
                    <p>
                      Como titular de datos personales, usted tiene derecho a:
                    </p>
                    <ul>
                      <li><strong>Conocer, actualizar y rectificar</strong> sus datos personales</li>
                      <li><strong>Solicitar prueba</strong> de la autorización otorgada</li>
                      <li><strong>Ser informado</strong> sobre el uso de sus datos</li>
                      <li><strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio</li>
                      <li><strong>Revocar la autorización</strong> y solicitar la supresión de datos 
                      (cuando no exista obligación legal de conservarlos)</li>
                      <li><strong>Acceder gratuitamente</strong> a sus datos personales</li>
                    </ul>
                  </section>

                  <section className="legal__section">
                    <h2>10. Ejercicio de Derechos</h2>
                    <p>
                      Para ejercer sus derechos, puede contactarnos mediante:
                    </p>
                    <ul>
                      <li><strong>Email:</strong> info@nvo.com</li>
                      <li><strong>Asunto:</strong> &ldquo;Protección de Datos Personales&rdquo;</li>
                    </ul>
                    <p>
                      Responderemos a su solicitud dentro de los 10 días hábiles siguientes a su recepción. 
                      Si su solicitud es procedente, la atenderemos en un plazo máximo de 15 días hábiles.
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>11. Cookies y Tecnologías Similares</h2>
                    <p>
                      Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro 
                      sitio web. Puede configurar su navegador para rechazar cookies, aunque esto puede 
                      afectar la funcionalidad de algunas características.
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>12. Transferencia Internacional de Datos</h2>
                    <p>
                      En caso de que sea necesario transferir sus datos personales a otros países, 
                      garantizamos que dichos países cuenten con niveles adecuados de protección de 
                      datos o implementaremos las salvaguardas apropiadas.
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>13. Menores de Edad</h2>
                    <p>
                      Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos 
                      intencionalmente información personal de menores sin el consentimiento de sus 
                      padres o tutores legales.
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>14. Cambios a esta Política</h2>
                    <p>
                      Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos 
                      sobre cambios significativos a través de nuestro sitio web o por correo electrónico. 
                      La fecha de la última actualización se indica al inicio de este documento.
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>15. Autoridad de Control</h2>
                    <p>
                      Si considera que sus derechos han sido vulnerados, puede presentar una queja ante:
                    </p>
                    <p>
                      <strong>Superintendencia de Industria y Comercio</strong>
                      <br />
                      Delegatura para la Protección de Datos Personales
                      <br />
                      www.sic.gov.co
                    </p>
                  </section>

                  <section className="legal__section">
                    <h2>16. Contacto</h2>
                    <p>
                      Para cualquier consulta sobre esta Política de Privacidad o el tratamiento de 
                      sus datos personales:
                    </p>
                    <ul>
                      <li><strong>Email:</strong> info@nvo.com</li>
                      <li><strong>Horario de atención:</strong> Lunes a Viernes, 8:00am - 6:00pm</li>
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