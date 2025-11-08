export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[#D7D2FC] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 md:py-24 border-0 md:border-10 border-white border-white rounded-3xl overflow-hidden"
    >
      {/* Columna texto */}
      <div className="md:w-[65%] w-full text-center md:text-left mb-10 md:mb-0 md:pr-12">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900">
          Sobre mí
        </h2>
        <p className="text-lg md:text-2xl leading-relaxed text-gray-800 max-w-3xl mx-auto md:mx-0">
          Soy Wanda Janikow, Profesora de Educación Física y Personal trainer.
          El movimiento siempre fue parte de mí, con los años supe que no solo
          era una pasión, sino mi vocación. Para eso decidí formarme, ampliar
          mis conocimientos y poder ayudar a otras personas a encontrar esa
          misma conexión con su cuerpo y mente. Además de pensar la
          planificación de ejercicios, mi intención es contagiar la energía que
          me caracteriza, acompañarte a construir y fijar nuevos hábitos que
          mejoren tu calidad de vida a través de una motivación real y
          constante.
        </p>

        {/* <button className="mt-10 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-transform duration-300 hover:scale-105">
          Conocé mi método
        </button> */}
      </div>

      {/* Columna imagen */}
      <div className="md:w-[35%] w-full flex justify-center md:justify-end">
        <img
          src="/about-img.jpeg"
          alt="Wanda Janikow"
          className="w-64 h-64 md:w-[380px] md:h-[380px] object-cover rounded-2xl shadow-lg border-10 border-white"
        />
      </div>
    </section>
  );
}
