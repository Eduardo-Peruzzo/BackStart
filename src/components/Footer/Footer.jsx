import { Link } from "react-router-dom";
import { Bottom } from "./Style";

const Footer = () => {
    const linguaAtual = localStorage.getItem("lingua")

    const definirLingua = (pt, eng) => {
        if (linguaAtual === "pt") { return pt }
        if (linguaAtual === "eng") { return eng }
    }
    return (
        <Bottom>
            <Link to="/sobre-nos">{definirLingua("Sobre nós", "About us")}</Link>
        </Bottom>
    )
};

export default Footer;