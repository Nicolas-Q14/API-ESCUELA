import { supabase } from "../lib/supabaseClient";

function Logout() {

  const cerrarSesion = async () => {

    await supabase.auth.signOut();

    alert("Sesión cerrada");

    window.location.href = "#/login";

  };

  return (
    <button onClick={cerrarSesion}>
      Cerrar Sesión
    </button>
  );
}

export default Logout;