import { CaixaPessoal, ContainerNos, Ficha } from "./Style";

const SNos = () => (
    <CaixaPessoal>
        <h1>Sobre nós</h1>
        <ContainerNos>
            <Ficha>
                <img src="imagens/sobre-nos/eduardo.png"/>
                <h3>Eduardo Barros Peruzzo</h3>
                <p> Tenho 19 anos, cursando segundo período do curso de Engenharia da Computação do IBMEC.</p>
                <p>Contato:</p>
                <ul>
                    <li>eduardo.peruzzo05@gmail.com</li>
                    <li>Telefone: +55 (21) 99206-8454</li>
                    <li><a href="https://github.com/Eduardo-Peruzzo">Github</a></li>
                </ul>
            </Ficha>
            <Ficha>
                <img src="imagens/sobre-nos/pedro.png"/>
                <h3>Pedro dos Santos Carlos da Silva</h3>
                <p> Tenho 19 anos, cursando segundo período do curso de Engenharia de Software do IBMEC.</p>
                <p>Contato:</p>
                <ul>
                    <li>pedroselecto@gmail.com</li>
                    <li>Telefone: +55 (21) 99998-1199</li>
                    <li><a href="https://github.com/Pedroselecto">Github</a></li>
                </ul>
            </Ficha>
            <Ficha>
                <img src="imagens/sobre-nos/mateus.png"/>
                <h3>Mateus de M. C. Sachinho</h3>
                <p> Tenho 19 anos, cursando segundo período do curso de Ciência de Dados do IBMEC.</p>
                <p>Contato:</p>
                <ul>
                    <li>herculesxaquires@gmail.com</li>
                    <li>Telefone: +55 (21) 97998-2231</li>
                    <li><a href="https://github.com/MateusSachinho">Github</a></li>
                </ul>
            </Ficha>
            <Ficha>
                <img src="imagens/sobre-nos/estevao.png"/>
                <h3>Estevão Batista de Moraes</h3>
                <p> Tenho 7 anos, cursando segundo período do curso de Ciência de Dados do IBMEC.</p>
                <p>Contato:</p>
                <ul>
                    <li>estevaomoraes48@gmail.com</li>
                    <li>Telefone: +55 (21) 96568-1220</li>
                    <li><a href="https://github.com/EstevaoMO">Github</a></li>
                </ul>
            </Ficha>
        </ContainerNos>
    </CaixaPessoal>
);

export default SNos;