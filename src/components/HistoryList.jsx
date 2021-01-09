import React from "react";
import { Link } from "react-router-dom";
import { GAME_STATUS } from '../util/constants'
import Cards from './Blackjack.Cards'

const Game = (props) => {
  const { game } = props
  console.log(props, game)
  return <div className={`col card card-game status-${game.gameStatus}`}>
    <div className="mb-3 d-flex flex-column justify-content-center">
      <div className="text-white">{game.date.toLocaleString()}</div>
      <Cards cards={game.dealerCards} dealer={true} gameStatus={game.gameStatus} />
      <div className="text-white info">Dealer {game.dealerCards.map(x => x.valueInt).reduce((a, b) => a + b, 0)}</div>
    </div>
    <div className="mt-3 d-flex flex-column justify-content-center">
      <Cards cards={game.userCards} />
      <div className="text-white info">Você {game.userCards.map(x => x.valueInt).reduce((a, b) => a + b, 0)}</div>
    </div>
  </div>
}

export default ({ games }) => {
  return (
    <div className="blackjack-container pb-5">
      <h1 className="pt-4 mb-3" >Meus jogos
        <span className="badge bg-primary mx-1" style={{ backgroundColor: '#007bff', color: '#FFF' }}>{games.filter(x => x.gameStatus === GAME_STATUS.win).length}</span>
        <span className="badge bg-warning mx-1" style={{ backgroundColor: '#007bff', color: '#FFF' }}>{games.filter(x => x.gameStatus === GAME_STATUS.draw).length}</span>
        <span className="badge bg-danger mx-1" style={{ backgroundColor: '#007bff', color: '#FFF' }}>{games.filter(x => x.gameStatus === GAME_STATUS.lose).length}</span>
      </h1>
      <div className="container">
        {games.length === 0 ?
          <div className="alert alert-primary col-md-6 m-auto" role="alert">
            <p>Sem histórico de partidas.</p>
            <p>
              <Link className="btn btn-link" to={`blackjack`} >
                Clique aqui
              </Link> para jogar</p>
          </div>
          : null}
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5 row-history">
          {games.map(game => (
            <Game game={game} />
          ))}
        </div>
      </div>
    </div >
  );
};
