const getAllJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Mensajero Express",
      location: "Bogotá",
      salary: "$1.300.000 - $1.800.000",
      isRemote: false,
      type: "Tiempo Completo",
      description: "Buscamos mensajeros responsables y comprometidos para entregas express en Bogotá.",
      responsibilities: [
        "Realizar entregas express en tiempo récord",
        "Manejar paquetes con cuidado y profesionalismo",
        "Mantener comunicación constante con el centro de operaciones",
        "Cumplir con rutas y horarios establecidos",
        "Verificar y confirmar entregas con firma digital"
      ],
      requirements: [
        "Licencia de conducción vigente",
        "Experiencia mínima de 6 meses como mensajero",
        "Conocimiento de Bogotá y alrededores",
        "Manejo de smartphone (GPS y apps)",
        "Excelente actitud de servicio"
      ],
      benefits: [
        "Empleo formal con prestaciones de ley",
        "Seguro de vida y accidentes",
        "Bonificaciones por desempeño",
        "Capacitación continua",
        "Oportunidades de crecimiento"
      ]
    },
    {
      id: 2,
      title: "Coordinador de Logística",
      location: "Medellín",
      salary: "$2.500.000 - $3.200.000",
      isRemote: false,
      type: "Tiempo Completo",
      description: "Profesional para coordinar operaciones logísticas y gestión de flotas.",
      responsibilities: [
        "Planificar y coordinar operaciones de distribución",
        "Supervisar equipos de mensajeros y conductores",
        "Optimizar rutas y tiempos de entrega",
        "Analizar métricas y KPIs de operación",
        "Gestionar relaciones con clientes corporativos"
      ],
      requirements: [
        "Profesional en Ingeniería Industrial, Logística o afines",
        "Mínimo 2 años de experiencia en logística",
        "Manejo de software de gestión logística",
        "Capacidad de liderazgo y trabajo en equipo",
        "Excelentes habilidades analíticas"
      ],
      benefits: [
        "Salario competitivo con bonos por objetivos",
        "Prestaciones superiores a la ley",
        "Horario flexible",
        "Oportunidades de desarrollo profesional",
        "Ambiente de trabajo dinámico"
      ]
    },
    {
      id: 3,
      title: "Conductor de Vehículo de Carga",
      location: "Cali",
      salary: "$1.500.000 - $2.000.000",
      isRemote: false,
      type: "Tiempo Completo",
      description: "Conductor con licencia C1 para distribución multientrega.",
      responsibilities: [
        "Conducir vehículo de carga ligera para distribución",
        "Realizar entregas múltiples según ruta asignada",
        "Cuidar y mantener el vehículo en óptimas condiciones",
        "Reportar novedades y mantener documentación al día",
        "Cumplir con normativas de tránsito y seguridad"
      ],
      requirements: [
        "Licencia de conducción C1 vigente",
        "Experiencia mínima de 1 año conduciendo vehículos de carga",
        "Conocimiento de Cali y municipios aledaños",
        "Disponibilidad de tiempo completo",
        "Certificado de aptitud física para conducir"
      ],
      benefits: [
        "Contrato directo con prestaciones",
        "Auxilio de rodamiento",
        "Seguro todo riesgo del vehículo",
        "Incentivos por cumplimiento de metas",
        "Estabilidad laboral"
      ]
    },
  ];
  return jobs;
};

export default getAllJobs;
