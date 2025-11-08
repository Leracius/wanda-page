import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Offers() {
  const [open, setOpen] = useState<null | "personal" | "nutricion">(null);

  const toggle = (card: "personal" | "nutricion") => {
    setOpen((prev) => (prev === card ? null : card));
  };

  return (
    <section className="w-full bg-violet-200 py-16 px-6 md:px-20 text-white border-0 md:border-10 border-white rounded-3xl bg-[url('/pesas.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-6xl mx-auto text-center mb-12 p-3 bg-[rgba(0,0,0,0.5)] rounded-2xl">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Te ofrezco</h2>
        <p className="text-lg md:text-xl text-white">
          Elegí el servicio que mejor se adapte a tus objetivos
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 justify-items-center">
        {/* 1) Asesoría personalizada */}
        <div
          className={`w-full md:w-[46rem] bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
            open === "personal" ? "ring-4 ring-indigo-300" : ""
          }`}
          onClick={() => toggle("personal")}
        >
          <div className="flex justify-between items-center gap-4">
            <h3 className="text-2xl font-bold text-black">
              Asesoría personalizada
            </h3>
            <ChevronDown
              className={`h-6 w-6 text-indigo-600 transform transition-transform duration-300 ${
                open === "personal" ? "rotate-180" : ""
              }`}
            />
          </div>

          {open === "personal" && (
            <div className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p className="mb-4">
                Accederás a tu rutina <strong>100% personalizada</strong>,
                adaptada a tu estilo de vida, objetivos y tiempos.
              </p>
              <p className="mb-4">
                A través del link a continuación, irás a un{" "}
                <strong>chat de WhatsApp directamente conmigo</strong> donde
                pactaremos una videollamada o chat de consulta. Ahí nos
                conoceremos y definiremos las metas para tu plan ideal.
              </p>
              <p className="mb-6">
                Tendrás links a <strong>videos de cada ejercicio</strong>,
                podrás registrar tus avances y organizar tus entrenamientos.
              </p>
              <a
                href="https://wa.me/XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#9A8F88] hover:bg-[#524C48] text-white font-semibold py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105"
              >
                Ir al chat de WhatsApp
              </a>
            </div>
          )}
        </div>

        {/* 2) Asesoría personalizada y nutrición */}
        <div
          className={`w-full md:w-[46rem] bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
            open === "nutricion" ? "ring-4 ring-indigo-300" : ""
          }`}
          onClick={() => toggle("nutricion")}
        >
          <div className="flex justify-between items-center gap-4">
            <h3 className="text-2xl font-bold text-black">
              Asesoría personalizada y nutrición
            </h3>
            <ChevronDown
              className={`h-6 w-6 text-indigo-600 transform transition-transform duration-300 ${
                open === "nutricion" ? "rotate-180" : ""
              }`}
            />
          </div>

          {open === "nutricion" && (
            <div className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p className="mb-4">
                Adquirí tu plan personalizado de <strong>entrenamiento</strong>{" "}
                y <strong>nutrición</strong> pensados con el mismo objetivo.
              </p>
              <p className="mb-4">
                Vas a lograr <strong>potenciar tu esfuerzo</strong>, con
                resultados reales, sostenibles y adaptados a tu estilo de vida.
              </p>
              <p className="mb-6">
                Trabajaremos sobre tus metas, tu disponibilidad y tus gustos
                para que puedas mantener el plan en el tiempo.
              </p>
              <a
                href="https://wa.me/XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#9A8F88] hover:bg-[#524C48] text-white font-semibold py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105"
              >
                Quiero este plan
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
