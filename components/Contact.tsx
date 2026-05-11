"use client";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mrejrkkz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");

        
        setFormData({
          nombre: "",
          email: "",
          mensaje: "",
        });
      } else {
        setStatus("error");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contacto"
      className="bg-[radial-gradient(circle_at_center,rgba(207,175,93,0.10),transparent_60%),radial-gradient(circle_at_top,rgba(245,227,150,0.08),transparent_50%),linear-gradient(to_bottom,#0a0a0a,#0f0f0f,#0a0a0a)] py-20 border-t border-gold/20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold bg-linear-to-b from-[#cfaf5d] via-[#f5e396] to-[#9e7e2c] bg-clip-text text-transparent text-center tracking-widest font-[Cinzel]">
          Contacto
        </h2>

        <p className="mt-3 text-white text-center text-sm md:text-base">
          Ponte en contacto con la Banda de Música de Bonares
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* LOGO */}
          <div className="border border-amber-300 rounded-md p-6 flex items-center justify-center bg-black">
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
            <div className="space-y-4 text-white">
              <div>
                <h3 className="bg-linear-to-b from-[#cfaf5d] via-[#f5e396] to-[#9e7e2c] bg-clip-text text-transparent font-semibold">
                  Dirección
                </h3>
                <p>Pl. del Pilar, 92, 21830 Bonares, Huelva</p>
              </div>

              <div>
                <a href="mailto:bandabonares@gmail.com">
                  <h3 className="bg-linear-to-b from-[#cfaf5d] via-[#f5e396] to-[#9e7e2c] bg-clip-text text-transparent font-semibold">
                    Email
                  </h3>
                  <p className="hover:text-amber-200 transition">
                    bandabonares@gmail.com
                  </p>
                </a>
              </div>

              <div>
                <a href="tel:+34609635995">
                  <h3 className="bg-linear-to-b from-[#cfaf5d] via-[#f5e396] to-[#9e7e2c] bg-clip-text text-transparent font-semibold">
                    Teléfono
                  </h3>
                  <p className="hover:text-amber-200 transition">
                    +34 609 635 995
                  </p>
                </a>
              </div>

              <div>
                <h3 className="bg-linear-to-b from-[#cfaf5d] via-[#f5e396] to-[#9e7e2c] bg-clip-text text-transparent font-semibold mb-2">
                  Redes sociales
                </h3>

                <div className="flex items-center gap-4">
                  <a href="https://www.facebook.com/bandabonares?locale=es_ES" target="_blank">
                    <FaFacebook size={30} />
                  </a>
                  <a href="https://www.instagram.com/bandabonaresbmb/" target="_blank">
                    <FaInstagram size={30} />
                  </a>
                  <a href="https://spotify.com" target="_blank">
                    <FaSpotify size={30} />
                  </a>
                  <a href="https://www.youtube.com/@bandamusicabonares9249" target="_blank">
                    <FaYoutube size={30} />
                  </a>
                </div>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                required
                className="w-full p-3 bg-black border border-amber-300 rounded-md text-amber-200"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full p-3 bg-black border border-amber-300 rounded-md text-amber-200"
              />

              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Mensaje"
                rows={4}
                required
                className="w-full p-3 bg-black border border-amber-300 rounded-md text-amber-200"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 bg-amber-200 text-black font-semibold rounded-md hover:bg-white transition disabled:opacity-50"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm text-center">
                  ✅ Mensaje enviado correctamente
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  ❌ Hubo un error al enviar el mensaje
                </p>
              )}
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