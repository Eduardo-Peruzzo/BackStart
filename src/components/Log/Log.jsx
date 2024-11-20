import { DivLogin, InputSenha } from "./Style"

const Log = () => {
    const linguaAtual = localStorage.getItem("lingua")

    const definirLingua = (pt, eng) => {
        if (linguaAtual === "pt") { return pt }
        if (linguaAtual === "eng") { return eng }
    }

    const verificaLogin = () => {
        const email = document.getElementById("email").value
        const senha = document.getElementById("senha").value

        if (email === "backstart@gmail.com" && senha === "senha") {
            localStorage.setItem("adm", "logado")
            window.location = "/"
        } else {
            alert(definirLingua("Credenciais incorretas", "Incorrect credentials"))
        }
    }

    return (
        <DivLogin>
            <h1>Login</h1>
            <label htmlFor="email">
                {definirLingua("Digite seu email:", "Type your email:")}
                <InputSenha name="email" placeholder="Email" id="email" type="email"></InputSenha>
            </label>
            <label htmlFor="password">
                {definirLingua("Digite sua senha:", "Type your password:")}
                <InputSenha name="password" placeholder="Password" id="senha" type="password"></InputSenha>
            </label>
            <button onClick={verificaLogin}>{definirLingua("Enviar", "Send")}</button>
        </DivLogin>
    )
}

export default Log;