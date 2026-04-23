"use client";

import Image from "next/image";
import { eventos } from "@/data/eventos";


export default function Events() {
  return (
    <section
      id="eventos"
      className="relative py-20 border-t border-gold/20 overflow-hidden"
    >
      {/* Fondo */}
      <div className="absolute inset-0">
        <Image
          src="/eventos.jpg"
          alt="Eventos Banda"
          fill
          priority
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Título */}
        <h2 className="text-2xl md:text-4xl font-semibold bg-linear-to-b 
             from-[#cfaf5d] 
             via-[#f5e396] 
             to-[#9e7e2c]
             bg-clip-text 
             text-transparent text-center tracking-widest font-[Cinzel]">
          Próximos Eventos
        </h2>

        <p className="mt-3 text-white text-center text-sm md:text-base">
          Agenda musical de la Banda de Música de Bonares
        </p>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {eventos.map((event, index) => (
            <div
              key={index}
              className="border border-gold/30 rounded-md p-3 bg-[#0a0a0a]/80
              hover:border-gold transition flex flex-col justify-between backdrop-blur-sm"
            >
              <div className="text-white text-sm uppercase tracking-widest">
                {new Date(event.date).toLocaleDateString("es-ES", {
                  weekday: "long",
                })}
              </div>

              <div className="text-white text-2xl font-bold leading-none">
                {new Date(event.date).getDate()}
              </div>

              <div className="text-amber-200 text-[10px] uppercase tracking-widest">
                {new Date(event.date).toLocaleString("es-ES", {
                  month: "long",
                  year: "numeric",
                })}
              </div>

              <h3 className="mt-2 text-sm font-semibold text-white leading-tight">
                {event.title}
              </h3>

              <p className="mt-1 text-amber-200 text-xs line-clamp-3">
                {event.description}
              </p>

              <p className="mt-2 text-[10px] text-amber-300">
                📍{" "}
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {event.location}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
