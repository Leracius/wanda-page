import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#9A8F88]">
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-around px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="h-24 w-24" />

        {/* Botón hamburguesa (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#524C48] md:hidden"
          aria-label="Abrir menú"
        >
          {/* ícono */}
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                open
                  ? "M6 18L18 6M6 6l12 12" // X
                  : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" // 3 rayitas
              }
            />
          </svg>
        </button>

        {/* Links desktop */}
        <nav className="hidden space-x-6 md:flex flex items-center rounded-md px-4 py-2 bg-white">
          <a href="#" className="text-gray-700 hover:text-indigo-600">
            Inicio
          </a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">
            Servicios
          </a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">
            Sobre mí
          </a>
          <a
            href="#"
            className="rounded-md bg-[#9A8F88] px-4 py-2 text-white hover:bg-[#524C48]"
          >
            Contacto
          </a>
        </nav>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="bg-white md:hidden">
          <nav className="space-y-1 px-4 py-3">
            <a
              href="#"
              className="block rounded px-2 py-2 text-gray-700 hover:bg-gray-100"
            >
              Inicio
            </a>
            <a
              href="#"
              className="block rounded px-2 py-2 text-gray-700 hover:bg-gray-100"
            >
              Servicios
            </a>
            <a
              href="#"
              className="block rounded px-2 py-2 text-gray-700 hover:bg-gray-100"
            >
              Sobre mí
            </a>
            <a
              href="#"
              className="block rounded bg-[#9A8F88] px-2 py-2 text-white hover:bg-[#524C48]"
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
