import Base from "./Base"
import AbaSuperior from "../components/AbaSuperior/AbaSuperior";
import ContainerProjetos from "../components/ContainerProjetos/ContainerProjetos"
import CaixaProjeto from "../components/CaixaProjeto/CaixaProjeto";
import dadosBrutos from "../data/dados-projetos.json";
import Paginacao from "../components/Paginacao/Paginacao";
import { useState } from "react";

const Home = () => {
  const [dados, setDados] = useState(dadosBrutos);

  const filtro = (entrada) => setDados(dadosBrutos.filter(
    (elemento) => elemento.nome.toLowerCase().includes(entrada)
  ))


  return (
    <Base>
      <AbaSuperior><input id="InputPesquisa" placeholder="Pesquisar..."  type="text" onChange={ (evento) => filtro(evento.target.value.toLowerCase())}/></AbaSuperior>
      <ContainerProjetos>
        {
          dados.map( (elemento, index) => (
            <CaixaProjeto
              key={index}
              id={elemento.id}
              nome={elemento.nome}
              desc={elemento.desc}
              foto={elemento.foto}
            />
          ))
        }
      </ContainerProjetos>
      
    </Base>
  )
}

export default Home;