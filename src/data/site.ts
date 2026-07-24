export const siteConfig = {
  name: "Space Apps Guerrero",
  year: 2026,
  dateLabel: "14 y 15 de noviembre de 2026",
  eventDate: "2026-11-14T09:00:00-06:00",
  venue: {
    name: "Escuela Preparatoria No. 23",
    city: "San Jerónimo de Juárez, Guerrero",
    coordinates: "17.14° N · 100.47° O",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Escuela+Preparatoria+23+San+Jeronimo+de+Juarez+Guerrero",
  },
  registrationHref: "/convocatoria",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61573686727475",
    instagram: "https://www.instagram.com/nasa.space.apps.atoyac/",
  },
} as const;

export const missionItems = [
  {
    title: "Comunidad",
    description: "Diversa, inclusiva y colaborativa.",
    icon: "community",
  },
  {
    title: "Ciencia de datos",
    description: "Datos abiertos para decisiones mejores.",
    icon: "data",
  },
  {
    title: "Innovación",
    description: "Ideas creativas que se convierten en soluciones.",
    icon: "innovation",
  },
  {
    title: "Impacto local",
    description: "Pensamos global y actuamos desde Guerrero.",
    icon: "impact",
  },
] as const;

export const challenges = [
  {
    title: "Costas resilientes",
    description:
      "Soluciones basadas en datos para proteger nuestras costas y comunidades.",
    tone: "ocean",
    icon: "coast",
  },
  {
    title: "Tierra y montaña",
    description:
      "Monitoreo y uso sostenible de nuestros ecosistemas terrestres.",
    tone: "sand",
    icon: "earth",
  },
  {
    title: "Agua para todos",
    description:
      "Acceso, calidad y gestión inteligente del recurso más vital.",
    tone: "water",
    icon: "water",
  },
  {
    title: "Comunidades del futuro",
    description:
      "Bienestar, educación y tecnología para un Guerrero más justo.",
    tone: "clay",
    icon: "people",
  },
] as const;

export const agenda = [
  {
    day: "14 NOV",
    entries: [
      ["09:00", "Bienvenida y registro"],
      ["10:00", "Apertura e inspiración"],
      ["11:00", "Formación de equipos"],
      ["12:00", "Inicio de desafíos"],
      ["18:00", "Mentorías y checkpoints"],
    ],
  },
  {
    day: "15 NOV",
    entries: [
      ["09:00", "Desarrollo y mentorías"],
      ["13:00", "Entrega de proyectos"],
      ["15:00", "Presentaciones finales"],
      ["18:00", "Premiación y cierre"],
    ],
  },
] as const;
