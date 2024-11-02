import {DivAreaPesquisa, DivFiltrar, DivAbaSuperior, DivPaginacao, TextoPaginacao } from "./Style"
import BarraDePesquisa from "../BarraDePesquisa/BarraDePesquisa";

const AbaSuperior = ( props ) => (
    <DivAbaSuperior id="AbaSuperior">
        <DivAreaPesquisa id="AreaPesquisa">
            <BarraDePesquisa id="BarraDePesquisa">{props.children}</BarraDePesquisa>
            <DivFiltrar id="DivFiltrar"><img src="imagens/icons/filtro.png" alt="" /></DivFiltrar>
        </DivAreaPesquisa>

        <DivPaginacao id="DivPaginacao">
            <TextoPaginacao id="ReferenciaPagina">Página 1</TextoPaginacao>
        </DivPaginacao>
    </DivAbaSuperior>
);

export default AbaSuperior;