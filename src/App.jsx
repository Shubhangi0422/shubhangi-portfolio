import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import GPDP from "./pages/GPDP";
import Edcil from "./pages/Edcil";
import Zeitlos from "./pages/Zeitlos";
import Ideahub from "./pages/Ideahub";

import WhatsAppButton from "./components/WhatsAppButton";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/gpdp" element={<GPDP />} />
        <Route path="/projects/edcil" element={<Edcil />} />
        <Route path="/projects/zeitlos" element={<Zeitlos />} />
        <Route path="/projects/ideahub" element={<Ideahub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;