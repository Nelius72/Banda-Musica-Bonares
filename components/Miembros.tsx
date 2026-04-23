"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { secciones, Seccion, Miembro } from "@/data/miembros";


export default function Miembros() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,rgba(207,175,93,0.10),transparent_60%),radial-gradient(circle_at_top,rgba(245,227,150,0.08),transparent_50%),linear-gradient(to_bottom,#0a0a0a,#0f0f0f,#0a0a0a)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center bg-linear-to-b 
             from-[#cfaf5d] 
             via-[#f5e396] 
             to-[#9e7e2c]
             bg-clip-text 
             text-transparent mb-12"
        >
          Nuestros Componentes
        </motion.h1>

        <div className="space-y-12">
          {secciones.map((seccion, index) => (
            <motion.div
              key={seccion.nombre}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-transparent  rounded-lg shadow-lg p-6"
            >
              <h2
                className="text-2xl font-semibold bg-linear-to-b 
             from-[#cfaf5d] 
             via-[#f5e396] 
             to-[#9e7e2c]
             bg-clip-text 
             text-transparent mb-6 border-b-2 border-amber-200 pb-2"
              >
                {seccion.nombre}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {seccion.miembros.map((miembro, miembroIndex) => (
                  <motion.div
                    key={miembro.nombre}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + miembroIndex * 0.1,
                    }}
                    className="
                    bg-neutral-900 
                    border border-amber-200 
                    rounded-lg 
                    p-3 
                    hover:shadow-xl 
                    hover:border-amber-400
                    transition-all duration-300 
                    text-center
                    "
                  >
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden">
                      <Image
                        src={miembro.foto}
                        alt={miembro.nombre}
                        width={94}
                        height={94}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <h3 className="text-sm font-medium bg-linear-to-b 
             from-[#cfaf5d] 
             via-[#f5e396] 
             to-[#9e7e2c]
             bg-clip-text 
             text-transparent mb-1">
                      {miembro.nombre}
                    </h3>

                    {seccion.mostrarInstrumento !== false && (
                      <p className="text-white text-xs mb-1">
                        <span className="font-semibold">Instrumento:</span>{" "}
                        {miembro.instrumento}
                      </p>
                    )}

                    {miembro.cargo && (
                      <p className="text-white text-xs">
                        <span className="font-semibold">Cargo:</span>{" "}
                        {miembro.cargo}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
