"use client";

import Image from "next/image";

interface Obra {
  titulo: string;
  compositor: string;
  tipo: string;
  video: string;
}

interface Premio {
  titulo: string;
  fecha: string;
  lugar: string;
  imagen: string;
  descripcion: string;
  obras: Obra[];
  posicion: "oro" | "plata" | "bronce";
}

const getMedal = (posicion: string) => {
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

const premios: Premio[] = [
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

export default function Premios() {
  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        <h1
          className="text-4xl text-center bg-linear-to-b 
             from-[#cfaf5d] 
             via-[#f5e396] 
             to-[#9e7e2c]
             bg-clip-text 
             text-transparent font-bold"
        >
          Premios y Reconocimientos
        </h1>

        {premios.map((premio, index) => (
          <div
            key={index}
            className="bg-white/5 border border-amber-200 rounded-xl p-8 backdrop-blur-sm"
          >
            {/* Título */}
            <h2 className="text-2xl font-semibold flex   gap-2">
              <span className="text-amber-300">
                {getMedal(premio.posicion)}
              </span>

              <span
                className="
                bg-linear-to-b
                from-[#cfaf5d]
                via-[#f5e396]
                to-[#9e7e2c]
                bg-clip-text
                text-transparent
              "
              >
                {premio.titulo}
              </span>
            </h2>

            <p className="text-white text-sm mt-1">
              {new Date(premio.fecha).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              | {premio.lugar}
            </p>

            {/* Imagen principal */}
            <div className="mt-6 relative w-full h-90 border border-amber-200 rounded-lg overflow-hidden">
              <Image
                src={premio.imagen}
                alt={premio.titulo}
                fill
                className="object-cover"
              />
            </div>

            {/* Descripción */}
            <p className="mt-6 text-gray-300">{premio.descripcion}</p>

            {/* Obras interpretadas */}
            <div className="mt-10 border border-amber-200 rounded-lg p-6 bg-black/40">
              <h3 className="text-2xl bg-linear-to-b
                from-[#cfaf5d]
                via-[#f5e396]
                to-[#9e7e2c]
                bg-clip-text
                text-transparent font-semibold mb-6">
                Obras interpretadas
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {premio.obras.map((obra, i) => (
                  <div key={i}>
                    <h4 className="text-lg bg-linear-to-b
                from-[#cfaf5d]
                via-[#f5e396]
                to-[#9e7e2c]
                bg-clip-text
                text-transparent font-semibold">
                      {obra.titulo}
                    </h4>

                    <p className="text-sm text-gray-300">{obra.tipo}</p>

                    <p className="text-xs text-gray-400 mb-3">
                      Compositor: {obra.compositor}
                    </p>

                    <div className="aspect-video">
                      <iframe
                        src={obra.video}
                        title={obra.titulo}
                        className="w-full h-full rounded-lg"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
