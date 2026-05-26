import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import { useEffect, useState } from "react";

import { supabase } from "./lib/supabaseClient";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Info from "./pages/Info";
import Usuario from "./pages/Usuario";
import Original from "./pages/Original";
import Detalle from "./pages/Detalle";

import Login from "./pages/Login";
import Registro from "./pages/Registro";

function App() {

  const [session, setSession] =
    useState(null);

  useEffect(() => {

    // VERIFICAR SESION

    supabase.auth.getSession()
      .then(({ data: { session } }) => {

        setSession(session);

      });

    // ESCUCHAR LOGIN/LOGOUT

    const {
      data: listener
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {

        setSession(session);

      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };

  }, []);

  return (
    <HashRouter>

      {/* SI ESTA LOGUEADO */}

      {session && <Navbar />}

      <Routes>

        {/* LOGIN */}

        <Route
          path="/login"
          element={
            !session
              ? <Login />
              : <Navigate to="/" />
          }
        />

        {/* REGISTRO */}

        <Route
          path="/registro"
          element={
            !session
              ? <Registro />
              : <Navigate to="/" />
          }
        />

        {/* RUTAS PRIVADAS */}

        <Route
          path="/"
          element={
            session
              ? <Home />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="/favoritos"
          element={
            session
              ? <Favoritos />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="/info"
          element={
            session
              ? <Info />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="/usuario"
          element={
            session
              ? <Usuario />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="/original"
          element={
            session
              ? <Original />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="/detalle/:id"
          element={
            session
              ? <Detalle />
              : <Navigate to="/login" />
          }
        />

      </Routes>

    </HashRouter>
  );
}

export default App;