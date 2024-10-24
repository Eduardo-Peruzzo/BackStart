import { AreaInicial, ContainerImagem, DescProjeto, ImagemPrincipal, ImagensProjeto, InfoProjeto } from "./Style";

const DetalhesProjeto = (props) => {

    return(
    <>
    <AreaInicial id="AreaInicial">
        <ImagemPrincipal id="ImagemProjeto">
            <img src={props.fotoPrincipal}/>
            <button id="seta-esquerda"><img src="imagens/icons/seta-esquerda-imagem.png"/></button>
            <button id="seta-direita"><img src="imagens/icons/seta-direita-imagem.png"/></button>
        </ImagemPrincipal>
        <InfoProjeto id="InfoProjeto">
            <h1>{props.titulo}</h1>
            <h4 id="criadores">Quem criou o projeto:</h4>
            <ul>
                {props.desenvolvedores.map((dev, index) => (
                    <li key={index}>{dev}</li>
                ))}
            </ul>
            <a href={props.sobrenos} id="sobre-nos">Sobre os desenvolvedores</a>
            <h4 id="data-inicio" >Data de início do projeto: {props.dataInicio}</h4>
            {props.dataFim && (<h4 id="data-fim" >Data de finalização do projeto: {props.dataFim}</h4>)}
            <h4 id="local">Local: {props.local}</h4>
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

        {props.topico1 && (<><h3>{props.topico1}:</h3>
        <p>{props.descricao1}</p></>)}

        {props.topico2 && (<><h3>{props.topico2}:</h3>
        <p>{props.descricao2}</p></>)}

        {props.topico3 && (<><h3>{props.topico3}:</h3>
        <p>{props.descricao3}</p></>)}

        {props.arquivos && (<h3><a href={props.arquivos} id="arquivos">Arquivos do projeto</a></h3>)}

        {props.fotos &&
        (<><h3 id="fotos">Outras imagens do projeto:</h3>
            <ImagensProjeto>
                {props.fotos.map((foto, index) => (<ContainerImagem><img src={foto} key={index}/></ContainerImagem>))}
            </ImagensProjeto>
        </>)}
    </DescProjeto>
    </>
    )
};

export default DetalhesProjeto;