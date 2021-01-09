import actionTypes from '../actions/actionTypes';
const initialState = {
    deck: {},
    games: [],
};
export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_DECK:
            return { ...state, deck: action.deck }
        case actionTypes.ADD_WIN:
            return { ...state, games: state.games.concat([{ ...action.game, date: new Date(), gameStatus: 2 }]) }
        case actionTypes.ADD_LOSE:
            return { ...state, games: state.games.concat([{ ...action.game, date: new Date(), gameStatus: 3 }]) }
        case actionTypes.ADD_DRAW:
            return { ...state, games: state.games.concat([{ ...action.game, date: new Date(), gameStatus: 4 }]) }
        default:
            return state;
    }
};