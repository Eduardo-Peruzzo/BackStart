import styled from "styled-components";

const ContainerPaginacao = styled.div`
    margin: auto;
    margin-bottom: 1em;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Pagina = styled.button`
    color: var(--primaria);
    font-size: 1em;
    letter-spacing: 5px;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
`

export {ContainerPaginacao, Pagina};