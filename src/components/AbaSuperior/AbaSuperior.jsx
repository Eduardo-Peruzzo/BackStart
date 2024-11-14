import { DivAreaPesquisa, BotaoFiltrar, DivAbaSuperior, DivPaginacao, TextoPaginacao } from "./Style"
import BarraDePesquisa from "../BarraDePesquisa/BarraDePesquisa";
import { useState, useEffect, useRef } from "react";

const AbaSuperior = (props) => {
    const [linguaAtual] = useState(localStorage.getItem("lingua") || "pt");

    const [opcoesFiltro, setOpcoesFiltro] = useState({
        react: false,
        python: false,
        html: false,
        typescript: false,
        sql: false,
        java: false,
        firebase: false,
        vscode: false,
        figma: false,
        photoshop: false,
        pycharm: false,
        git: false,
        barra: false,
        centro: false,
        saopaulo: false,
        farialima: false,
        belohorizonte: false,
        brasilia: false,
    });

    const clicarFiltro = () => {
        if (document.querySelector(".menu-principal").style.display == "none") {
            document.querySelector(".menu-principal").style.display = "flex"
        } else {
            document.querySelector(".menu-principal").style.display = "none"
        }
    }

    const mudarFiltro = (filtro) => {
        setOpcoesFiltro((anterior) => ({
            ...anterior, [filtro]: !anterior[filtro],
        }));
    };

    const definirLingua = (pt, eng) => {
        if (linguaAtual === "pt") { return pt }
        if (linguaAtual === "eng") { return eng }
    }

    const aplicarFiltros = () => props.mudancaFiltro(opcoesFiltro);

    return (
        <>
            <DivAbaSuperior id="AbaSuperior">
                <DivAreaPesquisa id="AreaPesquisa">
                    <BarraDePesquisa id="BarraDePesquisa">{props.pesquisa}</BarraDePesquisa>
                    <BotaoFiltrar id="BotaoFiltrar" onClick={clicarFiltro}>{props.filtro}</BotaoFiltrar>
                    <div className="menu-principal" style={{ display: "none" }}>
                        <div className="tecnologias">
                            <p>{definirLingua("Tecnologias", "Technologies")}</p>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('react')}
                                />
                                React
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('html')}
                                />
                                HTML
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('python')}
                                />
                                Python
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('sql')}
                                />
                                SQL
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('java')}
                                />
                                Java
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('typescript')}
                                />
                                TypeScript
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('firebase')}
                                />
                                Firebase
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('firebase')}
                                />
                                Firebase
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('firebase')}
                                />
                                Firebase
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('firebase')}
                                />
                                Firebase
                            </label>
                        </div>
                        <div className="ferramentas">
                            <p>{definirLingua("Ferramentas", "Tools")}</p>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('vscode')}
                                />
                                VSCode
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('figma')}
                                />
                                Figma
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('photoshop')}
                                />
                                Photoshop
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('pycharm')}
                                />
                                PyCharm
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('git')}
                                />
                                Git
                            </label>
                        </div>
                        <div className="unidade">
                            <p>{definirLingua("Unidade", "Unit")}</p>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('barra')}
                                />
                                Barra - RJ
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('centro')}
                                />
                                Centro - RJ
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('saopaulo')}
                                />
                                São Paulo - SP
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('farialima')}
                                />
                                Faria Lima - SP
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('belohorizonte')}
                                />
                                Belo Horizonte - MG
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => mudarFiltro('brasilia')}
                                />
                                Brasília - DF
                            </label>
                        </div>

                        {/* Caso seja necessário usar um botão para aplicar os filtros ao invés de aplicar o tempo inteiro */}
                        {/* <button onClick={aplicarFiltros}>Aplicar Filtros</button> */}

                        {useEffect(() => { aplicarFiltros() }, [opcoesFiltro])}
                    </div>
                </DivAreaPesquisa>

                <DivPaginacao id="DivPaginacao">
                    <TextoPaginacao id="ReferenciaPagina">Página {props.textoPagina}</TextoPaginacao>
                </DivPaginacao>
            </DivAbaSuperior >
        </>
    )

};

export default AbaSuperior;