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
    title: "Cruces de Mayo",
    date: "2026-05-17",
    location: "Bonares",
    hour: "11:30",
    description: "Tradicional procesión de las 12 Cruces de Mayo.",
  },
  {
    title: "Serenata a las Cruces",
    date: "2026-05-17",
    location: "Bonares",
    hour: "20:30",
    description: "Visita a las Cruces de Mayo acompañada de música en directo.",
  },
  {
    title: "Corpus Christi",
    date: "2026-06-07",
    location: "Bonares / Plaza de la Constitución",
    hour: "Por determinar",
    description: "Tradicional procesión y acto de las caidas",
  },
  {
    title: "Concierto Corpus Christi",
    date: "2026-06-07",
    location: "Bonares / Plaza de la Constitución",
    hour: "Por determinar",
    description: "Concierto vespertino de Corpus Christi.",
  },
  {
    title: "Conciertos de Verano",
    date: "2026-08-01",
    location: "Bonares / Plaza de España",
    hour: "Por determinar",
    description: "Conciertos al aire libre durante el verano.",
  },
];
