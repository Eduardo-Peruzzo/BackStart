import DetalhesProjeto from "../components/DetalhesProjeto/DetalhesProjeto";
import Base from "./Base";
import detalhes from "../data/detalhes-projetos.json"
import { useParams } from "react-router-dom";

const ProjetoDetalhes = () => {

    const {id} = useParams();

    const detalhesFiltrados = detalhes.filter(
      (elemento) => (elemento.id === (id))
    )

    return(
    <Base>
        {
            detalhesFiltrados.map( (elemento, index) => (
            <DetalhesProjeto
                key={index}
                titulo={elemento.titulo}
                desenvolvedores={elemento.desenvolvedores}
                data={elemento.data}
                local={elemento.local}
                foto={elemento.foto}
                resumo={elemento.resumo}
                descricao={elemento.descricao}
                sobrenos={elemento.sobrenos}
            />
            ))
            }
    </Base>
    )
};

export default ProjetoDetalhes;