import styled from "styled-components"

import rodape from "assets/IMG/rodape.svg"

export const Foter = styled.footer`
    width: 100%;
    display: flex;
    background-image: url(${rodape});
    
    section {
        picture{
            display: flex;
            margin-left: 23rem;
        }
    } 
`