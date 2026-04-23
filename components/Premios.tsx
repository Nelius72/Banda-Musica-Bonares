"use client";

import Image from "next/image";
import { premios, getMedal } from "@/data/premios";

export default function Premios() {
  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_center,rgba(207,175,93,0.10),transparent_60%),radial-gradient(circle_at_top,rgba(245,227,150,0.08),transparent_50%),linear-gradient(to_bottom,#0a0a0a,#0f0f0f,#0a0a0a)] py-20 px-6">
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
