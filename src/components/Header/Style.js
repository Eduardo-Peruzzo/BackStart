import styled from "styled-components"

const Top = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 4vh 3.5vw;
  background-color: var(--primaria);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  img {
    max-width: 6em;
    max-height: 5em;
  }
  .botao {
    text-align: center;
    padding: .3em .5em;
    margin: 0 .7em;
    min-width: 5em;
    background-color: var(--destaque);
    text-decoration: none;
    font-weight: bold;
    color: var(--background);
    text-transform: uppercase;
    border-radius: 10px;
    box-shadow: 0px 4px 10px black;
    &:hover{
      background-color: var(--destaque);
      color: var(--secundaria);
    }
  }

`
const Container_botoes = styled.div`
  display: flex;
  margin-top: 30px;
  padding-left: 2.5vw;
  .filtragem {
    display: flex;
    margin-right: 60vw;
  }
`

const Pesquisa = styled.div`
  border: solid 2px var(--primaria);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 15em;
  height: 3em;
  margin-right: 2.5vw;
`

const Texto = styled.p`
  color: #A8A4A4;
  font-size: 32px;
  padding: 0 10px;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  .pagina {
    color: var(--primaria);
    margin: 0;
  }
`

const Filtro = styled.div`
  border: solid 2px var(--primaria);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  width: 3em;
  height: 3em;
`

export {Top, Pesquisa, Texto, Container_botoes, Filtro};