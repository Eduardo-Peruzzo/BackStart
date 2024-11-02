import { DivPesquisar, BotaoPesquisar, ImgPesquisa } from "../BarraDePesquisa/Style";

const BarraDePesquisa = (props) => {
    return (
        <DivPesquisar>
            {props.children}
            <BotaoPesquisar> <ImgPesquisa src="imagens/icons/search.png" label="icon created by Tanah Basah - Flaticon"/></BotaoPesquisar>
        </DivPesquisar>
    )
};

export default BarraDePesquisa;