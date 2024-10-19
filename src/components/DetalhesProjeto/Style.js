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
    width: 50%;
`

const InfoProjeto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`

const DescProjeto = styled.div`
    width: 100%;
`

export {AreaInicial, ImagemProjeto, InfoProjeto, DescProjeto}