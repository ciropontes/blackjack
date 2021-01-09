import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { setDeck, addWin, addLose, addDraw } from '../actions';
import Blackjack from "../components/Blackjack";
import { useDeck, reshuffleCards, drawCards } from '../api/DeckHook'
import { GAME_STATUS } from '../util/constants'

const BlackjackManager = (props) => {

    var deck = useDeck()
    const [userCards, setUserCards] = useState([])
    const [dealerCards, setDealerCards] = useState([])
    const [remainingCards, setRemainingCards] = useState(0)
    const [drawDisabled, setDrawDisabled] = useState(true)
    const [gameStatus, setGameStatus] = useState(0)
    var gameInitialized = false

    async function startGame() {
        if (gameStatus > 0) {
            //Restart game
            setUserCards([])
            setRemainingCards([])
            let reshuffleDeck = await reshuffleCards(deck.deck_id)
            deck = reshuffleDeck
        }

        setRemainingCards(deck.remaining)

        let userDraw = await drawCards(deck.deck_id, 2)
        setUserCards(userDraw.cards)
        setRemainingCards(userDraw.remaining)

        let dealerDraw = await drawCards(deck.deck_id, 2)
        setDealerCards(dealerDraw.cards)
        setRemainingCards(dealerDraw.remaining)
        setDrawDisabled(false)
        setGameStatus(GAME_STATUS.running)
    }

    useEffect(() => {
        if (!gameInitialized && deck && deck.deck_id) {
            startGame(deck)
            gameInitialized = true
        }
    }, [deck])

    async function drawUser() {
        setDrawDisabled(true)
        let draw = await drawCards(deck.deck_id, 1)
        let userCardsAux = userCards.concat(draw.cards)
        setUserCards(userCardsAux)
        setRemainingCards(draw.remaining)
        let dealerCardsAux = await checkIfDealerDraw()
        let totalUser = userCardsAux.map(x => x.valueInt).reduce((a, b) => a + b, 0)
        let totalDealer = dealerCardsAux.map(x => x.valueInt).reduce((a, b) => a + b, 0)
        console.log()
        console.log('totalDealer', totalDealer)
        console.log('totalUser', totalUser)
        if (totalUser <= 21) {
            setDrawDisabled(false)
        }
        if (totalUser > 21) {
            if (totalDealer > 21) {
                setGameStatus(GAME_STATUS.draw)
                props.addDraw({ userCards: userCardsAux, dealerCards: dealerCardsAux })
            }
            if (totalDealer <= 21) {
                setGameStatus(GAME_STATUS.lose)
                props.addLose({ userCards: userCardsAux, dealerCards: dealerCardsAux })
            }
        }
    }
    async function drawDealer() {
        let draw = await drawCards(deck.deck_id, 1)
        let cards = dealerCards.concat(draw.cards)
        setDealerCards(cards)
        setRemainingCards(draw.remaining)
        return cards
    }
    async function checkIfDealerDraw() {
        let total = dealerCards.map(x => x.valueInt).reduce((a, b) => a + b, 0)
        let dealerCardsAux = dealerCards
        if (total < 16) {
            dealerCardsAux = await drawDealer()
        }
        return dealerCardsAux
    }
    async function standGame() {
        let dealerCardsAux = await checkIfDealerDraw()
        let userCardsAux = userCards
        let totalUser = userCardsAux.map(x => x.valueInt).reduce((a, b) => a + b, 0)
        let totalDealer = dealerCardsAux.map(x => x.valueInt).reduce((a, b) => a + b, 0)

        if (totalUser === totalDealer || (totalUser > 21 && totalDealer > 21)) {
            setGameStatus(GAME_STATUS.draw)
            props.addDraw({ userCards: userCardsAux, dealerCards: dealerCardsAux })
        }
        if ((totalUser > totalDealer && totalUser <= 21) || (totalDealer > 21 && totalUser <= 21)) {
            setGameStatus(GAME_STATUS.win)
            props.addWin({ userCards: userCardsAux, dealerCards: dealerCardsAux })
        }

        if ((totalDealer > totalUser && totalDealer <= 21) || (totalUser > 21 && totalDealer <= 21)) {
            setGameStatus(GAME_STATUS.lose)
            props.addLose({ userCards: userCardsAux, dealerCards: dealerCardsAux })
        }

    }

    return <Blackjack
        deck={deck}
        dealerCards={dealerCards}
        userCards={userCards}
        drawUser={drawUser}
        remainingCards={remainingCards}
        drawDisabled={drawDisabled}
        gameStatus={gameStatus}
        standGame={standGame}
        restart={startGame}
    />
}
const mapDispatchToProps = dispatch => bindActionCreators({ addWin, addLose, addDraw }, dispatch);

export default connect(null, mapDispatchToProps)(BlackjackManager)