import styled from "styled-components"

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
        font-size: 26px;
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

export { DivPesquisar, InputPesquisar, BotaoPesquisar, ImgPesquisa }