import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ParametrosPesquisa = () => {
    const caminho = useLocation();
    const [pagina, setPagina] = useState(null);

    console.log("Caminho" + caminho);

    const parametrosHash = new URLSearchParams(location.hash.replace('#', ''));
    console.log("parametros hash", parametrosHash)
    setPagina(parametrosHash.get('pagina'));
    console.log('pagina' + pagina);
}

export default ParametrosPesquisa;
