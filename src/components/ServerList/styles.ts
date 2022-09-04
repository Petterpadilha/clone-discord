import styled from "styled-components";

export const Container = styled.div `
    grid-area: SL;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--tertiary);
    padding: 11px 0;
    max-height:100vh;
    
    // Criando um stroll
    overflow-y: scroll;
    ::-webkit-scrollbar {
    display: none;
}
`;

export const Separator = styled.div `
    // Criando um separador da barra lateral 
    width: 32px;
    border-bottom: 2px solid var(--quaternary);
    margin-bottom: 8px;
    



`;