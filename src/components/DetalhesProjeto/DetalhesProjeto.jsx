import { AreaInicial, DescProjeto, ImagemProjeto, InfoProjeto } from "./Style";

const DetalhesProjeto = (props) => (
    <>
    <AreaInicial id="AreaInicial">
        <ImagemProjeto id="ImagemProjeto"><img src="imagens/primeiro-computador.png" alt="" /></ImagemProjeto>
        <InfoProjeto id="InfoProjeto">
            <h1>oi</h1>
            <p>ado ado ado, quem leu é viado Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit nobis molestiae nam voluptates autem expedita dolor tempore ut iusto provident, cupiditate obcaecati ratione ipsam eos architecto atque iure? Iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veritatis similique ipsam quasi porro vero dicta ut! Nihil quo, architecto est esse quam qui molestias ex aut ut minima. Magni. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam tempora nemo, perspiciatis, excepturi a dolorem maiores aspernatur, officia enim veniam esse et adipisci quos! Consequatur eum numquam dolores fuga voluptatem.</p>
        </InfoProjeto>
    </AreaInicial>
    <DescProjeto><h1>bla bla bla</h1></DescProjeto>
    </>
);

export default DetalhesProjeto;