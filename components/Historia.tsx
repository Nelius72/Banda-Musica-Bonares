"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Hito = {
  fecha: string;
  titulo: string;
  descripcion: string;
  imagen?: string;
  alt?: string;
};

const hitos: Hito[] = [
  {
    fecha: "1873",
    titulo: "Primera fotografía conocida",
    descripcion: "Foto restaurada: Primeros músicos de la banda en la puerta de la Iglesia, evidenciando su existencia en el siglo XIX.",
    imagen: "/historia/1873.png",
  },
  {
    fecha: "1895",
    titulo: "Finales siglo XX",
    descripcion:
      "Foto restaurada: Músicos de la banda en a finales del siglo XIX.",
    imagen: "/historia/1895.png",
  },
  {
    fecha: "1920",
    titulo: "Primeros años del siglo XX",
    descripcion:
      "Foto restaurada: Músicos de la banda en los primeros años del siglo XX, mostrando la continuidad de la tradición musical.",
    imagen: "/historia/1920.png",
  },
  {
    fecha: "1921",
    titulo: "Creación de la cantera musical",
    descripcion:
      "Foto restaurada: Creación de la cantera musical que garantiza el futuro artístico de la banda.",
    imagen: "/historia/1921.png",
  },
  {
    fecha: "1951",
    titulo: "La banda en los años 50",
    descripcion:
      "Foto restaurada: La banda en los años 50 durante las Fiestas Patronales",
    imagen: "/historia/1951.png",
  },
  {
    fecha: "1960",
    titulo: "La banda en los años 60",
    descripcion:
      "Foto restaurada: Un día de nuestro Corpus Chrisi en los años 60.",
    imagen: "/historia/1960.png",
  },
  {
    fecha: "Años 80",
    titulo: "Banda en los años 80",
    descripcion:
      "Foto restaurada: Un día de convivencia en los años 80, con músicos de varias generaciones juntos.",
    imagen: "/historia/1980.png",
  },
  {
    fecha: "1990",
    titulo: "Plantilla de los años 90",
    descripcion:
      "Foto de la banda de los años 90 en la puerta de la Iglesia",
    imagen: "/historia/1990.jpg",
  },
];

