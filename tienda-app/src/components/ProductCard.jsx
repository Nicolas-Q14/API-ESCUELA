import { Link } from "react-router-dom";

function ProductCard({ producto }) {

  const guardar = () => {
    let favs = JSON.parse(localStorage.getItem("fav")) || [];
    favs.push(producto);
    localStorage.setItem("fav", JSON.stringify(favs));
  };

  return (
    <div className="card">
      <img src={producto.images?.[0]} />

      <h3>{producto.title}</h3>
      <p>${producto.price}</p>

      <button onClick={guardar}>Favorito</button>
      <br />
      <Link to={`/detalle/${producto.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
}

export default ProductCard;