import {Quadrado, Foto, NomeProj, DescProj} from "./Style"

const Caixa = ( props ) => (
    <Quadrado>
        <Foto></Foto>
        <NomeProj>{props.nome}</NomeProj>
        <DescProj>{props.desc} </DescProj>
    </Quadrado>
);

export default Caixa;