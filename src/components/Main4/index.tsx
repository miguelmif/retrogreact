import * as S from "./styles"
import pag4foto1 from "assets/IMG/Rectangle38.svg"
import pag4foto2 from "assets/IMG/Rectangle44.svg"
import pag4foto3 from "assets/IMG/Rectangle42.svg"

const Main4 = () => {
    return (
        <S.Main4>
        <section>
                <nav>
                    <p>Agora que conhece um pouco mais sobre jogos e videogames, saiba um pouco mais sobre nós:</p>
                 </nav>
           <section className="ulti">
                <h4 className="texto">
            Somos um grupo de apreciadores de jogos antigos, tudo o que queremos é passar um pouco do apreço que temos por esses jogos e consoles para outras pessoas!
                </h4>
            <section className="difi">
                <picture>
                    <img src={pag4foto1} alt=""/>
                        <h4>
                            @retro-g
                        </h4>
                </picture>
                <picture>
                    <img src={pag4foto2} alt=""/>
                        <h4>
                            Retro-G
                        </h4>
                </picture>
                <picture>
                    <img src={pag4foto3} alt=""/>
                        <h4>
                             Retro-G
                        </h4>
                </picture>
            </section>
        </section>
    </section>
         
        </S.Main4>
    )
}
export default Main4