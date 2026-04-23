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

  //  FILTRADOS
  const marchasFiltradas = marchasProcesionales.filter((obra) =>
    obra.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const pasodoblesFiltrados = pasodobles.filter((obra) =>
    obra.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const sinfonicasFiltradas = obrasSinfonicas.filter((obra) =>
    obra.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(245,227,150,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(158,126,44,0.10),transparent_60%),linear-gradient(to_bottom,#0b0b0b,#0f0f0f,#0b0b0b)] text-amber-200 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-4xl md:text-5xl text-center bg-linear-to-b 
          from-[#cfaf5d] 
          via-[#f5e396] 
          to-[#9e7e2c]
          bg-clip-text 
          text-transparent  font-[Cinzel] tracking-widest"
        >
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
            count={marchasFiltradas.length}
            total={marchasProcesionales.length}
            abierto={abierto === "marcha"}
            onClick={() => toggle("marcha")}
            obras={marchasFiltradas}
          />

          <Accordion
            titulo="Pasodobles"
            count={pasodoblesFiltrados.length}
            total={pasodobles.length}
            abierto={abierto === "pasodoble"}
            onClick={() => toggle("pasodoble")}
            obras={pasodoblesFiltrados}
          />

          <Accordion
            titulo="Obras Sinfónicas"
            count={sinfonicasFiltradas.length}
            total={obrasSinfonicas.length}
            abierto={abierto === "sinfonica"}
            onClick={() => toggle("sinfonica")}
            obras={sinfonicasFiltradas}
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
  total,
  abierto,
  onClick,
  obras,
}: {
  titulo: string;
  count: number;
  total: number;
  abierto: boolean;
  onClick: () => void;
  obras: Obra[];
}) {
  const filtrando = count !== total;

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
          <span
            className={`text-xs ${
              filtrando ? "text-amber-200" : "text-amber-200/60"
            }`}
          >
            ({count}
            {filtrando })
          </span>
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
                <span className="normal-case font-[Cinzel]">
                  {obra.titulo}
                </span>

                <span className="hover:text-white transition">▶</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}