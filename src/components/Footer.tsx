import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 px-8 flex flex-col md:flex-row items-center justify-between">
      {/* Texto o marca */}
      <p className="text-sm md:text-base text-gray-400">
        © {new Date().getFullYear()} Wanda Janikow. Todos los derechos
        reservados.
      </p>

      {/* Ícono Instagram */}
      <a
        href="https://www.instagram.com/tu_usuario_aqui"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 md:mt-0 flex items-center gap-2 hover:text-pink-500 transition-colors duration-300"
      >
        <Instagram className="w-6 h-6" />
        <span className="hidden md:inline text-sm font-medium">
          Seguime en Instagram
        </span>
      </a>
    </footer>
  );
}
