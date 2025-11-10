import Carousel from "./Carrousel";

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row h-auto md:h-[80vh] border-0 md:border-10 rounded-3xl overflow-hidden mb-3">
      {/* Izquierda (60%) */}
      <div className="md:w-4/6 w-full py-12 md:py-16 px-0 md:px-4 md:p-64 flex items-center justify-center bg-gray-300">
        <div className="flex flex-col justify-center items-center text-center p-3x">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight animate-fade-up">
            El cambio empieza hoy
          </h2>
          <p className="text-2xl md:text-3xl text-gray-900 max-w-2xl animate-fade-up delay-200">
            Llegaste al lugar indicado para convertirte en
            <br className="hidden md:block" />
            tu mejor versión
          </p>
          <a
            href="https://wa.me/543513552534?text=Hola%20Wanda%20😊%20me%20gustaría%20que%20me%20asesores"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cursor-pointer mt-4 bg-indigo-400 hover:bg-indigo-500  text-white text-lg md:text-xl font-semibold py-3 px-8 rounded-full shadow-md transition-transform duration-300 hover:scale-105 animate-fade-up delay-400">
              Comenzá ahora
            </button>
          </a>
        </div>
      </div>

      {/* Derecha (40%) */}
      <div className="md:w-2/6 w-full flex items-center justify-center overflow-hidden ">
        <Carousel />
      </div>
    </section>
  );
}
