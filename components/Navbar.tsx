"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 bg-deepBlack/90 backdrop-blur-md text-amber-400 border-b border-gold shadow-md">

      {/* HEADER */}
      <div className="relative flex flex-col md:flex-row md:items-center h-auto md:h-24 px-4 py-3 md:py-0">

        {/* LEFT - LOGO + TITLE */}
        <div className="flex items-center justify-start gap-4 md:flex-1">

          {/* LOGO */}
          <button
            onClick={() => {
              document.getElementById("inicio")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Logo Banda"
              width={80}
              height={80}
              className="object-contain"
              priority
            />
          </button>

          {/* TITLE */}
          <span className="text-sm md:text-2xl font-semibold tracking-wider text-gold whitespace-nowrap">
            A.C. Banda de Música de Bonares 1873
          </span>
        </div>

        {/* RIGHT - DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-12 text-sm tracking-wide md:ml-auto">

          <Dropdown title="Sobre Nosotros">
            <button
              onClick={() => {
                document.getElementById("historia")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="block px-6 py-3 text-sm text-gold hover:bg-gold hover:text-white rounded-md transition"
            >
              Historia
            </button>
            <DropdownItem text="Junta Directiva" />
            <DropdownItem text="Componentes" />
            <DropdownItem text="Premios" />
            <DropdownItem text="Compositores" />
          </Dropdown>

          <Dropdown title="Repertorio">
            <DropdownItem text="Marchas Procesionales" />
            <DropdownItem text="Pasodobles" />
            <DropdownItem text="Obras Sinfónicas" />
          </Dropdown>

          <button
            onClick={() => {
              document.getElementById("eventos")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="block px-6 py-3 text-sm text-gold hover:bg-gold hover:text-white rounded-md transition"
          >
            Eventos
          </button>

          <Link href="#" className="hover:text-gold transition">
            Contacto
          </Link>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gold self-center mt-3"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden px-6 pb-6 pt-2 bg-deepBlack border-t border-gold/20 space-y-6"
          >

            <MobileSection title="About Us">
              <MobileLink
                text="Historia"
                onClick={() => {
                  handleClose();
                  document.getElementById("historia")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              />
              <MobileLink text="Junta Directiva" onClick={handleClose} />
              <MobileLink text="Componentes" onClick={handleClose} />
              <MobileLink text="Premios" onClick={handleClose} />
              <MobileLink text="Compositores" onClick={handleClose} />
            </MobileSection>

            <MobileSection title="Repertorio">
              <MobileLink text="Marchas Procesionales" onClick={handleClose} />
              <MobileLink text="Pasodobles" onClick={handleClose} />
              <MobileLink text="Obras Sinfónicas" onClick={handleClose} />
            </MobileSection>

            <MobileLink
              text="Eventos"
              onClick={() => {
                handleClose();
                document.getElementById("eventos")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            />

            <MobileLink text="Contacto" onClick={handleClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ---------------- DESKTOP ---------------- */

function Dropdown({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative group">
      <button className="hover:text-gold transition">{title}</button>

      <div className="absolute left-0 top-10 w-64 bg-[#111] border border-gold/40 rounded-md opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 shadow-xl">
        {children}
      </div>
    </div>
  );
}

function DropdownItem({ text }: { text: string }) {
  return (
    <Link
      href="#"
      className="block px-6 py-3 text-sm text-gold hover:bg-gold hover:text-white rounded-md transition"
    >
      {text}
    </Link>
  );
}

/* ---------------- MOBILE ---------------- */

function MobileSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-gold font-semibold mb-2">{title}</p>
      <div className="pl-3 space-y-2">{children}</div>
    </div>
  );
}

function MobileLink({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <Link
      href="#"
      onClick={onClick}
      className="block text-amber-300 hover:text-gold transition"
    >
      {text}
    </Link>
  );
}