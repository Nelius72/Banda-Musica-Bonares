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
    title: "XLVII Semana Cultural Andaluza",
    date: "2026-09-26",
    location: "Bonares / Plaza de la Constitución",
    hour: "21:30",
    description: "Antología de la zarzuela acompañados del Coro Lírico de Huelva.",
  },
  {
    title: "Bajada de la Patrona",
    date: "2026-10-03",
    location: "Bonares / Ermita Sta. María Salomé",
    hour: "20:00",
    description: "Acompañamiento musical a la bajada de la Patrona desde la Ermita hasta la Iglesia Parroquial.",
  },
  {
    title: "Inaugración Fiestas Patronales",
    date: "2026-10-21",
    location: "Bonares / Recinto Ferial",
    hour: "22:00",
    description: "Acto musical de inauguración de las Fiestas junto a Perez-Vera",
  },
  {
    title: "Diana Fiestas Patronales",
    date: "2026-10-22",
    location: "Bonares / Plaza de la Constitución",
    hour: "07:00",
    description: "Alegre diana por las calles de Bonares para dar inicio a las Fiestas Patronales.",
  },
  {
    title: "Procesión de la Patrona",
    date: "2026-10-22",
    location: "Bonares / Iglesia Ntra. Sra. de la Asunción",
    hour: "12:00",
    description: "Procesión religiosa de la Patrona por las calles de Bonares.",
  },
  {
    title: "Concierto homenaje a la 3ª edad",
    date: "2026-10-23",
    location: "Bonares / Carpa Recinto Ferial",
    hour: "13:30",
    description: "Concierto de pasodobles en homenaje a la 3ª edad.",
  },
  {
    title: "Concierto clausura Fiestas Patronales",
    date: "2026-10-25",
    location: "Bonares / Recinto Ferial",
    hour: "21:30",
    description: "Concierto de clausura de las Fiestas Patronales.",
  },
  {
    title: "Subida de la Patrona",
    date: "2026-11-01",
    location: "Bonares / Recinto Ferial",
    hour: "18:00",
    description: "Subida de la Patrona desde Iglesia Ntra. Sra. de la Asunción hasta la Ermita.",
  },
];
