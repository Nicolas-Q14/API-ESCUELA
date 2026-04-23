import { useEffect, useState } from "react";

function Favoritos() {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fav")) || [];
    setFavs(data);
  }, []);

  return (
    <div>
      <h1>Favoritos</h1>
      {favs.map((p, i) => (
        <div key={i}>
          <h3>{p.title}</h3>
          <img src={p.images[0]} width="100" />
        </div>
      ))}
    </div>
  );
}

export default Favoritos;