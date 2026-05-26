import { useState } from "react";

import { Link } from "react-router-dom";

import { supabase } from "../lib/supabaseClient";

function Registro() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const registrar = async (e) => {

    e.preventDefault();

    const { error } =
      await supabase.auth.signUp({
        email,
        password
      });

    if (error) {

      alert(error.message);

    } else {

      alert("Usuario registrado");

      window.location.href = "#/";

    }
  };

  return (
    <div className="auth-container">

      <div className="auth-box">

        <h1>Registro</h1>

        <form onSubmit={registrar}>

          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Registrarse
          </button>

        </form>

        {/* IR A LOGIN */}

        <p
          style={{
            marginTop: "20px"
          }}
        >
          ¿Ya tienes cuenta?

          <Link
            to="/login"
            style={{
              color: "#38bdf8",
              marginLeft: "5px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Inicia sesión
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Registro;