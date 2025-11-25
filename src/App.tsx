import About from "./components/About";
import { Asesoria } from "./components/Asesoria";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Offers from "./components/Offers";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Asesoria imageSrc="/asesoria-wanda.webp" />
      <Footer />
    </>
  );
}

export default App;
