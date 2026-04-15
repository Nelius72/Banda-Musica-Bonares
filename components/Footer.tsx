import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/20 text-amber-200">

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* LOGO / IDENTIDAD */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-amber-400 font-semibold text-lg">
              A.C. Banda de Música de Bonares 1873
            </h3>

            <p className="text-sm text-amber-200/80">
              Tradición, cultura y música al servicio del pueblo desde 1873.
            </p>
          </div>

          {/* CONTACTO RÁPIDO */}
          <div className="space-y-2 text-sm">
            <h4 className="text-amber-400 font-semibold mb-2">Contacto</h4>
            <p>Pl. del Pilar, 92, 21830 Bonares, Huelva</p>
            <p>bandabonares@gmail.com</p>
            <p>+34 609 635 995</p>
          </div>

          {/* REDES SOCIALES */}
          <div className="flex flex-col gap-3">
            <h4 className="text-amber-400 font-semibold mb-2">Síguenos en redes</h4>

            <div className="flex gap-4 text-amber-200">
              <a
                href="https://www.facebook.com/bandabonares?locale=es_ES"
                target="_blank"
                className="hover:text-amber-400 transition"
              >
                <FaFacebook size={40}/>
              </a>

              <a
                href="https://www.instagram.com/bandabonaresbmb/"
                target="_blank"
                className="hover:text-amber-400 transition"
              >
                <FaInstagram size={40}/>
              </a>

              <a
                href="https://spotify.com"
                target="_blank"
                className="hover:text-amber-400 transition"
              >
                <FaSpotify size={40} />
              </a>
              <a
                href="https://www.youtube.com/@bandamusicabonares9249"
                target="_blank"
                className="hover:text-amber-400 transition"
              >
                <FaYoutube size={40} />
              </a>
            </div>
          </div>
        </div>

        {/* SEPARADOR */}
        <div className="border-t border-gold/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-amber-400">

          <p>
            © {new Date().getFullYear()} Banda de Música de Bonares . 
          </p>
            <p>Todos los Derechos Reservados</p>
          <p>
            Dev & Design: <a href="https://portfolio-personal-crb-psi-flame.vercel.app" target="_blank" className="hover:text-white transition">
              Cornelio Romero Borrero
            </a>
          </p>

        </div>

      </div>
    </footer>
  );
}