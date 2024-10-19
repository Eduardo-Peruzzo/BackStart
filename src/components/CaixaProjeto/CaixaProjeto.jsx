import { Link } from "react-router-dom";
import {Quadrado, Foto, NomeProj, DescProj} from "./Style"

const CaixaProjeto = ( props ) => (

    <Quadrado>
        <Link to={`/projeto/${props.id}`}>
        <Foto><img src={props.foto}/></Foto>
        <NomeProj>{props.nome}</NomeProj>
        <DescProj>{props.desc} </DescProj>
        </Link>
    </Quadrado>
);

export default CaixaProjeto;