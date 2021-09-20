import * as S from "./styles"
import pag3foto1 from "assets/IMG/Rectangle26.svg"
import pag3foto2 from "assets/IMG/Rectangle27.svg"
import pag3foto3 from "assets/IMG/Rectangle28.svg"

const Main3 = () => {
    return (
        <S.Main3>
         <section>
            <nav>
                <p>Um jogo não é nada sem seu console, então trouxemos os nossos consoles preferidos:</p>
            </nav>
            <section className="cojo">
                <picture>
                    <h4 className="texto1">
                        1°- NES
                    </h4>
                <img className="img1" src={pag3foto1} alt=""/>
                    <h4 className="texto2">
                        O NES está de modo muito merecido no primeiro lugar, carregando em sua bagagem jogos lendários como The Legend of Zelda e Super Mario Bros 3
                    </h4>
                </picture>
                <picture>
                    <h4 className="texto3">
                        2°- Game Boy
                    </h4>
                <img className="img2" src={pag3foto2} alt=""/>
                    <h4 className="texto4">
                        O Game Boy vem em segundo lugar, mesmo sendo portátil, trouxe incríveis jogos, como o  Pokemon Yellow Version
                    </h4>
                </picture>
                <picture>
                    <h4 className="texto5">
                        3°- Playstation 1
                    </h4>
                    <img className="img3" src={pag3foto3} alt=""/>
                    <h4 className="texto6">
                        Em terceiro lugar vem um dos mais novos dos antigos, o PS1, trazendo consigo bons jogos em 3D, como o aclamado Silent Hill. 
                    </h4>
                </picture>
            </section>
        </section>
        </S.Main3>
    )
}
export default Main3