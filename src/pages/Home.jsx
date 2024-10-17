import Base from "./Base"
import AbaSuperior from "../components/AbaSuperior/AbaSuperior";
import Projetos from "../components/Projetos/Projetos"
import Caixa from "../components/Caixa/Caixa";
import dados from "../data/dados-projetos.json"

const Home = () => {
  return (
    <Base>
      <AbaSuperior/>
      
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
    </Base>
  )
}

export default Home