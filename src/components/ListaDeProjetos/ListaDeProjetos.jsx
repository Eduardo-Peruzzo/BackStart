import ContainerProjetos from "../ContainerProjetos/ContainerProjetos";
import CaixaProjeto from "../CaixaProjeto/CaixaProjeto";

const ListaDeProjetos = ({ dados }) => {
    return (
      <>
        <ContainerProjetos>
          {dados.map((elemento, index) => (
              <CaixaProjeto
                key={index}
                id={elemento.id}
                nome={elemento.nome}
                desc={elemento.desc}
                foto={elemento.foto}
              />
            ))}
        </ContainerProjetos>
      </>
    );
  }

  export default ListaDeProjetos;