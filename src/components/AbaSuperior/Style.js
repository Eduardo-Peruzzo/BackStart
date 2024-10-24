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
`

const DivFiltrar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    margin: 10px;
    padding: 5px;
    align-items: center;
    border: 3px solid var(--primaria);
    border-radius: 13px;
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

export {DivAbaSuperior, DivAreaPesquisa, DivFiltrar, DivPaginacao, TextoPaginacao}