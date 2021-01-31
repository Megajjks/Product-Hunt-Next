import Buscador from "../ui/Buscador";
import Navegacion from "./Navagacion";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>P</p>
          <Buscador />
          <Navegacion />
        </div>
        <div>
          <p>Hola: Jayro Salazar</p>
          <button type="button">Cerrar sesión</button>
          <Link href="/">Login</Link>
          <Link href="/">Crear cuenta</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
