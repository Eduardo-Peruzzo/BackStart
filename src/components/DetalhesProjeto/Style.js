import styled from "styled-components";

const AreaInicial = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
    width: 100%;
    height: 25em;
`

const ImagemProjeto = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45%;
    position: relative;
    &:hover #seta-direita{
        opacity: 1;
    }
    &:hover #seta-esquerda{
        opacity: 1;
    }
    img {
        max-width: 95%;
    }
    button {
        border-width: 0;
        background-color: transparent;
        padding: 0;
    }
    button:hover {
        cursor: pointer;
    }
    #seta-esquerda {
        position: absolute;
        right: 83%;
        max-width: 10%;
        opacity: 0;
        transition: 0.3s;
    }
    #seta-direita {
        position: absolute;
        left: 83%;
        max-width: 10%;
        opacity: 0;
        transition: 0.3s;
    }
`

const InfoProjeto = styled.div`
    width: 50%;
    padding-right: 15px;
    h1 {
        text-align: center;
    }
    h3 {
        text-align: left;
        margin-top: 5px;
    }
    p {
        margin: 5px 0;
    }
    ul {
        margin: 5px 0;
    }
    li {
        font-weight: bold;
    }
`

const DescProjeto = styled.div`
    width: 100%;
`


export {AreaInicial, ImagemProjeto, InfoProjeto, DescProjeto}