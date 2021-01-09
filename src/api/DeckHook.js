import axios from "axios";
import React, { useEffect, useState } from "react";
import { DeckService } from './DeckService'

const useDeck = () => {
  const [deck, setDeck] = useState({})
  useEffect(() => {
    DeckService.shuffleCards(deck.deck_id).then(result => {
      setDeck(result.data)
    })
  }, [])
  return deck
}

const useDrawCards = (deckId, count = 1) => {
  const [cards, setCards] = useState([])
  useEffect(() => {
    DeckService.drawCards(deckId, count)
      .then(result => {
        setCards(result.data.cards)
      })

  }, [])
  return cards
}

const drawCards = (deckId, count = 1) => {
  return DeckService.drawCards(deckId, count)
    .then(result => {
      let draw = result.data
      draw.cards.forEach(card => {
        if (!Number.isNaN(parseInt(card.value))) {
          card.valueInt = parseInt(card.value)
        }
        else if (card.value === "ACE") card.valueInt = 1
        else card.valueInt = 10
      });
      return draw
    })
}

const useReshuffle = (deckId) => {
  const [deck, setDeck] = useState({})
  useEffect(() => {
    DeckService.reshuffleCards(deckId).then(result => {
      setDeck(result.data)
    })
  }, [])
  return deck
}
const reshuffleCards = (deckId) => {
  return DeckService.reshuffleCards(deckId).then(result => {
    return result.data
  })
}

export {
  useDeck,
  useDrawCards,
  useReshuffle,
  drawCards,
  reshuffleCards,
}