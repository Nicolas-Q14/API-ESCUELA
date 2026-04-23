import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/api";

function Detalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductById(id).then(setProducto);
  }, []);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{producto.title}</h2>
      <img src={producto.images[0]} width="200" />
      <p>{producto.description}</p>
      <p>${producto.price}</p>
    </div>
  );
}

export default Detalle;