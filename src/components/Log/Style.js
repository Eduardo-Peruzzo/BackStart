import styled from "styled-components";

const DivLogin = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    height: 60vh;
    label {
        display: flex;
        flex-direction: column;
        margin: 1em 0;
        margin-bottom: 0;
    }
    button {
        margin-top: 1em;
        font-size: 16px;
    }
`

const InputSenha = styled.input`
    font-size: 24px;
    width: 12em;
    margin-top: 5px;

`
export {DivLogin, InputSenha}