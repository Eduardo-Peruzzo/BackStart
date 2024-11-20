import { AreaInicial, ContainerImagem, DescProjeto, ImagemPrincipal, ImagensProjeto, InfoProjeto } from "./Style";

const DetalhesProjeto = (props) => {
    const linguaAtual = localStorage.getItem("lingua")

    const definirLingua = (pt, eng) => {
        if (linguaAtual === "pt") { return pt }
        if (linguaAtual === "eng") { return eng }
    }

    const compartilhar = () => {
        if (document.querySelector("#compartilhar").style.display == "none") {
            document.querySelector("#compartilhar").style.display = "flex"
        } else {
            document.querySelector("#compartilhar").style.display = "none"
        }
    }

    return (
        <>
            <AreaInicial id="AreaInicial">
                <ImagemPrincipal id="ImagemProjeto">
                    <img src={props.fotoPrincipal} />
                    {/* <button id="seta-esquerda"><img src="imagens/icons/seta-esquerda-imagem.png"/></button>
            <button id="seta-direita"><img src="imagens/icons/seta-direita-imagem.png"/></button> */}
                </ImagemPrincipal>
                <InfoProjeto id="InfoProjeto">
                    <div id="titulo">
                        <h1>{props.titulo}</h1>
                        <abbr title={definirLingua("Compartilhar projeto", "Share projetct")}><button onClick={compartilhar}><img src="imagens/icons/compartilhar.png" alt="botão compartilhar" /></button></abbr>
                        <div id="compartilhar" style={{ display: "none" }}>
                            <img src="imagens/icons/whatsapp.png" alt="compartilhar por whatsapp" />
                            <img src="imagens/icons/instagram.png" alt="compartilhar por instagram" />
                            <img src="imagens/icons/gmail.png" alt="compartilhar por gmail" />
                            <img src="imagens/icons/yahoo.png" alt="compartilhar por yahoo" />
                        </div>
                    </div>
                    <h4 id="criadores">{definirLingua("Quem criou o projeto:", "Who created the project:")}</h4>
                    <ul>
                        {props.desenvolvedores.map((dev, index) => (
                            <li key={index}>{dev}</li>
                        ))}
                    </ul>
                    <a href={props.sobrenos} id="sobre-nos">{definirLingua("Sobre os desenvolvedores", "About the developers")}</a>
                    <h4 id="data-inicio" >{definirLingua("Data de início do projeto:", "Project start date:")} {props.dataInicio}</h4>
                    {props.dataFim && (<h4 id="data-fim" >{definirLingua("Data de finalização do projeto:", "Project completion date:")} {props.dataFim}</h4>)}
                    <h4 id="local">Local: {props.local}</h4>
                    <p>{props.resumo}</p>
                </InfoProjeto>
            </AreaInicial>
            <DescProjeto>
                <h3>{definirLingua("Principais características do projeto:", "Project's main features:")}</h3>
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

                {props.arquivos && (<h3><a href={props.arquivos} id="arquivos">{definirLingua("Arquivos do projeto", "Project files")}</a></h3>)}

                {props.fotos &&
                    (<><h3 id="fotos">{definirLingua("Outras imagens do projeto:", "Other images of the project:")}</h3>
                        <ImagensProjeto>
                            {props.fotos.map((foto, index) => (<ContainerImagem><img src={foto} key={index} /></ContainerImagem>))}
                        </ImagensProjeto>
                    </>)}
            </DescProjeto>
        </>
    )
};

export default DetalhesProjeto;