import styled from "styled-components";

const CaixaPessoal = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
        margin-bottom: 30px;
    }
`

const ContainerNos = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
`

const Ficha = styled.div`
    width: 20em;
    height: auto;
    min-height: 35em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 4px solid var(--primaria);
    border-radius: 50px;
    background-color: var(--primaria);
    img {
        max-width: 80%;
        border: 2px solid var(--primaria);
        border-radius: 1000px;
        margin-top: 1.5em;
    }
    h3 {
        color: white;
        margin-top: 0.6em;
        text-align: center;
    }
    p {
        color: white;
        width: 80%;
        text-align: justify;
    }
    ul {
        width: 80%;
        margin: 0;
    }
    li {
        color: white;
    }
    a {
        color: cyan;
    }
    a:hover {
        color: var(--secundaria);
    }
`

export {CaixaPessoal, ContainerNos, Ficha}