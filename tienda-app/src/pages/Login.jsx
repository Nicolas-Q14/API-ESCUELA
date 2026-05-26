import { useState } from "react";

import { Link } from "react-router-dom";

import { supabase } from "../lib/supabaseClient";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const iniciarSesion = async (e) => {

    e.preventDefault();

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password
      });

    if (error) {

      alert(error.message);

    } else {

      alert("Sesión iniciada");

      window.location.href = "#/";

    }
  };

  return (
    <div className="auth-container">

      <div className="auth-box">

        <h1>Login</h1>

        <form onSubmit={iniciarSesion}>

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
            Iniciar Sesión
          </button>

        </form>

        {/* IR A REGISTRO */}

        <p
          style={{
            marginTop: "20px"
          }}
        >
          ¿No tienes cuenta?

          <Link
            to="/registro"
            style={{
              color: "#38bdf8",
              marginLeft: "5px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Regístrate
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;