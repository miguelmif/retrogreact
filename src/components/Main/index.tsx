import * as S from "./styles"
import pag1foto1 from "assets/IMG/Super Nintendo.svg"
import pag1foto2 from "assets/IMG/Foto Ps1 apresentacao.svg"

const Main = () => {
    return (
        <S.Main>
        <section>
            <picture className="supernin">
            <img src= {pag1foto1} alt="Super Nintendo" />
            <h4 className="frase1">
                O melhor site sobre os antigos, e mais nostálgicos, vídeogames!
            </h4>
            </picture>
            <picture className="ps1apre">
                <img src= {pag1foto2} alt="PS1"/>
             <h4 className="frase2">
                Aqui cobrimos desde os consoles mais antigos da sony, como o PS1, até o nostálgico NES da Nintendo.
             </h4>
            </picture>
        </section>
        <div>
    <ul>
        <li>
            <S.A href="Jogos" target="_self">
                <h1>
                    Jogos
                </h1>     
            </S.A>
        </li>
        <li>
            <S.A href="Consoles" target="_self">
                <h1>
                    Consoles
                </h1>     
            </S.A>
        </li>
        <li>
            <S.A href="Sobrenos" target="_self">
                <h1>
                    Sobre nós
                </h1>     
            </S.A>
        </li>
    </ul>
    </div>
        </S.Main>
    )
}
export default Main