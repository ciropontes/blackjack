import React from "react";
import { GAME_STATUS } from '../util/constants'

export default (props) => {
    const cards = props.cards
    if (!(cards && cards.length)) return null
    var cardsIcon = cards.map((card, index) => {
        let img = card.image
        let hide = false
        if (index > 0 && props.dealer && props.gameStatus === GAME_STATUS.running) hide = true
        if (hide) {
            img = 'https://namekusei.files.wordpress.com/2010/09/verso2.jpg'
        }
        return <img className={`deck-card ${hide ? 'p-1' : ''}`} key={card.code} src={img} alt={card.value} />
    })

    return <div>{cardsIcon}</div>
}