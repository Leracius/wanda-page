import React from "react";

type AsesoriaHighlightProps = {
  imageSrc: string;
  imageAlt?: string;
};

export const Asesoria: React.FC<AsesoriaHighlightProps> = ({
  imageSrc,
  imageAlt = "Entrenamiento personalizado",
}) => {
  return (
    <section className="w-full flex justify-center mt-3 md:px-10 lg:px-20">
      <div className="w-full max-w-6xl lg:max-w-7xl mx-auto rounded-3xl bg-white/90 shadow-xl backdrop-blur-sm overflow-hidden">
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Imagen */}
          <div className="h-full md:col-span-2">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover md:rounded-r-none rounded-t-3xl md:rounded-l-3xl"
            />
          </div>

          {/* Texto */}
          <div className="px-6 pb-8 pt-4 md:col-span-3 md:px-8 md:py-10 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              No es cuestión de entrenar más,{" "}
              <span className="text-violet-600">sino mejor.</span>
            </h2>

            <p className="text-lg md:text-2xl text-gray-700 font-semibold uppercase tracking-wide">
              No pierdas tu tiempo con rutinas genéricas, no desperdicies
              energía y no te desmotives por no ver resultados.
            </p>

            <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
              ¿Usás tus planes viejos creados en gimnasios diferentes que has
              visitado, ideas de redes sociales y tips propios o que te
              recomendaron y no notás cambios?
            </p>

            <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
              Tranqui, <span className="font-semibold">yo te ordeno</span> los
              entrenamientos de manera{" "}
              <span className="font-semibold">efectiva y profesional</span>,
              para que progreses, te motives y{" "}
              <span className="font-bold text-violet-600">
                logres cambios asegurados.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
