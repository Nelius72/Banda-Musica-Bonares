"use client";

import { useState } from "react";
import {
  marchasProcesionales,
  pasodobles,
  obrasSinfonicas,
  Obra,
} from "@/data/repertorio";

export default function Repertorio() {
  const [busqueda, setBusqueda] = useState("");
  const [abierto, setAbierto] = useState<string | null>(null);

  const toggle = (tipo: string) => {
    setAbierto((prev) => (prev === tipo ? null : tipo));
  };

  const filtrar = (lista: Obra[]) =>
    lista.filter((obra) =>
      obra.titulo.toLowerCase().includes(busqueda.toLowerCase()),
    );

  return (
    <section className="min-h-screen bg-black text-amber-200 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-center text-amber-400 font-[Cinzel] tracking-widest">
          Repertorio
        </h1>

        {/* BUSCADOR */}
        <div className="mt-10">
          <input
            type="text"
            placeholder="Buscar obra..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full p-3 bg-[#111] border border-gold/30 rounded-md 
            focus:outline-none focus:border-gold transition"
          />
        </div>

        {/* ACORDEONES */}
        <div className="mt-12 space-y-6">
          <Accordion
            titulo="Marchas Procesionales"
            count={marchasProcesionales.length}
            abierto={abierto === "marcha"}
            onClick={() => toggle("marcha")}
            obras={filtrar(marchasProcesionales)}
          />

          <Accordion
            titulo="Pasodobles"
            count={pasodobles.length}
            abierto={abierto === "pasodoble"}
            onClick={() => toggle("pasodoble")}
            obras={filtrar(pasodobles)}
          />

          <Accordion
            titulo="Obras Sinfónicas"
            count={obrasSinfonicas.length}
            abierto={abierto === "sinfonica"}
            onClick={() => toggle("sinfonica")}
            obras={filtrar(obrasSinfonicas)}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- ACCORDION ---------------- */

function Accordion({
  titulo,
  count,
  abierto,
  onClick,
  obras,
}: {
  titulo: string;
  count: number;
  abierto: boolean;
  onClick: () => void;
  obras: Obra[];
}) {
  return (
    <div className="border border-gold/20 rounded-md overflow-hidden">
      {/* HEADER */}
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-6 py-4 
        text-left text-gold font-semibold tracking-wide 
        hover:bg-gold/10 transition"
      >
        <span className="flex items-center gap-2">
          {titulo}
          <span className="text-xs text-amber-200/60">({count})</span>
        </span>

        <span className="text-xl">{abierto ? "−" : "+"}</span>
      </button>

      {/* CONTENIDO */}
      <div className={`${abierto ? "p-4" : "hidden"}`}>
        {obras.length === 0 ? (
          <p className="text-sm text-amber-200/60">
            No se encontraron resultados.
          </p>
        ) : (
          <div className="space-y-2">
            {obras.map((obra) => (
              <a
                key={obra.id}
                href={obra.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between py-2 border-b border-gold/10 
                hover:text-gold transition"
              >
                <span className="normal-case font-[Playfair_Display]">
                  {obra.titulo}
                </span>

                <span className="hover:text-white  transition">▶</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
