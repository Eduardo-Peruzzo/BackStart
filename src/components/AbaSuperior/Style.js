import styled from "styled-components";

const DivAbaSuperior = styled.div`
    display: flex;
    width: 95%;
    margin: auto;
    padding: 1em .20em;
`

const DivAreaPesquisa = styled.div`
    align-items: center;
    display: flex;
    width: 80%;
    height: 5em;
`

const DivPesquisar = styled.div`
    display: flex;
    width: 20em;
    border: 3px solid var(--primaria);
    border-radius: 50px;
    margin-right: 1.5em;
    `
const InputPesquisar = styled.input`
    background-color: transparent;
        margin: auto;
        width: 6.5em;
        height: 1.5em;
        border-width: 0px;
        padding: 2px;
        padding-left: 20px;
        font-size: 32px;
        text-align: left;
    &:focus{
        outline: none;
    }
`

const BotaoPesquisar = styled.button`
    background-color: transparent;
    width: 25%;
    align-items: center;
    border-width: 0px;
    padding: .3m;
    :hover {
        cursor: pointer;
    }
`

const ImgPesquisa = styled.img`
    margin: auto;
    width: 30px;
    height: 30px;
`

const DivFiltrar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
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
    height: 5em;
    `

const TextoPaginacao = styled.h3`
    resize: none;
    height: 24px;
    width: 100%;
    text-align: end;
    font-family: Arial, Helvetica, sans-serif;
`

export {DivAbaSuperior, DivAreaPesquisa, InputPesquisar, DivFiltrar, DivPaginacao, TextoPaginacao, BotaoPesquisar, ImgPesquisa, DivPesquisar}