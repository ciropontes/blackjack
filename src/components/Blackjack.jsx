import React from "react";
import { GAME_STATUS } from '../util/constants'
import Cards from './Blackjack.Cards'

const ButtonAndScore = ({ props }) => {

  if (props.gameStatus === GAME_STATUS.running) {
    return <>
      <p className="text-white">Cartas restantes no baralho: {props.remainingCards}</p>
      <div className="d-flex w-full">
        <button className="btn btn-danger m-2 w-full" onClick={() => props.standGame()} >Stand (parar)</button>
        <button className="btn btn-primary m-2 w-full" disabled={props.drawDisabled} onClick={() => props.drawUser()} >Hit (comprar)</button>
      </div>
    </>
  }

  if ([GAME_STATUS.win, GAME_STATUS.lose, GAME_STATUS.draw].includes(props.gameStatus)) {
    let message = ''
    let color = ''
    if (props.gameStatus === GAME_STATUS.win) { color = "primary"; message = "Você ganhou!" }
    if (props.gameStatus === GAME_STATUS.lose) { color = "danger"; message = "Você perdeu!" }
    if (props.gameStatus === GAME_STATUS.draw) { color = "warning "; message = "Empatou!" }
    return <>
      <div className={`alert alert-${color} fs-1`} role="alert">
        {message}
      </div>
      <div className="d-flex w-full">
        <button className="btn btn-primary m-2 w-full" onClick={() => props.restart()} >Jogar de novo</button>
      </div>
    </>
  }

  return null
}

export default (props) => {
  return (
    <div className="blackjack-container">
      <div className="container pt-4">
        <span className="info-deckid">DeckID: {props.deck ? props.deck.deck_id : ''}</span>
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="mb-3 d-flex flex-column justify-content-center">
              <div className="text-white">Dealer</div>
              <Cards cards={props.dealerCards} dealer={true} gameStatus={props.gameStatus} />
              {props.gameStatus === GAME_STATUS.running ?
                <div className="text-white info">{props.dealerCards[0].valueInt} + ?</div>
                :
                <div className="text-white info">{props.dealerCards.map(x => x.valueInt).reduce((a, b) => a + b, 0)}</div>
              }
            </div>
            <div className="mt-3 d-flex flex-column justify-content-center">
              <div className="text-white">Você</div>
              <Cards cards={props.userCards} />
              <div className="text-white info">{props.userCards.map(x => x.valueInt).reduce((a, b) => a + b, 0)}</div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex flex-column m-auto mt-3 justify-content-center">
            <ButtonAndScore props={props} />
          </div>
        </div>
      </div>
    </div>
  );

};