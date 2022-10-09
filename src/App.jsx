import "./App.css";
import NavbarX from "./components/Navbar/NavbarX.jsx";
import Hero from "./components/Hero/Hero";
import Particle from "./components/Particle/Particle";
import About from "./components/About/About";
import Faqs from "./components/Faqs/Faqs";
import Footer from "./components/Footer/Footer";
import Sponsor from "./components/Sponsor/Sponsor";

function App() {
  return (
    <>
      <Particle />
      <NavbarX />
      <Hero />
      <About />
      <Sponsor />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
