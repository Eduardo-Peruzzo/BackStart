import { ContainerPaginacao, Pagina, PaginaAnterior, PaginaSeguinte } from "./Style";
import { useState} from 'react';

const Paginacao = ({ totalProjetos, projetosPorPagina, paginaAtual, alterarPagina}) => {
    const totalPaginas = Math.ceil(totalProjetos/projetosPorPagina);
    const proxima_pagina = useState(parseInt(sessionStorage.getItem("pagina")) + 1);
    const pagina_anterior = useState(parseInt(sessionStorage.getItem("pagina")) - 1);

    const paginaSeguinte = () => {
        if (proxima_pagina <= totalPaginas){
            alterarPagina(proxima_pagina);
        }
    }

    const paginaAnterior = () => {
        if (pagina_anterior > 0){
            alterarPagina(pagina_anterior);
        }
    }

    let paginas = [];

    for (let i = 1; i <= totalPaginas; i++){
        paginas.push(i);
    }

    return(
        <ContainerPaginacao>
            {/* <PaginaAnterior onClick={paginaAnterior}><img src="/imagens/icons/chevron_esquerda.svg" alt="página anterior" /></PaginaAnterior> */}
            {
                paginas.map((pagina, index) => {
                    return <Pagina
                                key={index}
                                onClick={() => {sessionStorage.setItem('pagina', pagina), alterarPagina(pagina), window.scrollTo({top: 0, behavior: 'instant'})}}
                                className={pagina == paginaAtual ? 'paginaAtual' : ''}>

                                  {pagina}
                                </Pagina>
                })
            }
            {/* <PaginaSeguinte onClick={paginaSeguinte}> <img src="/imagens/icons/chevron_direita.svg" alt="página seguinte"/> </PaginaSeguinte> */}
        </ContainerPaginacao>
    );
}

export default Paginacao;