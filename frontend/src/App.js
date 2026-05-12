import "@/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Vorstand from "@/pages/Vorstand";
import Aktuelles from "@/pages/Aktuelles";
import Recht from "@/pages/Recht";
import Anfahrt from "@/pages/Anfahrt";
import Vereinsheim from "@/pages/Vereinsheim";
import Winterdienst from "@/pages/Winterdienst";
import Galerie from "@/pages/Galerie";
import Kontakt from "@/pages/Kontakt";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <div className="App">
          <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/wir-ueber-uns" element={<About />} />
            <Route path="/vorstand" element={<Vorstand />} />
            <Route path="/aktuelles" element={<Aktuelles />} />
            <Route path="/recht" element={<Recht />} />
            <Route path="/anfahrt" element={<Anfahrt />} />
            <Route path="/vereinsheim" element={<Vereinsheim />} />
            <Route path="/winterdienst" element={<Winterdienst />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#4A7C59",
            color: "#fff",
            border: "none",
            borderRadius: "9999px",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
          },
        }}
      />
    </div>
  );
}

export default App;
