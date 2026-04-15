"use client";
import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contacto" className="bg-black py-20 border-t border-gold/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center tracking-widest font-[Cinzel]">
          Contacto
        </h2>

        <p className="mt-3 text-amber-200 text-center text-sm md:text-base">
          Ponte en contacto con la Banda de Música de Bonares
        </p>

        {/* GRID PRINCIPAL */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* LOGO GRANDE */}
          <div className="border border-amber-300 rounded-md p-6 flex items-center justify-center bg-[#0a0a0a]">
            <Image
              src="/logo.png"
              alt="Logo Banda"
              width={220}
              height={220}
              className="object-contain"
            />
          </div>

          {/* INFO + FORM */}
          <div className="border border-amber-300 rounded-md p-6 bg-[#0a0a0a] flex flex-col justify-between">
            {/* INFO */}
            <div className="space-y-4 text-amber-200">
              <div>
                <h3 className="text-amber-400 font-semibold">Dirección</h3>
                <p>Pl. del Pilar, 92, 21830 Bonares, Huelva</p>
              </div>

              <div>
                <h3 className="text-amber-400 font-semibold">Email</h3>
                <p>bandabonares@gmail.com</p>
              </div>

              <div>
                <h3 className="text-amber-400 font-semibold">Teléfono</h3>
                <p>+34 609 635 995</p>
              </div>

              <div>
                <h3 className="text-amber-400 font-semibold mb-2">
                  Redes sociales
                </h3>

                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/bandabonares?locale=es_ES"
                    target="_blank"
                    className="hover:text-amber-400 transition"
                  >
                    <FaFacebook size={30} />
                  </a>

                  <a
                    href="https://www.instagram.com/bandabonaresbmb/"
                    target="_blank"
                    className="hover:text-amber-400 transition"
                  >
                    <FaInstagram size={30} />
                  </a>

                  <a
                    href="https://spotify.com"
                    target="_blank"
                    className="hover:text-amber-400 transition"
                  >
                    <FaSpotify size={30} />
                  </a>

                  <a
                    href="https://www.youtube.com/@bandamusicabonares9249"
                    target="_blank"
                    className="hover:text-amber-400 transition"
                  >
                    <FaYoutube size={30} />
                  </a>
                </div>
              </div>
            </div>

            {/* FORM */}
            <form className="mt-6 space-y-3">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-3 bg-black border border-amber-300 rounded-md text-amber-200"
              />
              <input
                type="email"
                placeholder="Email"
                suppressHydrationWarning
                className="w-full p-3 bg-black border border-amber-300 rounded-md text-amber-200"
              />
              <textarea
                placeholder="Mensaje"
                rows={4}
                className="w-full p-3 bg-black border border-amber-300 rounded-md text-amber-200"
              />
              <button
                type="submit"
                className="w-full py-3 bg-amber-400 text-black font-semibold rounded-md hover:bg-white transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* MAPA */}
          <div className="border border-amber-300 rounded-md overflow-hidden bg-[#0a0a0a]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1586.4535260775176!2d-6.688611209392576!3d37.321029322817765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11e8e0140cfcb3%3A0xa8a7a74dad9e61f0!2sCasa%20Municipal%20De%20La%20M%C3%BAsica!5e0!3m2!1ses!2ses!4v1776094466173!5m2!1ses!2ses"
              className="w-full h-full min-h-100"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
