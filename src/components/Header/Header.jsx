import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <Link to="https://www.ibmec.br"><img src="imagens/logo-ibmec.png" alt="logo ibmec" /></Link>
    <div class="botoes">
    <Link to="/" class="botao">Home</Link>
    <Link to="/" class="botao">PT-BR | ENG</Link>
    </div>

  </Top>
)

export default Header;