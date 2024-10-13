import {Quadrado, Foto, NomeProj, DescProj} from "./Style"

const Caixa = ( props ) => (
    <Quadrado>
        <Foto></Foto>
        <NomeProj>Nome do Projeto</NomeProj>
        <DescProj>Descrição breve do projeto</DescProj>
    </Quadrado>
)

export default Caixa;