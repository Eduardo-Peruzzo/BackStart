import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <Link to="/">Home</Link>
    <Link to="/fotos">Fotos</Link>
    <Link to="/atletas">Atletas</Link>
    <Link to="/nova-pagina">Oi</Link>
    <Link to="/sobre-nos">Sobre nós</Link>

  </Top>
)

export default Header;