import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <img src="logo-ibmec.png" alt="logo ibmec" />
    <div class="botoes">
    <Link to="/">Home</Link>
    <Link to="/">PT-BR | ENG</Link>
    </div>

  </Top>
)

export default Header;