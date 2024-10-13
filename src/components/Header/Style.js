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
    &:hover{
      background-color: var(--destaque);
      color: var(--secundaria);
    }
  }

`

export {Top};