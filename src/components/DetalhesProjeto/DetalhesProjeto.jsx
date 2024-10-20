import { AreaInicial, DescProjeto, ImagemProjeto, InfoProjeto } from "./Style";

const DetalhesProjeto = (props) => {

    return(
    <>
    <AreaInicial id="AreaInicial">
        <ImagemProjeto id="ImagemProjeto">
            <img src={props.foto}/>
            <button id="seta-esquerda"><img src="imagens/icons/seta-esquerda-imagem.png"/></button>
            <button id="seta-direita"><img src="imagens/icons/seta-direita-imagem.png"/></button>
        </ImagemProjeto>
        <InfoProjeto id="InfoProjeto">
            <h1>{props.titulo}</h1>
            <h4 id="criadores">Quem criou o projeto:</h4>
            <ul>
                {props.desenvolvedores.map((dev, index) => (
                    <li key={index}>{dev}</li>
                ))}
            </ul>
            <a href={props.sobrenos}>Sobre os desenvolvedores</a>
            <h4 id="data" >{props.data}</h4>
            <h4>{props.local}</h4>
            <p>{props.resumo}</p>
        </InfoProjeto>
    </AreaInicial>
    <DescProjeto>
        <h3>Principais características do projeto:</h3>
        <ul>
            {props.especificacoes.map((especificacao, index) => (
                <><li key={index}>{especificacao}</li>
                <ul>
                    <li key={index}>{props.detalhamento[index]}</li>
                </ul></>
            ))}
        </ul>

        <h3>Desafios:</h3>
        <p>{props.desafios}</p>

        <h3>Inovação e Objetivos:</h3>
        <p>{props.inovacaoEobjetivos}</p>

    </DescProjeto>
    </>
    )
};

export default DetalhesProjeto;