export interface Obra {
  titulo: string;
  compositor: string;
  tipo: string;
  video: string;
}

export interface Premio {
  titulo: string;
  fecha: string;
  lugar: string;
  imagen: string;
  descripcion: string;
  obras: Obra[];
  posicion: "oro" | "plata" | "bronce";
}

export const getMedal = (posicion: string) => {
  switch (posicion) {
    case "oro":
      return "🥇";
    case "plata":
      return "🥈";
    case "bronce":
      return "🥉";
    default:
      return "🏆";
  }
};

export const premios: Premio[] = [
  {
    titulo: "2º Premio - 134 C.I.B.M 'Ciudad de Valencia'",
    fecha: "2022-07-16",
    lugar: "Palau de Les Arts 'Reina Sofía' - Valencia",
    imagen: "/premios/cibmvalencia.png",
    descripcion:
      "La Banda obtuvo el 2º premio en el Certamen de Bandas en la sección Primera.",
    posicion: "plata",
    obras: [
      {
        titulo: "Larga Cordobesa",
        compositor: "F.J. Martínez Gallego",
        tipo: "Obra Libre",
        video: "https://www.youtube.com/embed/87jG26z7zTQ?list=RD87jG26z7zTQ",
      },
      {
        titulo: "Bookmarks from Japan",
        compositor: "Julie Giroux",
        tipo: "Obra obligada",
        video: "https://www.youtube.com/embed/ig6aRcE4UnE?list=RDig6aRcE4UnE",
      },
      {
        titulo: "De Cai",
        compositor: "Pascual Piqueras",
        tipo: "Obra obligada",
        video: "https://www.youtube.com/embed/-9TdndcXZNg?list=RD-9TdndcXZNg",
      },
      {
        titulo: "Bona-Res",
        compositor: "Ferrer Ferran",
        tipo: "Obra libre",
        video: "https://www.youtube.com/embed/eAljmVRRRjc?list=RDeAljmVRRRjc",
      },
    ],
  },
  {
    titulo: "Primer Premio - X Certamen nacional de Bandas 'Villa de Olivares'",
    fecha: "2025-06-06",
    lugar: "Palacio del Conde-Duque - Olivares (Sevilla)",
    imagen: "/premios/olivares.png",
    descripcion:
      "La Banda obtuvo el 1º premio en el X Certamen nacional de Bandas 'Villa de Olivares'.",
    posicion: "oro",
    obras: [
      {
        titulo: "Bonares 1873",
        compositor: "David Rivas",
        tipo: "Obra Libre",
        video: "https://www.youtube.com/embed/fAgnDq5i85w",
      },
      {
        titulo: "Bona-Res",
        compositor: "Ferrer Ferran",
        tipo: "Obra Libre",
        video: "https://www.youtube.com/embed/ngLOiqH_tco?list=RDngLOiqH_tco",
      },
      {
        titulo: "Suite Nº 1",
        compositor: "Pedro Morales",
        tipo: "Obra obligada",
        video: "https://www.youtube.com/embed/EFW835qYxOE",
      },
    ],
  },
];