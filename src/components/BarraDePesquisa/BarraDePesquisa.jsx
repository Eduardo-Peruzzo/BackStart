import { InputPesquisar, DivPesquisar, BotaoPesquisar, ImgPesquisa } from "../BarraDePesquisa/Style";

const BarraDePesquisa = () => (

    <DivPesquisar>
        <InputPesquisar id="InputPesquisa" placeholder="Pesquisar..."></InputPesquisar>
        <BotaoPesquisar> <ImgPesquisa src="imagens/icons/search.png" label="icon created by Tanah Basah - Flaticon"/></BotaoPesquisar>
    </DivPesquisar>

);

export default BarraDePesquisa;