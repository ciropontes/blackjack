import axios from "axios";

export class DeckService {

  static BASE_URL = "https://deckofcardsapi.com/api/deck/"


  /*Shuffle the Cards

  RESPONSE:
  {
    "success": true,
    "deck_id": "3p40paa87x90",
    "shuffled": true,
    "remaining": 52
  }
   */
  static shuffleCards(deckCount = 1) {
    return axios(`${this.BASE_URL}new/shuffle/?deck_count=${deckCount}`);
  }

  /*Draw a Card

  RESPONSE:
  {
    "success": true,
    "cards": [
        {
            "image": "https://deckofcardsapi.com/static/img/KH.png",
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
        },
        {
            "image": "https://deckofcardsapi.com/static/img/8C.png",
            "value": "8",
            "suit": "CLUBS",
            "code": "8C"
        }
    ],
    "deck_id":"3p40paa87x90",
    "remaining": 50
  }
   */
  static drawCards(deckId, count = 1) {
    return axios(`${this.BASE_URL}${deckId}/draw/?count=${count}`);
  }

  /*Reshuffle the Cards

  RESPONSE:
  {
    "success": true,
    "deck_id": "3p40paa87x90",
    "shuffled": true,
    "remaining": 52
  }
   */
  static reshuffleCards(deckId) {
    return axios(`${this.BASE_URL}${deckId}/shuffle/`);
  }

}
