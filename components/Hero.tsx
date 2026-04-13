"use client";
import Image from "next/image";


export default function Hero() {
  const scrollToEvents = () => {
    document.getElementById("eventos")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="inicio"
      className="relative h-[80vh] flex items-center justify-center text-center bg-black overflow-hidden"
    >
      {/* Fondo */}
      <Image
        src="/hero.jpg"
        alt="Banda de Música"
        fill
        priority
        className="object-cover opacity-70"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl px-6">

        <h1 className="text-3xl md:text-6xl font-semibold tracking-widest text-white uppercase font-[Cinzel]">
          Música que trasciende el tiempo
        </h1>

        <p className="mt-6 text-sm md:text-lg text-amber-200 tracking-wide">
          Más de un siglo de tradición, emoción y cultura musical en cada nota.
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">

          {/* BOTÓN EVENTOS */}
          <button
            onClick={scrollToEvents}
            className="px-6 py-3 border border-gold text-amber-400 hover:bg-gold hover:text-white transition rounded-md tracking-wide"
          >
            Próximos Actos
          </button>

          {/* OTRO BOTÓN (puedes dejarlo o cambiarlo luego) */}
          <button className="px-6 py-3 border border-gold text-amber-400 hover:bg-gold hover:text-white transition rounded-md tracking-wide">
            Nuestro Repertorio
          </button>

        </div>
      </div>
    </section>
  );
}