import Base from "./Base"
import AbaSuperior from "../components/AbaSuperior/AbaSuperior";
import ContainerProjetos from "../components/ContainerProjetos/ContainerProjetos"
import CaixaProjeto from "../components/CaixaProjeto/CaixaProjeto";
import dadosBrutos from "../data/dados-projetos.json";
import Paginacao from "../components/Paginacao/Paginacao";
import ReactPaginate from 'react-paginate';
import { useState } from "react";

const Home = () => {
  // FILTRAGEM DE DADOS
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

  // Exibe os Projetos na Tela com um número pré-definido por página
function Projetos({ projetosEmTela }) {
  return (
    <>
      <ContainerProjetos>
      {projetosEmTela &&
        projetosEmTela.map((elemento, index) => (
              <CaixaProjeto
                key={index}
                id={elemento.id}
                nome={elemento.nome}
                desc={elemento.desc}
                foto={elemento.foto}
              />
        ))}
        </ContainerProjetos>
    </>
  );
}

// Pagina os itens
function ItensPaginados( {itensPorPagina} ){
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itensPorPagina;
  const projetosDispostos = dadosFiltrados.slice(itemOffset, endOffset);
  const numeroPaginas = Math.ceil(dadosFiltrados.length / itensPorPagina);

  const MudarPagina = (event) => {
    const newOffset = (event.selected * itensPorPagina) % dadosFiltrados.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Projetos projetosEmTela={projetosDispostos}/>
      
      <nav id="react-paginate-container">
      <ReactPaginate className='react-pag'
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      pageLinkClassName="itensPaginas"
      previousLinkClassName="anterior"
      nextLinkClassName="proxima"
      activeClassName="paginaAtual"

      onPageChange={MudarPagina}
      pageRangeDisplayed={5}
      pageCount={numeroPaginas}
      renderOnZeroPageCount={null}
      hrefBuilder={(page, pageCount, selected) =>
        page >= 1 && page <= pageCount ? `/page/${page}` : '#'
      }>
      </ReactPaginate>
      </nav>
    </>
  );


};

  var paginaAtual = 1;
  return (
    <Base>
      <AbaSuperior numeroPagina={paginaAtual}
        pesquisa={<input id="InputPesquisa" placeholder="Pesquisar..."  type="text" onChange={ (evento) => filtro(evento.target.value.toLowerCase())}/>}
        filtro={<img src="imagens/icons/filtro.png" alt="" />}
        mudancaFiltro={mudarFiltro}
      />
      <ItensPaginados itensPorPagina={12}/>
    </Base>
  )
}

export default Home;