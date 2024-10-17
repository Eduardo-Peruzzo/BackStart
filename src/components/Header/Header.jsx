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
  <div className="filtragem">
    <Pesquisa><Texto>Pesquisar</Texto><img src="imagens/lupa-pesquisa.png"/></Pesquisa> <Filtro> <img src="imagens/filtro.png" alt="" /> </Filtro>
  </div>
  <Texto><p className="pagina">Página 1</p></Texto>
  </Container_botoes>
  </>
)

export default Header;