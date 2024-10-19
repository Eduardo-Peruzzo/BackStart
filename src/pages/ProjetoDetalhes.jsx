import DetalhesProjeto from "../components/DetalhesProjeto/DetalhesProjeto";
import Base from "./Base";
import detalhes from "../data/detalhes-projetos.json"

const ProjetoDetalhes = () => (
    <Base>
        {
            detalhes.map( (elemento, index) => (
            <DetalhesProjeto
                key={index}
                titulo={elemento.titulo}
                desenvolvedores={elemento.desenvolvedores}
                data={elemento.data}
                local={elemento.data}
                foto={elemento.foto}
                resumo={elemento.resumo}
                descricao={elemento.descricao}
                sobrenos={elemento.sobrenos}
            />
            ))
            }
    </Base>
);

export default ProjetoDetalhes;