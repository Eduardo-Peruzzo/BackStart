import { Link } from "react-router-dom";
import { Top } from "./Style";
import { useState } from "react";


const Header = () => {
  const [selecionarLingua, setSelecionarLingua] = useState(() => {
    return localStorage.getItem("lingua") || "pt";
  })

  if (localStorage.getItem("lingua")) {

  } else {
    localStorage.setItem("lingua", `${selecionarLingua}`)
  }

  const mudarSelect = (e) => {
    const novaLingua = e.target.value;
    setSelecionarLingua(novaLingua);
    localStorage.setItem("lingua", novaLingua);
    window.location.reload()
  };

  const logout = () => {
    localStorage.removeItem("adm")
    window.location.reload()
  }

  return (
    <>
      <Top>
        <Link to="https://www.ibmec.br"><img src="imagens/logo-ibmec.png" alt="logo ibmec" /></Link>
        <div>
          {localStorage.getItem("adm") && (<button className="botao" onClick={logout}>logout</button>)}
          <Link to="/" className="botao">Home</Link>
          <select name="linguagem" id="botao-lingua" className="botao" onChange={mudarSelect} value={selecionarLingua}>
            <option value="pt">PT-BR</option>
            <option value="eng">ENG</option>
          </select>
        </div>

      </Top>
    </>
  )
}

export default Header;