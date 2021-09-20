import * as S from "./styles"
import pag2foto1 from "assets/IMG/Rectangle12.svg"
import pag2foto2 from "assets/IMG/Rectangle21.svg"
import pag2foto3 from "assets/IMG/Rectangle16.svg"

const Main2 = () => {
    return (
        <S.Main2>
         <section>
            <nav>
                <p>Dentre todos os mais famosos jogos que já jogamos, esses três foram os melhores!</p>
            </nav>
            <section className="cojo">
                <picture>
                    <h4 className="texto1">
                        1°- Super Mário Bros
                    </h4>
                <img className="img1" src={pag2foto1} alt=""/>
                    <h4 className="texto2">
                        Super Mário Bros é o sucessor do Mario Bros, produzido pela Nintendo e publicado para o Famicon NES.
                    </h4>
                </picture>
                <picture>
                    <h4 className="texto3">
                        2°- Pokemon Yellow Version
                    </h4>
                <img className="img2" src={pag2foto2} alt=""/>
                    <h4 className="texto4">
                        Pokemon Yellow Version é o primeiro passo da Nintendo para nos trazer a imersão de ser um treinador pokemon.
                    </h4>
                </picture>
                <picture>
                    <h4 className="texto5">
                     3°- Sonic The Hedgehog 2
                    </h4>
                <img className="img3" src={pag2foto3} alt=""/>
                    <h4 className="texto6">
                        Sonic the Hedgehog 2 é a continuação da saga de Sonic, que introduziu o amigo do protagonista “Tails”. 
                    </h4>
                </picture>
            </section>
        </section>
        </S.Main2>
    )
}
export default Main2