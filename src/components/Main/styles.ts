import styled from "styled-components"
import { colors } from "styles/GlobalStyle"


export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: "${colors.bgcolors}";

    section{
        margin-top: 1rem;
        picture{
            align-items: center;
        }
        .supernin{
            display: flex;
            flex-direction: row;
            margin-left:4rem;
            height: 11.563rem;
        }
        .ps1apre{
            display: flex;
            flex-direction: row-reverse;
            margin-right: 4rem;   
        }
        .frase1{
            text-align: center;
            background-color: #C4C4C4;
            font-size: 1.6rem;
            padding: 1rem;
            width: 70%; 
            margin-left: 1rem; 
        }
        .frase2{
            text-align: center;
            background-color: #C4C4C4;
            font-size: 1.6rem;  
            padding: 1rem; 
            width: 60%; 
            margin-right: 1rem;  
        }
    }
    div{
        ul{
            margin-top: 1rem;
            justify-content: center;
            list-style: none;
            display: flex;
            flex-direction: row;
            li{
                background-color: ${colors.textbgcolor};
                padding: 3rem;
                a{
                    padding-left: 13.8rem;
                    padding-right: 13.8rem;
                    text-decoration: none;
                    color: black;
                    font-size: 1.5rem;
                }
            }
        }
    }

`
export const A = styled.a`

`