import { AreaInicial, DescProjeto, ImagemProjeto, InfoProjeto } from "./Style";

const DetalhesProjeto = (props) => (
    <>
    <AreaInicial id="AreaInicial">
        <ImagemProjeto id="ImagemProjeto">
            <img src={props.foto}/>
            <button id="seta-esquerda"><img src="imagens/icons/seta-esquerda-imagem.png"/></button>
            <button id="seta-direita"><img src="imagens/icons/seta-direita-imagem.png"/></button>
        </ImagemProjeto>
        <InfoProjeto id="InfoProjeto">
            <h1>{props.titulo}</h1>
            <h3>Quem criou o projeto:</h3>
            <ul>
                {props.desenvolvedores.map((elemento, index) => (
                    <li key={index}>{elemento}</li>
                ))}
            </ul>
            <p>{props.resumo}</p>
        </InfoProjeto>
    </AreaInicial>
    <DescProjeto>
        {props.descricao}
        {/* <p>Principais características do projeto:</p>
        <ul>
            <li>Dimensões:</li>
                <li class="espaco-lista">Com impressionantes 30 toneladas, o ENIAC ocupava uma sala inteira de aproximadamente 167 metros quadrados, o equivalente a uma pequena casa</li>
            <li>Componentes:</li>
                <li class="espaco-lista">Equipado com 17.468 válvulas a vácuo, 7.200 diodos de cristal, 1.500 relés, 70 mil resistores e 10 mil capacitores, o ENIAC era uma verdadeira obra de engenharia da época.</li>
            <li>Capacidade de Processamento:</li>
                <li class="espaco-lista">O ENIAC realizava 5.000 operações por segundo, uma velocidade incomparável para os padrões da época. Para fins de comparação, o ENIAC era cerca de mil vezes mais rápido que os sistemas de computação mecânicos da época.</li>
            <li>Programação manual:</li>
                <li class="espaco-lista"> Diferentemente dos computadores modernos, o ENIAC não possuía uma memória programável. A sua programação era feita manualmente, através da conexão de cabos e ajustes de interruptores. Isso fazia com que a mudança de um programa para outro levasse dias.
                </li>
        </ul> */}

    </DescProjeto>
    </>
);

export default DetalhesProjeto;