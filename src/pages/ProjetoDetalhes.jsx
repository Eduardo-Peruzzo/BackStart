import DetalhesProjeto from "../components/DetalhesProjeto/DetalhesProjeto";
import Base from "./Base";
import detalhes from "../data/detalhes-projetos.json"
import detalhesEng from "../data/detalhes-projetos-eng.json"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProjetoDetalhes = () => {
    const linguaAtual = localStorage.getItem("lingua")

    const definirLingua = (pt, eng) => {
        if (linguaAtual === "pt") { return pt }
        if (linguaAtual === "eng") { return eng }
    }

    const [dados, setDados] = useState([]);

    useEffect(() => {
      setDados(definirLingua(detalhes, detalhesEng))
    }, [])

    const { id } = useParams();

    const detalhesFiltrados = dados.filter(
        (elemento) => (elemento.id === (id))
    )

    return (
        <Base>
            {
                detalhesFiltrados.map((elemento, index) => (
                    <DetalhesProjeto
                        key={index}
                        titulo={elemento.titulo}
                        desenvolvedores={elemento.desenvolvedores}
                        dataInicio={elemento.dataInicio}
                        dataFim={elemento.dataFim}
                        local={elemento.local}
                        fotoPrincipal={elemento.fotoPrincipal}
                        fotos={elemento.fotos}
                        resumo={elemento.resumo}
                        descricao={elemento.descricao}
                        especificacoes={elemento.especificacoes}
                        detalhamento={elemento.detalhamento}
                        topico1={elemento.topico1}
                        topico2={elemento.topico2}
                        topico3={elemento.topico3}
                        descricao1={elemento.descricao1}
                        descricao2={elemento.descricao2}
                        descricao3={elemento.descricao3}
                        sobrenos={elemento.sobrenos}
                        arquivos={elemento.arquivos}
                    />
                ))
            }
        </Base>
    )
};

export default ProjetoDetalhes;