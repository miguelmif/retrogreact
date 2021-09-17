import * as S from "./styles"
import retroimg from "assets/IMG/cabecalho.svg"

const Header = () => {
    return (
        <S.Header>
            <picture>
                <img src={retroimg} alt=""/>
            </picture>
        </S.Header>
    )
}
export default Header