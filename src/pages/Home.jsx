import Base from "./Base"
import AbaSuperior from "../components/AbaSuperior/AbaSuperior";
import dadosBrutos from "../data/dados-projetos.json";
import ListaDeProjetos from "../components/ListaDeProjetos/ListaDeProjetos";
import Paginacao from "../components/Paginacao/Paginacao";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Home = () => {
  // FILTRAGEM DE DADOS
  const [dados, setDados] = useState(dadosBrutos);

  const { criadores } = useParams();

  const dadosFiltradosURL = dados.filter(
    (elemento) => {
      if (typeof (criadores) == "undefined") {
        return true
      } else {
        for (let index = 0; index < elemento.criadores.length; index++) {
          let nome = elemento.criadores[index];

          if (nome.toLowerCase().includes(criadores.toLowerCase())) {
            return true
          }
        }
      }
    }
  )

  const filtro = (entrada) => setDados(dadosBrutos.filter(
    (elemento) => elemento.nome.toLowerCase().includes(entrada)
  ))

  const [filtrosAtivos, setFiltrosAtivos] = useState({});

  const mudarFiltro = (filtros) => setFiltrosAtivos(filtros);

  const dadosFiltrados = dadosFiltradosURL.filter((projeto) => {
    // Pega as chaves dos filtros ativos e coloca em uma lista
    const filtrosAtivosNomes = Object.keys(filtrosAtivos).filter((chave) => filtrosAtivos[chave]);

    // Verifica se todos os filtros ativos estão presentes
    return filtrosAtivosNomes.every((filtro) => projeto.filtros.includes(filtro));
  });

  // Definições para a paginação
  const [paginaAtual, setpaginaAtual] = useState(1);
  const [projetosPorPagina, setProjetosPorPagina] = useState(10);

  const ultimoProjeto = paginaAtual * projetosPorPagina; // ultimo projeto a aparecer na tela naquela página
  const primeiroProjeto = ultimoProjeto - projetosPorPagina; // primeiro projeto a aparecer na tela naquela página
  const projetosEmTela = dadosFiltrados.slice(primeiroProjeto, ultimoProjeto); // Projetos que aparecem por página

  const [textoPagina, settextoPagina] = useState(1);

  const alterarPagina = () => {
      settextoPagina(localStorage.getItem('pagina'));
  };
  
  return (
    <Base>
      <AbaSuperior
        pesquisa={<input id="InputPesquisa" placeholder="Pesquisar..." type="text" onChange={(evento) => filtro(evento.target.value.toLowerCase())} />}
        filtro={<img src="imagens/icons/filtro.png" alt="" />}
        mudancaFiltro={mudarFiltro}
        textoPagina={textoPagina}
      />

    <ListaDeProjetos dados={projetosEmTela}/>
    <Paginacao
      totalProjetos={dadosFiltrados.length}
      projetosPorPagina={projetosPorPagina}
      setpaginaAtual={setpaginaAtual}
      paginaAtual={paginaAtual}
      alterarPagina={alterarPagina}
    />
    </Base>
  )
}

export default Home;