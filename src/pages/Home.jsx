import Base from "./Base"
import Projetos from "../components/Projetos/Projetos"
import Caixa from "../components/Caixa/Caixa";
import dados from "../data/dados-projetos.json"
import Paginacao from "../components/Paginacao/Paginacao";

const Home = () => {
  return (
    <Base>
      <Projetos>
        {
          dados.map( (elemento, index) => (
            <Caixa
              key={index}
              nome={elemento.nome}
              desc={elemento.desc}
            />
          ))
        }
      </Projetos>
      <Paginacao></Paginacao>
    </Base>
  )
}

export default Home