import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import { supabase } from "../lib/supabaseClient";

function Navbar() {

  const [session, setSession] =
    useState(null);

  useEffect(() => {

    supabase.auth.getSession()
      .then(({ data: { session } }) => {

        setSession(session);

      });

  }, []);

  const logout = async () => {

    await supabase.auth.signOut();

    alert("Sesión cerrada");

    window.location.href = "#/login";

  };

  return (

    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 40px",
        background: "#1e293b",
        boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}
    >

      {/* LOGO */}

      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#38bdf8"
        }}
      >
        AnimeApp
      </div>

      {/* LINKS */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px"
        }}
      >

        <Link
          to="/"
          style={linkStyle}
        >
          Home
        </Link>

        <Link
          to="/favoritos"
          style={linkStyle}
        >
          Favoritos
        </Link>

        <Link
          to="/original"
          style={linkStyle}
        >
          Original
        </Link>

        <Link
          to="/info"
          style={linkStyle}
        >
          Info
        </Link>

        <Link
          to="/usuario"
          style={linkStyle}
        >
          Usuario
        </Link>

        {/* SI NO ESTA LOGUEADO */}

        {!session && (
          <>

            <Link
              to="/login"
              style={linkStyle}
            >
              Login
            </Link>

            <Link
              to="/registro"
              style={linkStyle}
            >
              Registro
            </Link>

          </>
        )}

        {/* SI ESTA LOGUEADO */}

        {session && (

          <button
            onClick={logout}
            style={{
              background: "#ef4444",
              color: "white",
              padding: "10px 15px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s"
            }}
          >
            Logout
          </button>

        )}

      </div>

    </nav>
  );
}

/* ESTILOS LINKS */

const linkStyle = {

  color: "#f1f5f9",

  textDecoration: "none",

  fontWeight: "600",

  transition: "0.3s"

};

export default Navbar;