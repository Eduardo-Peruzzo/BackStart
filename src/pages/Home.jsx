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

  const [filtrosAtivos, setFiltrosAtivos] = useState({});

  const mudarFiltro = (filtros) => setFiltrosAtivos(filtros);

  const dadosFiltrados = dados.filter((projeto) => {
    // Pega as chaves dos filtros ativos e coloca em uma lista
    const filtrosAtivosNomes = Object.keys(filtrosAtivos).filter((chave) => filtrosAtivos[chave]);

    // Verifica se todos os filtros ativos estão presentes
    return filtrosAtivosNomes.every((filtro) => projeto.filtros.includes(filtro));
  });

  return (
    <Base>
      <AbaSuperior
        pesquisa={<input id="InputPesquisa" placeholder="Pesquisar..."  type="text" onChange={ (evento) => filtro(evento.target.value.toLowerCase())}/>}
        filtro={<img src="imagens/icons/filtro.png" alt="" />}
        mudancaFiltro={mudarFiltro}
      />
      <ContainerProjetos>
        {
          dadosFiltrados.map( (elemento, index) => (
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