import styled from "styled-components";

const ContainerPaginacao = styled.div`
    margin: auto;
    margin-bottom: 1em;
    padding: 0 .6em;
    display: flex;
    justify-content: center;
    align-items: center;
  
  .paginaAtual{
    background-color: var(--secundaria);
    font-weight: 400;
    text-align: center;
    &:hover, &:active{
      background-color: var(--secundaria);
    }
  }
  
  .anterior, .proxima{
    background-color: #c6c6c6;
    padding: 5px 10px;
    font-size: 1.9em;
    color: black;
    font-weight: 600;

    &:hover{
      background-color: #c1c1c1;
      }
    }
`
const Pagina = styled.button`
    color: var(--primaria);
    font-size: 1.1em;
    text-align: center;
    margin: 0 2px;
    padding: 10px 15px;
    border: 1px solid #d6d6d6;
    font-family: Arial, Helvetica, sans-serif;
`

const PaginaAnterior = styled.button`
  background-color: #fafafa;
  border: none;
  margin: 0px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  img{
    width: 30px;
    height: 30px;
  }
  &:hover{
    background-color: #f1f1f1;
  }
`

const PaginaSeguinte = styled.button`
  background-color: #fafafa;
  border: none;
  margin: 0px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  img{
    width: 30px;
    height: 30px;
  }
  &:hover{
    background-color: #f1f1f1;
  }
`

export {ContainerPaginacao, Pagina, PaginaAnterior, PaginaSeguinte};