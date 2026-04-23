import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favoritos">Favoritos</Link>
      <Link to="/original">Original</Link>
      <Link to="/info">Info</Link>
      <Link to="/usuario">Usuario</Link>
    </nav>
  );
}

export default Navbar;