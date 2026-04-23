import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Info from "./pages/Info";
import Usuario from "./pages/Usuario";
import Original from "./pages/Original";
import Detalle from "./pages/Detalle";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/info" element={<Info />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/original" element={<Original />} />
        <Route path="/detalle/:id" element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;