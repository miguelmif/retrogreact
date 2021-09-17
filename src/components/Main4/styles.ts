import styled from "styled-components"
import { colors } from "styles/GlobalStyle"


export const Main4 = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${colors.bgcolors};

    .ulti{
        display: flex;
        flex-direction: row;
            .difi{
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: 5rem;
                    picture{
                        display: flex;
                        flex-direction: row;
                        padding: 0.8rem;
                            h4{
                                font-size: 2rem;
                                padding: 2rem;
                            }
                    }
            }
    }
    section{
        nav{
            p{
                display: flex;
                text-align: center;
                font-size: 2rem;
                background-color: #C4C4C4;
                width: 70%;
                padding: 1rem;
                margin-left: 13rem;
                margin-top: 2rem;
            }
        }
    }
    section .texto{
        display: flex;
        flex-direction: row;
        text-align: center;
        font-size: 2rem;
        background-color: #C4C4C4;
        width: 30%;
        padding: 2rem;
        margin-left: 10rem;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
`