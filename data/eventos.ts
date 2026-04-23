export type Evento = {
  title: string;
  date: string; 
  location: string;
  description: string;
  mapUrl?: string;
};

export const eventos : Evento[] = [
  {
    title: "Cruz Chica",
    date: "2026-05-01",
    location: "Bonares",
    mapUrl: "https://maps.app.goo.gl/9MscxpabdgSNrYpA8",
    description: "Tradicional procesión de las cruces chicas.",
  },
  {
    title: "Verbena Romerito",
    date: "2026-05-07",
    location: "Bonares",
    description:
      "Acompañamiento musical en la tradicional procesión de la verbena.",
  },
  {
    title: "Romerito",
    date: "2026-05-09",
    location: "Bonares",
    description:
      "Acompañamiento musical en el tradicional recorrido del romerito.",
  },
  {
    title: "Cruces de Mayo",
    date: "2026-05-17",
    location: "Bonares",
    description: "Tradicional procesión de las 12 Cruces de Mayo.",
  },
  {
    title: "Corpus Christi",
    date: "2026-06-07",
    location: "Bonares / Plaza de la Constitución",
    description: "Tradicional procesión y posterior concierto.",
  },
];
