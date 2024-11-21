import Base from "./Base"
import AbaSuperior from "../components/AbaSuperior/AbaSuperior";
import dadosBrutos from "../data/dados-projetos.json";
import dadosBrutosEng from "../data/dados-projetos-eng.json";
import ListaDeProjetos from "../components/ListaDeProjetos/ListaDeProjetos";
import Paginacao from "../components/Paginacao/Paginacao";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Home = () => {
  // DEFINIÇÃO DA LÍNGUA USADA
  const linguaAtual = localStorage.getItem("lingua")

  const definirLingua = (pt, eng) => {
    if (linguaAtual === "pt") { return pt }
    if (linguaAtual === "eng") { return eng }
  }

  // FILTRAGEM DE DADOS
  const [dados, setDados] = useState([]);
  const [dadosB, setDadosB] = useState([]);

  useEffect(() => {
    setDados(definirLingua(dadosBrutos, dadosBrutosEng))
    setDadosB(definirLingua(dadosBrutos, dadosBrutosEng))
  }, [])

  // Configurando parâmetros da URL
  const { criadores } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const paginaAtual = parseInt(searchParams.get("pagina")) || 1;



  // Filtros de criadores
  const dadosFiltradosURL = dados.filter((projeto) => {
    if (!criadores) {
      return true
    }; // Caso nenhum criador seja passado, retorna todos
    return projeto.criadores.some((nome) =>
      nome.toLowerCase().includes(criadores.toLowerCase())
    );
  });

  const filtro = (entrada) => setDados(dadosB.filter(
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
  if (sessionStorage.getItem("pagina")) {

  } else {
    sessionStorage.setItem("pagina", 1)
  }

  const [projetosPorPagina, setProjetosPorPagina] = useState(10);

  const ultimoProjeto = paginaAtual * projetosPorPagina; // ultimo projeto a aparecer na tela naquela página
  const primeiroProjeto = ultimoProjeto - projetosPorPagina; // primeiro projeto a aparecer na tela naquela página
  const projetosEmTela = dadosFiltrados.slice(primeiroProjeto, ultimoProjeto);

  const [textoPagina, settextoPagina] = useState(sessionStorage.getItem("pagina"));

  const alterarPagina = (pagina) => {
    settextoPagina(pagina);
    setSearchParams({ pagina });
  };

  useEffect(() => {
    const totalPaginas = Math.ceil(dadosFiltrados.length / projetosPorPagina)
    if (totalPaginas > 1) {
      setSearchParams({pagina: sessionStorage.getItem("pagina")})
      settextoPagina(sessionStorage.getItem("pagina"))
    } else {
      setSearchParams(1)
      settextoPagina(1)
    }
  }, [dados, criadores, paginaAtual])



  return (
    <Base>
      <AbaSuperior
        pesquisa={<input id="InputPesquisa" placeholder={definirLingua("Pesquisar...", "Search...")} type="text" onChange={(evento) => filtro(evento.target.value.toLowerCase())} />}
        filtro={<img src="imagens/icons/filtro.png" alt="" />}
        mudancaFiltro={mudarFiltro}
        textoPagina={textoPagina}
      />

      <ListaDeProjetos dados={projetosEmTela} />
      <Paginacao
        totalProjetos={dadosFiltrados.length}
        projetosPorPagina={projetosPorPagina}
        paginaAtual={paginaAtual}
        alterarPagina={alterarPagina}
      />
    </Base>
  )
}

export default Home;