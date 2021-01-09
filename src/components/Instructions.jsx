import React from 'react';
import { Link } from "react-router-dom";
export default (props) => {
    return (
        <div className="container box-container my-5 px-3">
            <h1 className="text-center my-3">Regras do jogo</h1>
            <h2>1 - Mãos do Blackjack: Combinações e valores das cartas</h2>
            <p>O objetivo principal é chegar aos 21 pontos.</p>
            <p>As cartas são simples:</p>
            <ul>
                <li>Um ás vale 1</li>
                <li>Cartas 2 a 9 valem o que são </li>
                <li>Reis, Rainhas, Valetes e a carta 10 contam como 10 pontos.</li>
            </ul>
            <p>A pontuação mais forte no 21 seria um ás e qualquer outra carta de 10 pontos.</p>
            <p><img alt="" src="https://aposta10.com/app/webroot/files/editor/images/Screen%20Shot%202019-09-17%20at%205_44_28%20PM.png" style={{ width: "100%" }} /></p>
            <p>Simples, né? </p>
            <p>Vamos à segunda parte.</p>

            <h2>2 - Distribuição de cartas</h2>
            <p>Cada jogador recebe duas cartas iniciais, apontadas pra cima mostrando quais são. (No Blackjack você joga contra a casa, não contra os demais jogadores, lembra?)</p>
            <p>O dealer também recebe duas cartas, porém uma para cima e outra para baixo.</p>
            <p>A partir daí cada jogador tem quatro opções de jogadas, como veremos a seguir.</p>

            <h2>4- Como ganha e como perde</h2>
            <p>Cada um recebe suas cartas conforme mencionado acima. (Jogadores duas pra cima, dealer uma para cima outra pra baixo)</p>
            <p>Quando terminar, o dealer irá virar a própria carta.</p>
            <p>Se eles tiver no total 16 ou menos, o dealer vai pedir mais uma (hit).</p>
            <p>Se tiver 17 ou mais, permanecerá (stand).</p>
            <p>Se a banca passar de 21 (busted), você vence desde que também não ultrapasse 21!</p>

            <h2>E agora?</h2>
            <p>E agora? Bom, isso é praticamente tudo! Agora é jogar!</p>
            <Link to="blackjack" className="btn btn-success btn-play">Jogar</Link>
        </div>
    )
}
