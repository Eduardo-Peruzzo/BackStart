import styled from "styled-components"

const Bottom = styled.footer`
  padding: 2vh 3vw;
  background-color: var(--primaria);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  a {
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
  };
`;

export {Bottom};