import styled from "styled-components";

const DivAbaSuperior = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: auto;
    padding: 1em .20em;
    @media screen and (min-width: 768px){
        flex-direction: row;
    }
`

const DivAreaPesquisa = styled.div`
    align-items: center;
    display: flex;
    width: 80%;
    height: 5em;
    .menu-principal {
        display: flex;
        flex-direction: column;
        background: white;
        border: 1px solid var(--primaria);
        border-radius: 4px;
        padding: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        z-index: 1;
        justify-content: space-evenly;
        gap: 0.5em;
        max-height: 15em;
        min-width: 10em;
        position: absolute;
        top: 13.5em;
        right: 3em;
        overflow-y: auto;
        scrollbar-color: var(--primaria) transparent;
        scrollbar-width: thin;
        @media screen and (min-width: 768px){
            position: relative;
            top: 5em;
            right: 0em;
        }
        @media screen and (min-width: 1200px){
            flex-direction: row;
        }
    }
    .tecnologias {
        display: flex;
        flex-direction: column;
        @media screen and (min-width: 1200px){
            overflow-y: auto;
            scrollbar-color: var(--primaria) transparent;
            scrollbar-width: thin;
        }

    }
    .ferramentas {
        display: flex;
        flex-direction: column;
        @media screen and (min-width: 1200px){
            overflow-y: auto;
            scrollbar-color: var(--primaria) transparent;
            scrollbar-width: thin;
        }
    }
    .unidade {
        display: flex;
        flex-direction: column;
        @media screen and (min-width: 1200px){
            overflow-y: auto;
            scrollbar-color: var(--primaria) transparent;
            scrollbar-width: thin;
        }
    }
    p {
        margin: 0;
        margin-bottom: 0.2em;
        text-align: center;
    }
`

const BotaoFiltrar = styled.button`
    display: flex;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin: 10px;
    padding: 5px;
    align-items: center;
    border: 3px solid var(--primaria);
    border-radius: 13px;
    &:hover {
        cursor: pointer;
    }
`

const DivPaginacao = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    min-width: 5em;
    height: 5em;
    `

const TextoPaginacao = styled.h3`
    resize: none;
    height: 24px;
    width: 100%;
    text-align: end;
    font-family: Arial, Helvetica, sans-serif;
`

export { DivAbaSuperior, DivAreaPesquisa, BotaoFiltrar, DivPaginacao, TextoPaginacao }