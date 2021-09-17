import styled from "styled-components"
import { colors } from "styles/GlobalStyle"


export const Main3 = styled.main`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${colors.bgcolors};

    section{
        nav{
            p{
                display: flex;
                text-align: center;
                font-size: 2rem;
                ${colors.textbgcolor};
                width: 70%;
                padding: 1rem;
                margin-left: 13rem;
                margin-top: 2rem;
            }
        }
    }

    section .cojo{
        display: flex;
        flex-direction: row;
        width: 20%;
            section .cojo picture{
                padding: 5rem;
                    section .cojo picture h4{
                        font-size: 1.2rem;
                        text-align: center;
                        background-color: #C4C4C4;
                        padding: 1rem;
                    }
                    section .cojo picture img{
                        padding-top: 1rem;
                        padding-bottom: 1rem;
                    }  
            }
    }
`