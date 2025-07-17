import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faLightbulb,
  faTrophy,
  faRocket,
  faNetworkWired,
  faChalkboardTeacher
} from "@fortawesome/free-solid-svg-icons";

const FeaturesSection = () => {
  const features = [
    {
      icon: faUsers,
      title: "Colaboración en Equipo",
      description: "Trabaja con personas de diferentes perfiles para resolver desafíos globales."
    },
    {
      icon: faLightbulb,
      title: "Innovación",
      description: "Desarrolla soluciones creativas con datos abiertos de la NASA y tecnologías de vanguardia."
    },
    {
      icon: faTrophy,
      title: "Premios",
      description: "Compite por premios y reconocimiento de la NASA y agencias espaciales internacionales."
    },
    {
      icon: faRocket,
      title: "Exploración Espacial",
      description: "Contribuye a misiones espaciales reales y proyectos científicos sobre la Tierra."
    },
    {
      icon: faNetworkWired,
      title: "Conexiones Profesionales",
      description: "Conecta con profesionales, científicos y entusiastas del espacio."
    },
    {
      icon: faChalkboardTeacher,
      title: "Aprendizaje",
      description: "Adquiere nuevas habilidades y conocimientos mediante talleres y mentorías."
    }
  ];

  return (
    <div className="py-16 bg-[#FAF7F2]" id="features">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1D3557] mb-12">Características del Evento</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-[#EDE0D4]">
              <div className="text-4xl text-[#D4471D] mb-4 flex justify-center">
                <FontAwesomeIcon icon={feature.icon} className="text-[#D4471D] text-4xl mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-[#1D3557] mb-2 text-center">{feature.title}</h3>
              <p className="text-[#264653] tex-justify">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;