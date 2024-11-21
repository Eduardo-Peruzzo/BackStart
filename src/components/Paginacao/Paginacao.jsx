import { ContainerPaginacao, Pagina } from "./Style";

const Paginacao = ({ totalProjetos, projetosPorPagina, paginaAtual, alterarPagina}) => {
    let paginas = [];

    for (let i = 1; i <= Math.ceil(totalProjetos/projetosPorPagina); i++){
        paginas.push(i);
    }

    return(
        <ContainerPaginacao>
            {
                paginas.map((pagina, index) => {
                    return <Pagina
                                key={index}
                                onClick={() => {sessionStorage.setItem('pagina', pagina), alterarPagina(pagina), window.scrollTo({top: 0, behavior: 'smooth'})}}
                                className={pagina == paginaAtual ? 'paginaAtual' : ''}>

                                  {pagina}
                                </Pagina>
                })
            }
        </ContainerPaginacao>
    );
}

export default Paginacao;