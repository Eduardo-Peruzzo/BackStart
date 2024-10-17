import Base from "./Base"
import AbaSuperior from "../components/AbaSuperior/AbaSuperior";
import ContainerProjetos from "../components/ContainerProjetos/ContainerProjetos"
import CaixaProjeto from "../components/CaixaProjeto/CaixaProjeto";
import dados from "../data/dados-projetos.json"
import Paginacao from "../components/Paginacao/Paginacao";

const Home = () => {
  return (
    <Base>
      <AbaSuperior/>
      
      <ContainerProjetos>
        {
          dados.map( (elemento, index) => (
            <CaixaProjeto
              key={index}
              id={elemento.id}
              nome={elemento.nome}
              desc={elemento.desc}
            />
          ))
        }
      </ContainerProjetos>
      <Paginacao></Paginacao>
    </Base>
  )
}

export default Home;