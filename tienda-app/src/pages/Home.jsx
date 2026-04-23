import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    getProducts().then(setProductos);
  }, []);

  const filtrados = productos.filter(p =>
    p.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Productos</h1>

      <input
        placeholder="Buscar producto..."
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="grid">
        {filtrados.map(p => (
          <ProductCard key={p.id} producto={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;