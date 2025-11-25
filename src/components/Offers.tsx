import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Offers() {
  const [open, setOpen] = useState<null | "personal" | "nutricion" | "basic">(
    null
  );

  const toggle = (card: "personal" | "nutricion" | "basic") => {
    setOpen((prev) => (prev === card ? null : card));
  };

  return (
    <section
      id="services"
      className="w-full py-16 px-6 md:px-20 text-white border-white rounded-3xl bg-[url('/pesas.jpg')] bg-cover bg-center bg-no-repeat shadow-xlnpm ru"
    >
      <div className="max-w-6xl mx-auto text-center mb-12 p-3 bg-[rgba(0,0,0,0.5)] rounded-2xl">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Te ofrezco</h2>
        <p className="text-lg md:text-xl text-white">
          Elegí el servicio que mejor se adapte a tus objetivos
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 justify-items-center">
        {/* 1) asesoria BASIC */}
        <div
          className={`w-full md:w-[46rem] bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
            open === "basic" ? "ring-4 ring-indigo-300" : ""
          }`}
          onClick={() => toggle("basic")}
        >
          <div className="flex justify-between items-center gap-4">
            <h3 className="text-2xl font-bold text-black">
              Asesoría <strong className="text-indigo-500">BASIC</strong>
            </h3>
            <ChevronDown
              className={`h-6 w-6 text-indigo-600 transform transition-transform duration-300 ${
                open === "basic" ? "rotate-180" : ""
              }`}
            />
          </div>

          {open === "basic" && (
            <div className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p className="mb-"></p>
              <p className="mb-4">
                Accederás a tu rutina 100% personalizada adaptada a tu estilo de
                vida, objetivos, y tiempos. Comunicación directa conmigo,
                seguimiento constante y corrección de técnicas. La motivación
                será clase para mantener y progresar en tu entrenamiento.{" "}
                <strong>¡VAMOS, por tu mejor versión!</strong>
              </p>

              <a
                href="https://wa.me/543513552534?text=Hola%20me%20gustaria%20el%20plan%20asesoría%20basic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-400 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105"
              >
                Quiero este plan
              </a>
            </div>
          )}
        </div>

        {/* 2) Asesoría PLUS */}
        <div
          className={`w-full md:w-[46rem] bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
            open === "personal" ? "ring-4 ring-indigo-300" : ""
          }`}
          onClick={() => toggle("personal")}
        >
          <div className="flex justify-between items-center gap-4">
            <h3 className="text-2xl font-bold text-black">
              Asesoría <strong className="text-indigo-500">PLUS</strong>{" "}
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
                Accederás a tu <strong>rutina 100% personalizada </strong>{" "}
                adaptada a tu estilo de vida, objetivos, y tiempos. Accederás a
                tu plan y en el tendrás links que te llevaran a videos donde
                podrás ver cada ejercicio, registrar tus avances y organizar tus
                entrenamientos. Cuenta con
                <strong>
                  GUIA DE ALIMENTACION con +100 recetas e ideas
                </strong>{" "}
                una para complementar tu entrenamiento con una nutrición
                consciente y saludable. Creada y pensada con mucha dedicación
                por una Lic. En Nutrición matriculada. Tendrás seguimiento
                constante y la motivación que será clase para mantener y
                progresar en tu entrenamiento. ¡VAMOS, por tu mejor versión!
              </p>

              <a
                href="https://wa.me/543513552534?text=Hola%20me%20gustaria%20el%20plan%20asesoría%20plus%20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-400 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105"
              >
                Ir al chat de WhatsApp
              </a>
            </div>
          )}
        </div>

        {/* 3) Asesoría personalizada y nutrición */}
        <div
          className={`w-full md:w-[46rem] bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
            open === "nutricion" ? "ring-4 ring-indigo-300" : ""
          }`}
          onClick={() => toggle("nutricion")}
        >
          <div className="flex justify-between items-center gap-4">
            <h3 className="text-2xl font-bold text-black">
              Asesoría{" "}
              <strong className="text-indigo-500">
                personalizada y nutrición
              </strong>
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
                href="https://wa.me/543513552534?text=Hola%20me%20gustaria%20asesoría%20personalizada%20y%20nutrición"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-400 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105"
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
