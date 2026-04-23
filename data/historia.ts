export type Hito = {
  fecha: string;
  titulo: string;
  descripcion: string;
  imagen?: string;
  alt?: string;
};

export const hitos: Hito[] = [
  {
    fecha: "1873",
    titulo: "Primera fotografía conocida",
    descripcion:
      "Foto restaurada: Primeros músicos de la banda en la puerta de la Iglesia, evidenciando su existencia en el siglo XIX.",
    imagen: "/historia/1873.png",
    alt: "Primeros músicos de la banda en 1873",
  },
  {
    fecha: "1895",
    titulo: "Finales del siglo XIX",
    descripcion:
      "Foto restaurada: Músicos de la banda a finales del siglo XIX.",
    imagen: "/historia/1895.png",
    alt: "Músicos finales siglo XIX",
  },
  {
    fecha: "1920",
    titulo: "Primeros años del siglo XX",
    descripcion:
      "Foto restaurada: Músicos de la banda en los primeros años del siglo XX, mostrando la continuidad de la tradición musical.",
    imagen: "/historia/1920.png",
    alt: "Banda año 1920",
  },
  {
    fecha: "1921",
    titulo: "Creación de la cantera musical",
    descripcion:
      "Foto restaurada: Creación de la cantera musical que garantiza el futuro artístico de la banda.",
    imagen: "/historia/1921.png",
    alt: "Creación cantera musical",
  },
  {
    fecha: "1951",
    titulo: "La banda en los años 50",
    descripcion:
      "Foto restaurada: La banda en los años 50 durante las Fiestas Patronales.",
    imagen: "/historia/1951.png",
    alt: "Banda años 50",
  },
  {
    fecha: "1960",
    titulo: "Corpus Christi en los años 60",
    descripcion:
      "Foto restaurada: Un día de nuestro Corpus Christi en los años 60.",
    imagen: "/historia/1960.png",
    alt: "Corpus años 60",
  },
  {
    fecha: "Años 80",
    titulo: "Convivencia generacional",
    descripcion:
      "Foto restaurada: Un día de convivencia en los años 80, con músicos de varias generaciones juntos.",
    imagen: "/historia/1980.png",
    alt: "Convivencia años 80",
  },
  {
    fecha: "1990",
    titulo: "Plantilla de los años 90",
    descripcion:
      "Foto de la banda en los años 90 en la puerta de la Iglesia.",
    imagen: "/historia/1990.jpg",
    alt: "Banda años 90",
  },
];