import { CaixaPessoal, ContainerNos, Ficha } from "./Style";

const SNos = () => {
    const linguaAtual = localStorage.getItem("lingua")

    const definirLingua = (pt, eng) => {
        if (linguaAtual === "pt") { return pt }
        if (linguaAtual === "eng") { return eng }
    }

    return (
        <CaixaPessoal>
            <h1>{definirLingua("Sobre nós", "About Us")}</h1>
            <ContainerNos>
                <Ficha>
                    <img src="imagens/sobre-nos/eduardo.png" />
                    <h3>Eduardo Barros Peruzzo</h3>
                    <p> {definirLingua("Tenho 19 anos, cursando segundo período do curso de Engenharia da Computação do IBMEC.", "I'm 19 years old and studying the second semester of the Computer Engineering course at IBMEC.")}</p>
                    <p>{definirLingua("Contato:", "Contact:")}</p>
                    <ul>
                        <li>eduardo.peruzzo05@gmail.com</li>
                        <li>Instagram: @instagram</li>
                        <li><a href="https://github.com/Eduardo-Peruzzo">Github</a></li>
                    </ul>
                </Ficha>
                <Ficha>
                    <img src="imagens/sobre-nos/pedro.png" />
                    <h3>Pedro dos Santos Carlos da Silva</h3>
                    <p> {definirLingua("Tenho 19 anos, cursando segundo período do curso de Engenharia de Software do IBMEC.", "I'm 19 years old and studying the second semester of the Software Engineering course at IBMEC.")}</p>
                    <p>{definirLingua("Contato:", "Contact:")}</p>
                    <ul>
                        <li>pedroselecto@gmail.com</li>
                        <li>Instagram: @instagram</li>
                        <li><a href="https://github.com/Pedroselecto">Github</a></li>
                    </ul>
                </Ficha>
                <Ficha>
                    <img src="imagens/sobre-nos/mateus.png" />
                    <h3>Mateus de M. C. Sachinho</h3>
                    <p> {definirLingua("Tenho 19 anos, cursando segundo período do curso de Ciência de Dados e IA do IBMEC.", "I'm 19 years old and studying the second semester of the Data Science and AI course at IBMEC.")}</p>
                    <p>{definirLingua("Contato:", "Contact:")}</p>
                    <ul>
                        <li>herculesxaquires@gmail.com</li>
                        <li>Instagram: @instagram</li>
                        <li><a href="https://github.com/MateusSachinho">Github</a></li>
                    </ul>
                </Ficha>
                <Ficha>
                    <img src="imagens/sobre-nos/estevao.png" />
                    <h3>Estevão Batista de Moraes</h3>
                    <p> {definirLingua("Tenho 17 anos, cursando segundo período do curso de Ciência de Dados e IA do IBMEC.", "I'm 17 years old and studying the second semester of the Data Science and AI course at IBMEC.")}</p>
                    <p>{definirLingua("Contato:", "Contact:")}</p>
                    <ul>
                        <li>estevaomoraes48@gmail.com</li>
                        <li>Instagram: @instagram</li>
                        <li><a href="https://github.com/EstevaoMO">Github</a></li>
                    </ul>
                </Ficha>
            </ContainerNos>
        </CaixaPessoal>
    )
};

export default SNos;