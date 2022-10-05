import "./App.css";
import NavbarX from "./components/Navbar/NavbarX.jsx";
import Hero from "./components/Hero/Hero";
import Particle from "./components/Particle/Particle";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Particle />
      <NavbarX />
      <Hero />
      <About />
    </>
  );
}

export default App;
