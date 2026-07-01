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
    title: "Carnaval Sinfónico",
    date: "2026-07-26",
    location: "Bonares / Plaza de España",
    hour: "22:00",
    description: "Revive la magia del Carnaval bajo una perspectiva musical impresionante.",
  },
  {
    title: "José Luís Pérez-Vera",
    date: "2026-08-30",
    location: "Bonares / Plaza de España",
    hour: "22:00",
    description: "La música y las raíces andaluzas se dan la mano en una cita inolvidable",
  },
  {
    title: "Semana Cultural Andaluza",
    date: "2026-09-26",
    location: "Bonares / Plaza de la Constitución",
    hour: "Por determinar",
    description: "Concierto de Semana Cultural Andaluza con repertorio de música tradicional andaluza.",
  },
];