export default function Historia() {
  const [activo, setActivo] = useState<Hito | null>(null);

  return (
    <section className="relative min-h-screen bg-neutral-950 text-white py-32 px-6 overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 opacity-25 bg-[url('/partitura.jpg')] bg-cover bg-center"></div>

      <div className="relative max-w-7xl mx-auto space-y-32">
       
        {/*MUSEO HISTÓRICO */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-light text-center mb-20 tracking-wide"
          >
            Museo Histórico
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {hitos.map((hito, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActivo(hito)}
                className="cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-amber-500 rounded-xl overflow-hidden shadow-xl group"
              >
                {/* Imagen más pequeña */}
                {hito.imagen && (
                  <div className="relative w-full h-40">
                    <Image
                      src={hito.imagen}
                      alt={hito.alt || hito.titulo}
                      fill
                      sizes="(max-width:768px) 100vw, 20vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition duration-700"
                    />
                  </div>
                )}

                {/* Contenido compacto */}
                <div className="p-4">
                  <p className="text-amber-500 text-xs tracking-widest mb-1">
                    {hito.fecha}
                  </p>
                  <h3 className="text-sm font-semibold leading-tight">
                    {hito.titulo}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===================== */}
        {/* 📜 CRÓNICA HISTÓRICA */}
        {/* ===================== */}
        <div className="space-y-24">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h3 className="text-4xl md:text-5xl font-light mb-6">
              Crónica Histórica
            </h3>
            <div className="w-24 h-0.5 bg-amber-500 mx-auto mb-8"></div>

            <p className="text-neutral-300 text-lg leading-relaxed">
              La Banda de Música de Bonares ha desarrollado una trayectoria
              histórica excepcional desde el siglo XIX, marcada por su
              participación en acontecimientos reales, religiosos, culturales y
              sociales de gran relevancia en Andalucía.
            </p>
          </motion.div>

         
          {/* 1873 - Primer registro */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 md:h-96 rounded-2xl overflow-hidden border border-amber-500"
            >
              <Image
                src="/historia/1873.png"
                alt="Foto restaurada: Primeros músicos"
                fill
                className="object-cover grayscale hover:grayscale-0 transition"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-2xl font-semibold">1873 – Primer registro</h4>
              <div className="w-16 h-0.5 bg-amber-500"></div>

              <p className="text-neutral-300 leading-relaxed">
                La primera fotografía conocida de la banda muestra a unos 20
                músicos, evidenciando la existencia de una formación consolidada
                ya en el siglo XIX.
              </p>

              <p className="text-neutral-300 leading-relaxed">
                Este documento visual marca el inicio histórico reconocido de la
                agrupación.
              </p>
            </motion.div>
          </div>

         
          {/* 1876–1882 - Reconocimiento oficial */}
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 md:order-1 order-2"
            >
              <h4 className="text-2xl font-semibold">
                1876–1882 – Reconocimiento oficial
              </h4>
              <div className="w-16 h-0.5 bg-amber-500"></div>

              <p className="text-neutral-300 leading-relaxed">
                En 1876 aparecen pagos municipales a “La Música” en las Actas
                Capitulares.
              </p>

              <p className="text-neutral-300 leading-relaxed">
                En 1880 se reconoce como “Sociedad Filarmónica” y en 1882
                participa en la visita oficial de Alfonso XII a Huelva, uno de
                sus primeros grandes actos públicos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 md:h-96 rounded-2xl overflow-hidden border border-amber-500 md:order-2 order-1"
            >
              <Image
                src="/historia/1895.png"
                alt="Visita Alfonso XII"
                fill
                className="object-cover grayscale hover:grayscale-0 transition"
              />
            </motion.div>
          </div>

          
          {/* 1913 - Expansión institucional */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 md:h-96 rounded-2xl overflow-hidden border border-amber-500"
            >
              <Image
                src="/historia/1921.png"
                alt="Expansión"
                fill
                className="object-cover grayscale hover:grayscale-0 transition"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-2xl font-semibold">
                1913 – Proyección regional
              </h4>
              <div className="w-16 h-0.5 bg-amber-500"></div>

              <p className="text-neutral-300 leading-relaxed">
                Participa en la visita de Alfonso XIII al Monasterio de La
                Rábida, consolidando su presencia en actos de gran relevancia
                institucional.
              </p>
            </motion.div>
          </div>

          
          {/* 1930–1955 - Tradición y resistencia */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 md:order-1 order-2"
            >
              <h4 className="text-2xl font-semibold">
                1930–1955 – Tradición y resistencia
              </h4>
              <div className="w-16 h-0.5 bg-amber-500"></div>

              <p className="text-neutral-300 leading-relaxed">
                En 1930 participa en las primeras peregrinaciones del Rocío
                organizadas por el Ayuntamiento de Almonte.
              </p>

              <p className="text-neutral-300 leading-relaxed">
                Tras la Guerra Civil, la banda se reduce a 15 músicos, pero
                logra sobrevivir y reconstruirse.
              </p>

              <p className="text-neutral-300 leading-relaxed">
                En 1955 obtiene el 3º premio en el Concurso Provincial de Bandas
                de Huelva.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 md:h-96 rounded-2xl overflow-hidden border border-amber-500 md:order-2 order-1"
            >
              <Image
                src="/historia/1920.png"
                alt="Tradición"
                fill
                className="object-cover grayscale hover:grayscale-0 transition"
              />
            </motion.div>
          </div>

          
          {/* 1980–Actualidad */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 md:h-96 rounded-2xl overflow-hidden border border-amber-500"
            >
              <Image
                src="/historia/1980.png"
                alt="Actualidad"
                fill
                className="object-cover grayscale hover:grayscale-0 transition"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-2xl font-semibold">1980–Actualidad</h4>
              <div className="w-16 h-0.5 bg-amber-500"></div>

              <p className="text-neutral-300 leading-relaxed">
                En 1980 llena el salón de la Caja Rural de Huelva en un
                concierto histórico.
              </p>

              <p className="text-neutral-300 leading-relaxed">
                En 2000 se constituye como Asociación Cultural.
              </p>

              <p className="text-neutral-300 leading-relaxed">
                En la actualidad desarrolla una intensa actividad nacional e
                internacional, con certámenes, grabaciones y colaboraciones con
                compositores como Ferrer Ferrán o David Rivas.
              </p>
            </motion.div>
          </div>

          {/* Cierre */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-neutral-900 border-t border-amber-500 rounded-2xl p-12"
          >
            <p className="text-xl md:text-2xl italic text-neutral-200">
              “Una historia que no solo se interpreta, sino que se vive, se
              transmite y se escucha en cada generación.”
            </p>
          </motion.div>
        </div>
      </div>

      {/* ===================== */}
      {/* 🏛 MODAL MUSEO */}
      {/* ===================== */}
      <AnimatePresence>
        {activo && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setActivo(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
            >
              <div className="bg-neutral-900 border border-amber-500 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative">
                <div className="overflow-y-auto">
                  {activo.imagen && (
                    <div className="relative w-full h-60 md:h-96">
                      <Image
                        src={activo.imagen}
                        alt={activo.titulo}
                        fill
                        className="object-contain bg-black"
                      />
                    </div>
                  )}

                  <div className="p-6 md:p-10">
                    <p className="text-amber-500 text-sm mb-2">
                      {activo.fecha}
                    </p>
                    <h3 className="text-3xl font-semibold mb-4">
                      {activo.titulo}
                    </h3>
                    <p className="text-neutral-300 leading-relaxed">
                      {activo.descripcion}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActivo(null)}
                  className="absolute top-4 right-4 text-2xl hover:text-amber-500"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
