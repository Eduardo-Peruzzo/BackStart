import { AreaInicial, DescProjeto, ImagemProjeto, InfoProjeto } from "./Style";

const DetalhesProjeto = (props) => (
    <>
    <AreaInicial id="AreaInicial">
        <ImagemProjeto id="ImagemProjeto"><img src="imagens/primeiro-computador.png" alt="" /></ImagemProjeto>
        <InfoProjeto id="InfoProjeto">
            <h1>O primeiro computador</h1>
            <p>ado ado ado, quem leu é viado Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit nobis molestiae nam voluptates autem expedita dolor tempore ut iusto provident, cupiditate obcaecati ratione ipsam eos architecto atque iure? Iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veritatis similique ipsam quasi porro vero dicta ut! Nihil quo, architecto est esse quam qui molestias ex aut ut minima. Magni. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam tempora nemo, perspiciatis, excepturi a dolorem maiores aspernatur, officia enim veniam esse et adipisci quos! Consequatur eum numquam dolores fuga voluptatem.</p>
        </InfoProjeto>
    </AreaInicial>
    <DescProjeto>
        <p>Principais características do projeto:</p>
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
        </ul>

    </DescProjeto>
    </>
);

export default DetalhesProjeto;