import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className=" shadow-md bg-indigo-300 w-full md:sticky top-0 z-50 md:rounded-none rounded-2xl mt-2 md:mt-0 mb-2 md:mb-0">
      <a
        href="https://wa.me/543513552534?text=Hola%20Wanda%20😊"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/WhatsApp_icon.png"
          className="h-20 w-20 fixed bottom-16 right-4 z-10"
          alt=""
        />
      </a>

      <div className="mx-auto flex h-24 justify-between md:px-0 items-center  px-4 md:px-0 sm:px-6 lg:px-8">
        {/* Logo */}
        <img
          src="/logo-white.png"
          alt="Logo"
          className="h-20 w-20 rounded-full"
        />

        {/* Botón hamburguesa (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center p-3 m-3 rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#524C48] md:hidden"
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
        <nav className="hidden space-x-6 md:flex flex items-center text-xl px-4 py-2">
          <a href="#services" className="text-gray-700 hover:text-indigo-600">
            Servicios
          </a>
          <a href="#about" className="text-gray-700 hover:text-indigo-600">
            Sobre mí
          </a>
          <a
            href="https://wa.me/543513552534?text=Hola%20quiero%20saber%20más%20sobre%20tus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-400 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105"
          >
            Contacto
          </a>
        </nav>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="bg-white md:hidden rounded-b-2xl ">
          <nav className="space-y-1 px-4 py-3 ">
            <a
              href="#services"
              className="block rounded px-2 py-2 text-gray-700 hover:bg-gray-100"
            >
              Servicios
            </a>
            <a
              href="#about"
              className="block rounded px-2 py-2 text-gray-700 hover:bg-gray-100"
            >
              Sobre mí
            </a>
            <a
              href="https://wa.me/543513552534?text=Hola%20quiero%20saber%20más%20sobre%20tus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-400 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105"
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
