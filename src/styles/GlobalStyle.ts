import { createGlobalStyle } from "styled-components"

export default createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 100%;

    body{
        width: 100%;
        margin: 0 auto;
        background-color: rgba(4, 4, 13, 42%);
    }
}
`
export const colors = {
    bgcolors: "rgba(4, 4, 13, 42%)",
    textbgcolor: "#C4C4C4"
}