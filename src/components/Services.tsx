import Offers from "./Offers";

export default function Services() {
  return (
    <section className="w-full flex flex-col md:flex-row items-start justify-center md:px-20  mt-3 gap-10 bg-black">
      {/* Columna derecha (70%) */}
      <div className="w-full md:w-[70%] bg-black">
        <Offers />
      </div>
    </section>
  );
}
