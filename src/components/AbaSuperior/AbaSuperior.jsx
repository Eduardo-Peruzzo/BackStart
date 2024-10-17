import {DivAreaPesquisa, InputPesquisar, DivFiltrar, DivAbaSuperior, DivPaginacao, TextoPaginacao, BotaoPesquisar, DivPesquisar, ImgPesquisa} from "./Style"

const AbaSuperior = ( props ) => (
    <DivAbaSuperior id="DivAbaSuperior">
        <DivAreaPesquisa id="DivPesquisa">
            <DivPesquisar id="DivPesquisar">
                <InputPesquisar id="InputPesquisa" placeholder="Pesquisar..."></InputPesquisar>
                <BotaoPesquisar> <ImgPesquisa src="imagens/icons/search.png" alt="icon created by Tanah Basah - Flaticon"/></BotaoPesquisar>
            </DivPesquisar>

            <DivFiltrar id="DivFiltrar"/>
        </DivAreaPesquisa>

        <DivPaginacao id="DivPaginacao">
            <TextoPaginacao id="ReferenciaPagina">Página 1</TextoPaginacao>
        </DivPaginacao>
    </DivAbaSuperior>
);

export default AbaSuperior;