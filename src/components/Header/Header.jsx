import { Link } from "react-router-dom";
import { Container_botoes, Filtro, Pesquisa, Texto, Top } from "./Style";

const Header = () => (
  <>
  <Top>
    <Link to="https://www.ibmec.br"><img src="imagens/logo-ibmec.png" alt="logo ibmec" /></Link>
    <div>
    <Link to="/" className="botao">Home</Link>
    <Link to="/" className="botao">PT-BR | ENG</Link>
    </div>

  </Top>
  <Container_botoes>
  <Pesquisa><Texto>Pesquisar</Texto><img src="imagens/lupa-pesquisa.png"/></Pesquisa> <Filtro> <img src="imagens/filtro.png" alt="" /> </Filtro>
  </Container_botoes>
  </>
)

export default Header;