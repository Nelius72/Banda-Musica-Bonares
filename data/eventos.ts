export type Evento = {
  title: string;
  date: string; 
  location: string;
  hour: string;
  description: string;
  mapUrl?: string;
};

export const eventos : Evento[] = [
 
  {
    title: "Donde los Sueños Cantan",
    date: "2026-06-06",
    location: "Bonares / Teatro Cine Colón",
    hour: "Dos pases: 19:00 y 20:30",
    description: "Musical temático Disney con los alumnos de la Escuela de Música",
  },
  {
    title: "Corpus Christi",
    date: "2026-06-07",
    location: "Bonares / Plaza de la Constitución",
    hour: "Por determinar",
    description: "Tradicional procesión por el pueblo decorado con juncia",
  },
  {
    title: "Concierto Corpus Christi",
    date: "2026-06-07",
    location: "Bonares / Plaza de la Constitución",
    hour: "Por determinar",
    description: "Concierto vespertino de Corpus Christi.",
  },
  {
    title: "Carnaval Sinfónico",
    date: "2026-07-26",
    location: "Bonares / Plaza de España",
    hour: "22:00",
    description: "Concierto de Carnaval con repertorio festivo y animado.",
  },
  {
    title: "Concierto de Verano a definir",
    date: "2026-08-30",
    location: "Bonares / Plaza de España",
    hour: "22:00",
    description: "Contenido a definir",
  },
  {
    title: "Semana Cultural Andaluza",
    date: "2026-09-26",
    location: "Bonares / Plaza de la Constitución",
    hour: "Por determinar",
    description: "Concierto de Semana Cultural Andaluza con repertorio de música tradicional andaluza.",
  },
];
