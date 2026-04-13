import Link from "next/link";
import Image from "next/image";

export default function HistoryPreview() {
  return (
    <section id="historia" className= "relative py-24 bg-black border-t border-gold/20 overflow-hidden">

      {/* Fondo opcional */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* GRID 5 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">

          {/* IMAGEN (más grande y a la izquierda) */}
          <div className="relative w-full h-87.5 md:h-112.5 md:col-span-3 -translate-x-2 md:-translate-x-6">

            <Image
              src="/historia.jpg"
              alt="Banda antigua"
              fill
              className="object-cover rounded-lg border-l-4 border-gold shadow-xl grayscale hover:grayscale-0 transition duration-500"
            />
          </div>

          {/* TEXTO */}
          <div className="md:col-span-2">

            <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-widest font-[Cinzel]">
              Nuestra Historia
            </h2>

            <p className="mt-6 text-amber-200 text-sm md:text-lg leading-relaxed">
              Fundada en 1873, la A.C. Banda de Música de Bonares ha sido
              durante generaciones un pilar cultural en nuestro municipio.
              A lo largo de más de un siglo, hemos acompañado procesiones,
              conciertos y certámenes, manteniendo viva la tradición musical
              y transmitiéndola de generación en generación.
            </p>

            <p className="mt-4 text-amber-300 text-sm md:text-base">
              Una historia escrita con música, esfuerzo y emoción colectiva.
            </p>

            {/* BOTÓN */}
            <div className="mt-8">
              <Link
                href="/historia"
                className="inline-block px-6 py-3 border border-amber-400 text-white hover:bg-gold hover:text-amber-200 transition rounded-md tracking-wide"
              >
                Ver historia completa
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}