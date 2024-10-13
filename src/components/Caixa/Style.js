import styled from "styled-components";

const Quadrado = styled.div`
    width: 320px;
    height: 280px;
    border: 3px solid var(--primaria);
    border-radius: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    `
    const Foto = styled.div`
        width: 320px;
        height: 139px;
        border: 3px solid var(--primaria);
        background-color: grey;
        position: relative;
        right: 3px;
        bottom: 3px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    `
    const NomeProj = styled.h4`
        top: 140px;
        padding: 4px;
    `
    const DescProj = styled.p`
        top: 160px;
        padding: 4px;
        font-size: 12px;
    `
export {Quadrado, Foto, NomeProj, DescProj}