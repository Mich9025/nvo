
import serviceImage6 from "@/assets/img/servicios/flotas_dedicadas.png";
import serviceImage7 from "@/assets/img/servicios/servicio_express.png";
import serviceImage8 from "@/assets/img/servicios/distribucion_multientrega.png";

import projectImage13 from "@/assets/img/nosotros/portada.png";
import projectImage14 from "@/assets/img/nosotros/portada.png";
import projectImage15 from "@/assets/img/nosotros/portada.png";
const getAllServices = () => {
  const services = [
    {
      id: "flotas-dedicadas",
      title: "FLOTAS DEDICADAS",
      desc: "Impulsamos tu operación con motos y vehículos de carga ligera diseñados para responder con rapidez, flexibilidad y confiabilidad. Nos adaptamos a tus necesidades para que cada entrega sea más ágil, segura y eficiente.",
      detailsImg: projectImage15,
      img: serviceImage6,
      category: "Transporte",
      duration: "1500",
      brochure: "",
      text1: "Nuestro servicio de Flotas Dedicadas está diseñado para empresas que requieren una solución logística personalizada y confiable. Ponemos a tu disposición una flota completa de motos y vehículos de carga ligera que trabajan exclusivamente para tu operación, garantizando tiempos de respuesta inmediatos y adaptabilidad total a tus necesidades específicas.",
      text2: "Con nuestras flotas dedicadas, obtienes control total sobre tu cadena de distribución. Cada vehículo es operado por personal capacitado y comprometido, equipado con tecnología de rastreo en tiempo real que te permite monitorear cada movimiento. Esta solución es ideal para empresas con alto volumen de entregas diarias que buscan optimizar costos sin sacrificar calidad de servicio.",
      planningTitle: "Planificación e Implementación",
      planningText1: "Comenzamos con un análisis detallado de tus necesidades operativas, rutas frecuentes, volumen de entregas y horarios críticos. Diseñamos una solución personalizada que se integra perfectamente con tus procesos existentes.",
      planningText2: "Nuestro equipo te acompaña en cada etapa: desde la asignación de vehículos y conductores hasta la configuración de sistemas de rastreo y reportería. Garantizamos una implementación sin fricciones en tiempo récord.",
      executionTitle: "Ejecución y Monitoreo en Tiempo Real",
      executionText: "Una vez en operación, tu flota dedicada trabaja bajo estrictos estándares de calidad y puntualidad. Contarás con acceso 24/7 a nuestro sistema de rastreo GPS, reportes automáticos de entregas y un equipo de soporte dedicado. Optimizamos constantemente las rutas y tiempos para maximizar tu eficiencia operativa y reducir costos.",
    },
    {
      id: "servicio-express",
      title: "SERVICIO EXPRESS",
      desc: "Llevamos tu producto del punto A al punto B en tiempo récord. Entregas rápidas, rastreadas en tiempo real y con la confiabilidad que tu operación necesita.",
      detailsImg: projectImage14,
      img: serviceImage7,
      category: "Logística",
      duration: "1700",
      brochure: "",
      text1: "El Servicio Express de NVO está pensado para esas entregas urgentes que no pueden esperar. Cuando el tiempo es crítico, nuestro equipo especializado en logística express garantiza que tu paquete llegue en el menor tiempo posible, sin comprometer la seguridad ni la integridad del envío.",
      text2: "Ofrecemos ventanas de entrega flexibles adaptadas a tus necesidades: entrega el mismo día, en 2 horas, o en horarios específicos. Cada envío incluye rastreo en tiempo real, notificaciones automáticas y confirmación con firma digital. Perfecto para documentos importantes, paquetes urgentes o productos de alto valor que requieren atención inmediata.",
      planningTitle: "Proceso de Solicitud y Coordinación",
      planningText1: "Solicitar un servicio express es simple y rápido. A través de nuestra plataforma web, app móvil o llamada telefónica, proporcionas los detalles del envío: origen, destino, dimensiones y tiempo requerido. Recibimos tu solicitud y asignamos inmediatamente el mensajero más cercano.",
      planningText2: "Confirmamos la recolección en minutos y te proporcionamos el código de rastreo único. Nuestro sistema calcula automáticamente la ruta más eficiente considerando tráfico en tiempo real y condiciones de la vía.",
      executionTitle: "Seguimiento y Entrega Verificada",
      executionText: "Desde el momento de la recolección hasta la entrega final, tienes visibilidad completa del estado de tu envío. Recibes notificaciones en cada etapa: recolección confirmada, en tránsito, llegada al destino. La entrega se confirma con foto, firma digital y hora exacta, garantizando total trazabilidad y transparencia en cada operación.",
    },
    {
      id: "distribucion-multientrega",
      title: "DISTRIBUCIÓN MULTIENTREGA",
      desc: "Optimizamos tus rutas para cubrir varios destinos en un solo recorrido. Agilidad, eficiencia y control en cada entrega, sin detener tu operación.",
      detailsImg: projectImage13,
      img: serviceImage8,
      category: "Distribución",
      duration: "1900",
      brochure: "",
      text1: "La Distribución Multientrega de NVO es la solución perfecta para empresas que necesitan realizar múltiples entregas en diferentes puntos de una ciudad o región. Optimizamos cada ruta utilizando tecnología avanzada de planificación logística, reduciendo tiempos de tránsito y costos operativos mientras maximizamos la cantidad de entregas exitosas por recorrido.",
      text2: "Nuestro sistema inteligente agrupa los envíos por zona geográfica, prioridad y ventana horaria, creando las rutas más eficientes. Esto te permite escalar tu operación de distribución sin necesidad de aumentar proporcionalmente tus costos. Ideal para e-commerce, distribuidoras, farmacias y cualquier negocio con necesidades recurrentes de entrega a múltiples destinatarios.",
      planningTitle: "Optimización de Rutas y Programación",
      planningText1: "Utilizamos algoritmos avanzados de optimización de rutas que consideran más de 20 variables: distancias, tráfico histórico y en tiempo real, prioridades de entrega, ventanas horarias específicas, capacidad de carga y restricciones de acceso vehicular.",
      planningText2: "Cada mañana recibes un plan detallado de rutas optimizadas con secuencia de entregas, tiempos estimados y mapas interactivos. Nuestro sistema es lo suficientemente flexible para incorporar entregas urgentes sobre la marcha sin desorganizar el resto del itinerario.",
      executionTitle: "Control Total y Reportería Detallada",
      executionText: "Durante la ejecución de cada ruta, monitoreas en tiempo real el progreso de todas las entregas. Cada parada se registra automáticamente con hora, ubicación GPS, foto de confirmación y firma del receptor. Al finalizar el día, recibes un reporte completo con estadísticas de desempeño: porcentaje de entregas exitosas, tiempos promedio, incidencias y oportunidades de mejora continua.",
    },
  ];
  return services;
};

export default getAllServices;
