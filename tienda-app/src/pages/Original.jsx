import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

function Original() {
  const [productos, setProductos] = useState([]);
  const [categoria, setCategoria] = useState("all");

  useEffect(() => {
    getProducts().then(setProductos);
  }, []);

  const filtrados =
    categoria === "all"
      ? productos
      : productos.filter(p =>
          p.category.name.toLowerCase().includes(categoria)
        );

  return (
    <div className="container">
      <h1>Tienda personalizada</h1>

      <div className="filtros">
        <button onClick={() => setCategoria("all")}>Todo</button>
        <button onClick={() => setCategoria("clothes")}>Ropa</button>
        <button onClick={() => setCategoria("electronics")}>Tecnología</button>
        <button onClick={() => setCategoria("furniture")}>Hogar</button>
      </div>

      <div className="grid">
        {filtrados.map(p => (
          <div key={p.id} className="card">
            <img src={p.images?.[0]} />
            <h3>{p.title}</h3>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Original;