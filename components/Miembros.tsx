"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Miembro {
  nombre: string;
  instrumento: string;
  rol?: string;
  foto: string;
}

interface Seccion {
  nombre: string;
  mostrarInstrumento?: boolean;
  miembros: Miembro[];
}

const secciones: Seccion[] = [
  {
    nombre: "Dirección y Junta Directiva",
    mostrarInstrumento: false,
    miembros: [
      { nombre: "Antonio León", instrumento: "Tuba", rol: "Director", foto: "/miembros/director.png" },
      { nombre: "Diego Coronel", instrumento: "", rol: "Presidente", foto: "/miembros/presidente.png" },
      { nombre: "J. Antonio Coronel", instrumento: "", rol: "Tesorero", foto: "/miembros/tesorero.png" },
      { nombre: "Leonardo García", instrumento: "", rol: "Secretario", foto: "/miembros/secretario.jpg" },
    ]
  },
  {
    nombre: "Clarinetes",
    mostrarInstrumento: true,
    miembros: [
      { nombre: "Joaquín Pérez", instrumento: "Clarinete Ppal.", foto: "/miembros/clarinetes/joaquin.png" },
      { nombre: "Juan Antonio Coronel", instrumento: "Clarinete 1º", foto: "/miembros/clarinetes/alforillojr.png" },
      { nombre: "María León", instrumento: "Clarinete 1º", foto: "/miembros/usuario.jpg" },
      { nombre: "Paola Rodríguez", instrumento: "Clarinete 2º", foto: "/miembros/clarinetes/paola.png" },
      { nombre: "Antonio García", instrumento: "Clarinete 2º", foto: "/miembros/clarinetes/botones.png" },
      { nombre: "Martín Bautista", instrumento: "Clarinete 3º", foto: "/miembros/usuario.jpg" },
      { nombre: "Cristina García", instrumento: "Clarinete 3º", foto: "/miembros/clarinetes/cristina.png" },
      { nombre: "Manoli Vega", instrumento: "Clarinete 3º", foto: "/miembros/clarinetes/manoli.png" },
    ]
  },
  {
    nombre: "Flautas",
    mostrarInstrumento: true,
    miembros: [
      { nombre: "Luz María Díaz", instrumento: "Flauta Ppal. / Flautín", foto: "/miembros/flautas/luzmi.png" },
      { nombre: "Elena Martín", instrumento: "Flauta 1º", foto: "/miembros/flautas/elena.png" },
      { nombre: "Patricia Salvador", instrumento: "Flauta 2º", foto: "/miembros/usuario.jpg" },
    ]
  },
  {
    nombre: "Trompetas, Cornetas y Fliscornos",
    mostrarInstrumento: true,
    miembros: [
      { nombre: "Álvaro Vega", instrumento: "Trompeta", foto: "/miembros/trompetas/alvaro.png" },
      { nombre: "Rocío Pichardo", instrumento: "Trompeta", foto: "/miembros/trompetas/rocio.png" },
      { nombre: "Cristobal Camacho", instrumento: "Corneta", foto: "/miembros/trompetas/camacho.png" },
      { nombre: "Pepe López", instrumento: "Trompeta / Corneta", foto: "/miembros/usuario.jpg" },
      { nombre: "Juan Antonio Garrido", instrumento: "Trompeta", foto: "/miembros/trompetas/juan.png" },
      { nombre: "Juan Antonio Regidor", instrumento: "Trompeta", foto: "/miembros/trompetas/regidor.png" },
      { nombre: "Jose Antonio Raya", instrumento: "Trompeta", foto: "/miembros/trompetas/raya.png" },
      { nombre: "J. Antonio Coronel", instrumento: "Fliscorno", foto: "/miembros/trompetas/chupao.png" },
    ]
  },
  {
    nombre: "Trompas",
    mostrarInstrumento: false,
    miembros: [
      { nombre: "Sergio Martín", instrumento: "Platillos", foto: "/miembros/trompa/sergio.png" }
    ]
  },
  {
    nombre: "Saxofones",
    mostrarInstrumento: true,
    miembros: [
      { nombre: "Diego Coronel", instrumento: "", foto: "/miembros/presidente.png" },
      { nombre: "Ángela León", instrumento: "", foto: "/miembros/saxos/angela.png" },
      { nombre: "Marco García", instrumento: "", foto: "/miembros/usuario.jpg" },
      { nombre: "Jesús Yáñez", instrumento: "Tenor", foto: "/miembros/saxos/yañez.png" },
      { nombre: "Pedro Velo", instrumento: "", foto: "/miembros/saxos/pedro.png" },
      { nombre: "Leonardo Pérez", instrumento: "Barítono", foto: "/miembros/saxos/leonardo.png" },
    ]
  },
  {
    nombre: "Fagot",
    mostrarInstrumento: false,
    miembros: [
      { nombre: "Nani Pavón", instrumento: "", foto: "/miembros/fagot/nani.png" }
    ]
  },
  {
    nombre: "Bombardinos, Trombones y Tubas",
    mostrarInstrumento: true,
    miembros: [
      { nombre: "Isabel Camacho", instrumento: "Bombardino", foto: "/miembros/metales/isa.png" },
      { nombre: "Manuel Moreno", instrumento: "Bombardino", foto: "/miembros/metales/manuelbdno.png" },
      { nombre: "Leonardo García", instrumento: "Trombón", foto: "/miembros/metales/leo.png" },
      { nombre: "Juan Romero", instrumento: "Trombón", foto: "/miembros/usuario.jpg" },
      { nombre: "Manuel Limón", instrumento: "Trombón", foto: "/miembros/metales/manuel.png" },
      { nombre: "Cornelio Romero", instrumento: "Tuba", foto: "/miembros/metales/neli.png" },
      { nombre: "Luís Galán", instrumento: "Tuba", foto: "/miembros/usuario.jpg" },
      { nombre: "Ezequiel Márquez", instrumento: "Tuba", foto: "/miembros/metales/zequi.png" },
    ]
  },
  {
    nombre: "Percusión",
    mostrarInstrumento: false,
    miembros: [
      { nombre: "José Coronel", instrumento: "", foto: "/miembros/percu/jose.png" },
      { nombre: "Luis Rodríguez", instrumento: "", foto: "/miembros/percu/luis.png" },
      { nombre: "Manuel Jesús Rodríguez", instrumento: "", foto: "/miembros/percu/zubi.png" },
      { nombre: "Jose Manuel Pérez", instrumento: "", foto: "/miembros/usuario.jpg" },
      { nombre: "Javier Velo", instrumento: "", foto: "/miembros/percu/javi.png" },
      { nombre: "Jorgen Bautista", instrumento: "", foto: "/miembros/usuario.jpg" },
      { nombre: "Aurel Martín", instrumento: "", foto: "/miembros/usuario.jpg" },
    ]
  },
];

export default function Miembros() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-amber-400 mb-12"
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
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 border-b-2 border-amber-400 pb-2">
                {seccion.nombre}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {seccion.miembros.map((miembro, miembroIndex) => (
                  <motion.div
                    key={miembro.nombre}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (miembroIndex * 0.1) }}
                    className="bg-gray-50 rounded-lg p-3 border border-amber-400 hover:shadow-md transition-shadow duration-300 text-center"
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

                    <h3 className="text-sm font-medium text-black mb-1">
                      {miembro.nombre}
                    </h3>

                    {seccion.mostrarInstrumento !== false && (
                      <p className="text-black text-xs mb-1">
                        <span className="font-semibold">Instrumento:</span> {miembro.instrumento}
                      </p>
                    )}

                    {miembro.rol && (
                      <p className="text-black text-xs">
                        <span className="font-semibold">Rol:</span> {miembro.rol}
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