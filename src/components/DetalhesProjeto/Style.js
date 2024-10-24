import styled from "styled-components";

const AreaInicial = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    min-height: 25em;
    height: auto;
    @media screen and (min-width: 1200px){
        flex-direction: row;
    }
`

const ImagemPrincipal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    margin: 10px 0px;
    &:hover #seta-direita{
        opacity: 1;
    }
    &:hover #seta-esquerda{
        opacity: 1;
    }
    img {
        width: 95%;
        height: 95%;
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
        right: 87%;
        max-width: 10%;
        opacity: 0;
        transition: 0.3s;
    }
    #seta-direita {
        position: absolute;
        left: 87%;
        max-width: 10%;
        opacity: 0;
        transition: 0.3s;
    }
    @media screen and (min-width: 1200px) {
        width: 45%;
        margin: 0;
    }
`

const InfoProjeto = styled.div`
    width: 100%;
    padding-right: 15px;
    h1 {
        text-align: center;
    }
    h4 {
        text-align: left;
        margin-top: 5px;
        font-size: 16px;
        margin-bottom: 15px;
    }
    #criadores {
        margin-bottom: 5px;
    }
    #data-inicio {
        margin-top: 15px;
    }
    p {
        margin: 5px 0;
    }
    ul {
        margin-bottom: 5px;
        margin-top: 0;
    }
    li {
        font-weight: bold;
    }
    a {
        color: blue;
    }
    a:hover {
        color: var(--secundaria);
    }
    @media screen and (min-width: 1200px) {
        width: 50%;
    }
`

const DescProjeto = styled.div`
    width: 97%;
    padding: 15px;
    padding-right: 10px;
    a {
        color: blue;
    }
    a:hover {
        color: var(--secundaria);
    }
    #fotos {
        margin-top: 15px;
    }
`

const ImagensProjeto = styled.div`
    width: 95%;
    margin-top: 15px;
    gap: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 3em;
    img {
        max-height: 30em;
    }
`

const ContainerImagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        max-width: 100%;
    }
`


export {AreaInicial, ImagemPrincipal, InfoProjeto, DescProjeto, ImagensProjeto, ContainerImagem}