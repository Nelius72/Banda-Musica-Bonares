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
  miembros: Miembro[];
}

const secciones: Seccion[] = [
  {
    nombre: "Dirección y Junta Directiva",
    miembros: [
      { nombre: "Antonio León", instrumento: "Tuba", rol: "Director", foto: "/miembros/director.png" },
      { nombre: "Diego Coronel", instrumento: "", rol: "Presidente", foto: "/miembros/presidente.png" },
      { nombre: "J. Antonio Coronel", instrumento: "", rol: "Tesorero", foto: "/miembros/tesorero.png" },
      { nombre: "Leonardo García", instrumento: "", rol: "Secretario", foto: "/miembros/secretario.jpg" },
    ]
  },
  {
    nombre: "Clarinetes",
    miembros: [
      { nombre: "Joaquín Pérez",  foto: "/images/miembros/maria-garcia.jpg" },
      { nombre: "Juan Antonio Coronel", instrumento: "", foto: "/miembros/" },
      { nombre: "María León", instrumento: "", foto: "/images/miembros/ana-rodriguez.jpg" },
      { nombre: "Paola Domínguez", instrumento: "", foto: "/images/miembros/pedro-sanchez.jpg" },
      { nombre: "Botones",  foto: "/images/miembros/maria-garcia.jpg" },
      { nombre: "Martín Bautista", instrumento: "", foto: "/miembros/" },
      { nombre: "Cristina García", instrumento: "", foto: "/images/miembros/ana-rodriguez.jpg" },
      { nombre: "Manoli Vega", instrumento: "", foto: "/images/miembros/pedro-sanchez.jpg" },
    ]
  },
  {
    nombre: "Flautas",
    miembros: [
      { nombre: "Luz María Díaz", instrumento: "", foto: "/images/miembros/laura-martin.jpg" },
      { nombre: "Elena Martín", instrumento: "", foto: "/images/miembros/miguel-fernandez.jpg" },
      { nombre: "Patricia", instrumento: "", foto: "/images/miembros/sofia-ruiz.jpg" },
     
    ]
  },
  {
    nombre: "Trompetas, Cornetas y Fliscornos",
    miembros: [
      { nombre: "Álvaro Vega", instrumento: "", foto: "/images/miembros/carlos-rodriguez.jpg" },
      { nombre: "Rocío Pichardo", instrumento: "", foto: "/images/miembros/isabel-fernandez.jpg" },
      { nombre: "Cristobal Camacho", instrumento: "", foto: "/images/miembros/miguel-torres.jpg" },
      { nombre: "Pepe López", instrumento: "", foto: "/images/miembros/laura-martin.jpg" },
      { nombre: "Juan Antonio Lucena", instrumento: "", foto: "/images/miembros/laura-martin.jpg" },
      { nombre: "Juan Antonio Regidor", instrumento: "", foto: "/images/miembros/miguel-fernandez.jpg" },
      { nombre: "Jose Antonio Raya", instrumento: "", foto: "/images/miembros/sofia-ruiz.jpg" },
      { nombre: "J. Antonio Coronel", instrumento: "", foto: "/images/miembros/carlos-rodriguez.jpg" },
    ]
  },
  {
    nombre: "Trompas",
    miembros: [
      { nombre: "Sergio Martín", instrumento: "Platillos", foto: "/images/miembros/carmen-jimenez.jpg" }
    ]
  },
  {
    nombre: "Saxofones",
    miembros: [
      { nombre: "Diego Coronel", instrumento: "", foto: "/images/miembros/carlos-rodriguez.jpg" },
      { nombre: "Ángela León", instrumento: "", foto: "/images/miembros/isabel-fernandez.jpg" },
      { nombre: "Marco García", instrumento: "", foto: "/images/miembros/miguel-torres.jpg" },
      { nombre: "Jesús Yáñez", instrumento: "", foto: "/images/miembros/laura-martin.jpg" },
      { nombre: "Lola", instrumento: "", foto: "/images/miembros/miguel-fernandez.jpg" },
      { nombre: "Salomé Mota", instrumento: "", foto: "/images/miembros/sofia-ruiz.jpg" },
      { nombre: "Pedro Polaco", instrumento: "", foto: "/images/miembros/carlos-rodriguez.jpg" },
      { nombre: "Leonardo Pérez", instrumento: "", foto: "/images/miembros/laura-martin.jpg" },

    ]
  },
  {
    nombre: "Fagot",
    miembros: [
      { nombre: "Nani Pavón", instrumento: "", foto: "/images/miembros/carlos-rodriguez.jpg" }
    ]
  },
  { nombre: "Bombardinos, Trombones y Tubas",
    miembros: [
      { nombre: "Leonardo García", instrumento: "", foto: "/images/miembros/carlos-rodriguez.jpg" },
      { nombre: "Manuel Niño", instrumento: "", foto: "/images/miembros/isabel-fernandez.jpg" },
      { nombre: "Juan", instrumento: "", foto: "/images/miembros/miguel-torres.jpg" },
      { nombre: "Manuel Limón", instrumento: "", foto: "/images/miembros/laura-martin.jpg" },
      { nombre: "Cornelio Romero", instrumento: "", foto: "/images/miembros/miguel-fernandez.jpg" },
      { nombre: "Luís Galán", instrumento: "", foto: "/images/miembros/sofia-ruiz.jpg" },
      { nombre: "Ezequiel 'La Bestia' Márquez", instrumento: "", foto: "/images/miembros/carlos-rodriguez.jpg" },
       
    ]
    },
    { nombre: "Percusión",
    miembros: [
      { nombre: "José Coronel", instrumento: "", foto: "/images/miembros/carlos-rodriguez.jpg" },
      { nombre: "Luis Rodríguez", instrumento: "", foto: "/images/miembros/isabel-fernandez.jpg" },
      { nombre: "Manuel Jesús Rodríguez", instrumento: "", foto: "/images/miembros/miguel-torres.jpg" },
      { nombre: "Jose Manuel Pérez", instrumento: "", foto: "/images/miembros/laura-martin.jpg" },
      { nombre: "Javier Bizquillo", instrumento: "", foto: "/images/miembros/miguel-fernandez.jpg" },
      { nombre: "Jorgen Bautista", instrumento: "", foto: "/images/miembros/sofia-ruiz.jpg" },
      { nombre: "Aurel Martín", instrumento: "", foto: "/images/miembros/carlos-rodriguez.jpg" },
       
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
              className="bg-gray-100 rounded-lg shadow-lg p-6"
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
                     {/*
                    <p className="text-black text-xs mb-1">
                      <span className="font-semibold">Instrumento:</span> {miembro.instrumento}
                    </p>*/}
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