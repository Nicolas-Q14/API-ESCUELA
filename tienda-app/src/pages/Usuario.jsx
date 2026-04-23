import { useState, useEffect } from "react";

function Usuario() {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    bio: "",
    foto: ""
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) setUser(data);
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const guardar = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Guardado");
  };

  return (
    <div className="container">
      <h1>Perfil</h1>

      <div className="perfil">
        <img
          src={user.foto || "https://i.pravatar.cc/150"}
          alt="foto"
          className="foto"
        />

        <input name="foto" placeholder="URL foto" onChange={handleChange} />
        <input name="nombre" placeholder="Nombre" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <textarea name="bio" placeholder="Bio" onChange={handleChange} />

        <button onClick={guardar}>Guardar</button>
      </div>
    </div>
  );
}

export default Usuario;