import { DivPaginacao, TextoPaginacao } from "./Style";

const IndicadorPagina = ( { paginaAtual} ) => (
    <DivPaginacao id="DivPaginacao">
        <TextoPaginacao id="ReferenciaPagina">Página {paginaAtual}</TextoPaginacao>
    </DivPaginacao>
);
 
export default IndicadorPagina;