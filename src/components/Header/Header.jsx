import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <>
  <Top>
    <Link to="https://www.ibmec.br"><img src="imagens/logo-ibmec.png" alt="logo ibmec" /></Link>
    <div>
    <Link to="/" className="botao">Home</Link>
    <Link to="/" className="botao">PT-BR | ENG</Link>
    </div>

  </Top>
  </>
)

export default Header;